import { HARDCODED, RU } from './ru';

// Меняется при любом изменении словаря или логики патча — так уже пропатченный
// Kanban пропатчится заново после обновления этого плагина.
const PATCH_VERSION = 1;
const PREFIX = '/*kanban-ru:';

function hash(s: string): string {
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
  return (h >>> 0).toString(36);
}

export const SIGNATURE = `${PREFIX}${PATCH_VERSION}.${hash(JSON.stringify([RU, HARDCODED]))}*/`;

export function isPatched(src: string): boolean {
  return src.startsWith(PREFIX);
}

export function isCurrentPatch(src: string): boolean {
  return src.startsWith(SIGNATURE);
}

// В собранном Kanban функция перевода выглядит так (имена минифицированы):
//   function R(e){return vh||console.error("Error: kanban locale not found",hb),vh&&vh[e]||yh[e]}
const T_FN = /function ([\w$]+)\(([\w$]+)\)\{return [\w$]+\|\|console\.error\("Error: kanban locale not found"/;

export function patchKanban(original: string): string {
  const m = T_FN.exec(original);
  if (!m) throw new Error('не найдена функция перевода в main.js Kanban — возможно, изменился формат сборки');

  const [found, name, arg] = m;
  const dict = `var __kanbanRu=${JSON.stringify(RU)};`;
  const fn =
    `function ${name}(${arg}){if(Object.prototype.hasOwnProperty.call(__kanbanRu,${arg}))return __kanbanRu[${arg}];` +
    found.slice(found.indexOf('return'));

  let out = original.slice(0, m.index) + dict + fn + original.slice(m.index + found.length);

  for (const [en, ru] of Object.entries(HARDCODED)) {
    out = out.split(`children:${JSON.stringify(en)}}`).join(`children:${JSON.stringify(ru)}}`);
  }

  return `${SIGNATURE}\n${out}`;
}
