import { App, Notice, Plugin, PluginSettingTab, Setting, WorkspaceLeaf, ViewState } from 'obsidian';
import { isCurrentPatch, isPatched, patchKanban } from './patch';

const KANBAN_ID = 'obsidian-kanban';
const KANBAN_VIEW = 'kanban';
const BACKUP_NAME = 'main.js.kanban-ru-backup';

// app.plugins — недокументированный, но стабильный API Obsidian.
interface PluginsApi {
  manifests: Record<string, { dir?: string; version: string }>;
  plugins: Record<string, unknown>;
  enabledPlugins: Set<string>;
  enablePlugin(id: string): Promise<boolean>;
  disablePlugin(id: string): Promise<void>;
  disablePluginAndSave(id: string): Promise<void>;
}

type Status = 'not-installed' | 'original' | 'patched' | 'outdated';

export default class KanbanRuPlugin extends Plugin {
  private get plugins(): PluginsApi {
    return (this.app as unknown as { plugins: PluginsApi }).plugins;
  }

  private paths(): { main: string; backup: string } | null {
    const dir = this.plugins.manifests[KANBAN_ID]?.dir;
    return dir ? { main: `${dir}/main.js`, backup: `${dir}/${BACKUP_NAME}` } : null;
  }

  async onload() {
    this.addSettingTab(new KanbanRuSettingTab(this.app, this));

    this.addCommand({
      id: 'apply',
      name: 'Применить перевод Kanban заново',
      callback: () => this.apply(true),
    });
    this.addCommand({
      id: 'restore',
      name: 'Вернуть оригинальный Kanban и отключить перевод',
      callback: () => this.restoreAndDisable(),
    });

    // К этому моменту все плагины уже загружены, можно спокойно перезапускать Kanban.
    this.app.workspace.onLayoutReady(() => this.apply(false));
  }

  async status(): Promise<Status> {
    const p = this.paths();
    if (!p || !(await this.app.vault.adapter.exists(p.main))) return 'not-installed';
    const src = await this.app.vault.adapter.read(p.main);
    if (isCurrentPatch(src)) return 'patched';
    return isPatched(src) ? 'outdated' : 'original';
  }

  async apply(force: boolean) {
    const p = this.paths();
    if (!p) {
      if (force) new Notice('Kanban: плагин Kanban не установлен');
      return;
    }
    const adapter = this.app.vault.adapter;

    try {
      const src = await adapter.read(p.main);
      if (isCurrentPatch(src) && !force) return;

      let original: string;
      if (isPatched(src)) {
        // Пропатчено прошлой версией перевода — берём оригинал из бэкапа.
        if (!(await adapter.exists(p.backup))) {
          throw new Error('main.js уже изменён, а резервной копии нет. Переустановите Kanban.');
        }
        original = await adapter.read(p.backup);
      } else {
        // Первый запуск или Kanban обновился: сохраняем свежий оригинал.
        original = src;
        await adapter.write(p.backup, original);
      }

      await adapter.write(p.main, patchKanban(original));
      await this.reloadKanban();
      new Notice('Kanban переведён на русский');
    } catch (e) {
      console.error('[kanban-ru]', e);
      new Notice(`Kanban: не удалось применить перевод — ${(e as Error).message}`, 10000);
    }
  }

  async restoreAndDisable() {
    const p = this.paths();
    const adapter = this.app.vault.adapter;
    if (p && (await adapter.exists(p.backup))) {
      await adapter.write(p.main, await adapter.read(p.backup));
      await adapter.remove(p.backup);
      await this.reloadKanban();
    }
    new Notice('Оригинальный Kanban восстановлен, перевод отключён');
    // Иначе при следующем запуске перевод применится снова.
    await this.plugins.disablePluginAndSave(this.manifest.id);
  }

  // Перезапускает Kanban, чтобы он перечитал main.js, и возвращает открытые доски.
  private async reloadKanban() {
    const plugins = this.plugins;
    if (!plugins.enabledPlugins.has(KANBAN_ID) || !plugins.plugins[KANBAN_ID]) return;

    const open: [WorkspaceLeaf, ViewState][] = this.app.workspace
      .getLeavesOfType(KANBAN_VIEW)
      .map((leaf) => [leaf, leaf.getViewState()]);

    await plugins.disablePlugin(KANBAN_ID);
    await plugins.enablePlugin(KANBAN_ID);

    for (const [leaf, state] of open) await leaf.setViewState(state);
  }
}

const STATUS_TEXT: Record<Status, string> = {
  'not-installed': 'Плагин Kanban не найден. Установите его из каталога сторонних плагинов.',
  original: 'Перевод ещё не применён.',
  patched: 'Перевод применён.',
  outdated: 'Перевод устарел и будет обновлён при следующем запуске.',
};

class KanbanRuSettingTab extends PluginSettingTab {
  constructor(app: App, private plugin: KanbanRuPlugin) {
    super(app, plugin);
  }

  async display() {
    const { containerEl } = this;
    containerEl.empty();

    const status = await this.plugin.status();
    new Setting(containerEl).setName('Состояние').setDesc(STATUS_TEXT[status]);

    new Setting(containerEl)
      .setName('Применить заново')
      .setDesc('Обычно не требуется: после обновления Kanban перевод применяется автоматически при запуске.')
      .addButton((b) =>
        b.setButtonText('Применить').onClick(async () => {
          await this.plugin.apply(true);
          this.display();
        })
      );

    new Setting(containerEl)
      .setName('Вернуть оригинал')
      .setDesc('Восстанавливает исходный main.js Kanban и отключает этот плагин.')
      .addButton((b) =>
        b
          .setButtonText('Вернуть')
          .setWarning()
          .onClick(() => this.plugin.restoreAndDisable())
      );
  }
}
