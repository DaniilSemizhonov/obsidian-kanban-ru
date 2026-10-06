# Kanban: русский язык

Плагин для Obsidian, который переводит интерфейс плагина [Kanban](https://github.com/mgmeyers/obsidian-kanban) на русский язык: команды, меню карточек и списков, настройки, диалоги и столбцы таблицы.

## Как работает

У Kanban нет API для перевода, поэтому плагин при запуске Obsidian:

1. сохраняет оригинальный `.obsidian/plugins/obsidian-kanban/main.js` в `main.js.kanban-ru-backup`;
2. встраивает русский словарь в функцию перевода Kanban;
3. перезапускает Kanban, а открытые доски открывает заново.

Перевод работает при любом языке интерфейса Obsidian. После обновления Kanban он применяется снова автоматически.

Маркеры `**Complete**` и `## Archive`, которые Kanban пишет в файл доски, не переводятся. Иначе существующие доски перестали бы правильно читаться.

## Установка

Через [BRAT](https://github.com/TfTHacker/obsidian42-brat): «Add Beta plugin» → `DaniilSemizhonov/obsidian-kanban-ru`, затем включите плагин в разделе «Сторонние плагины».

Вручную: скачайте `main.js` и `manifest.json` из [последнего релиза](https://github.com/DaniilSemizhonov/obsidian-kanban-ru/releases/latest) в `<хранилище>/.obsidian/plugins/kanban-ru/`.

## Откат

Команда «Вернуть оригинальный Kanban и отключить перевод» или кнопка в настройках плагина. Можно и вручную: удалить `main.js` у Kanban и переименовать `main.js.kanban-ru-backup` обратно в `main.js`.

## Сборка

```bash
npm install
npm run build
```
