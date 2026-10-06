// Русский словарь для obsidian-kanban (ключи — src/lang/locale/en.ts).
// "Complete" и "Archive" намеренно отсутствуют: Kanban пишет их в markdown-файл
// доски как служебные маркеры (**Complete**, ## Archive), и перевод сломал бы
// разбор уже существующих досок.
export const RU: Record<string, string> = {
  // Команды и общие строки
  'Open as kanban board': 'Открыть как Kanban-доску',
  'Create new board': 'Создать новую доску',
  'Archive completed cards in active board': 'Архивировать выполненные карточки на текущей доске',
  'Error: current file is not a Kanban board': 'Ошибка: текущий файл не является Kanban-доской',
  'Convert empty note to Kanban': 'Превратить пустую заметку в Kanban-доску',
  'Error: cannot create Kanban, the current note is not empty':
    'Ошибка: не удалось создать Kanban-доску, текущая заметка не пуста',
  'New kanban board': 'Новая Kanban-доска',
  'Untitled Kanban': 'Kanban без названия',
  'Toggle between Kanban and markdown mode': 'Переключить режим Kanban / markdown',

  'View as board': 'Показать как доску',
  'View as list': 'Показать как список',
  'View as table': 'Показать как таблицу',
  'Board view': 'Вид доски',

  'Open as markdown': 'Открыть как markdown',
  'Open board settings': 'Открыть настройки доски',
  'Archive completed cards': 'Архивировать выполненные карточки',
  'Something went wrong': 'Что-то пошло не так',
  'You may wish to open as markdown and inspect or edit the file.':
    'Попробуйте открыть файл как markdown, чтобы проверить или исправить его.',
  'Are you sure you want to archive all completed cards on this board?':
    'Архивировать все выполненные карточки на этой доске?',

  // Парсер
  'Invalid Kanban file: problems parsing frontmatter':
    'Некорректный файл Kanban: не удалось разобрать frontmatter',
  "I don't know how to interpret this line:": 'Не удалось распознать строку:',
  Untitled: 'Без названия',

  // Настройки
  'Note: No template plugins are currently enabled.':
    'Примечание: сейчас не включён ни один плагин шаблонов.',
  default: 'по умолчанию',
  'Search...': 'Поиск...',
  'New line trigger': 'Перенос строки',
  'Select whether Enter or Shift+Enter creates a new line. The opposite of what you choose will create and complete editing of cards and lists.':
    'Какая клавиша переносит строку: Enter или Shift+Enter. Другая будет сохранять карточку или список и завершать редактирование.',
  'Shift + Enter': 'Shift + Enter',
  Enter: 'Enter',

  'Prepend / append new cards': 'Куда добавлять новые карточки',
  'This setting controls whether new cards are added to the beginning or end of the list.':
    'Новые карточки будут добавляться в начало или в конец списка.',
  Prepend: 'В начало',
  'Prepend (compact)': 'В начало (компактно)',
  Append: 'В конец',

  'These settings will take precedence over the default Kanban board settings.':
    'Эти настройки имеют приоритет над общими настройками Kanban.',
  'Set the default Kanban board settings. Settings can be overridden on a board-by-board basis.':
    'Настройки Kanban-досок по умолчанию. Для каждой доски их можно переопределить отдельно.',

  'Note template': 'Шаблон заметки',
  'This template will be used when creating new notes from Kanban cards.':
    'Этот шаблон используется при создании заметок из карточек.',
  'No template': 'Без шаблона',
  'Note folder': 'Папка для заметок',
  'Notes created from Kanban cards will be placed in this folder. If blank, they will be placed in the default location for this vault.':
    'Сюда попадают заметки, созданные из карточек. Если поле пустое, используется папка по умолчанию для этого хранилища.',
  'Default folder': 'Папка по умолчанию',

  'List width': 'Ширина списка',
  'Expand lists to full width in list view': 'Растягивать списки на всю ширину в режиме списка',
  'Enter a number to set the list width in pixels.': 'Ширина списка в пикселях.',

  'Maximum number of archived cards': 'Максимум карточек в архиве',
  "Archived cards can be viewed in markdown mode. This setting will begin removing old cards once the limit is reached. Setting this value to -1 will allow a board's archive to grow infinitely.":
    'Архив доступен в режиме markdown. При достижении лимита старые карточки начнут удаляться. Значение -1 снимает ограничение.',

  'Display card checkbox': 'Показывать чекбокс у карточек',
  'When toggled, a checkbox will be displayed with each card':
    'Если включено, у каждой карточки будет чекбокс',
  'Reset to default': 'Сбросить к значению по умолчанию',

  'Date & Time': 'Дата и время',
  'Date trigger': 'Вызов выбора даты',
  'When this is typed, it will trigger the date selector':
    'При вводе этого символа открывается выбор даты',
  'Time trigger': 'Вызов выбора времени',
  'When this is typed, it will trigger the time selector':
    'При вводе этого символа открывается выбор времени',
  'Date format': 'Формат даты',
  'This format will be used when saving dates in markdown.':
    'В этом формате даты сохраняются в markdown.',
  'For more syntax, refer to': 'Подробнее о синтаксисе см.',
  'format reference': 'справку по форматам',
  'Your current syntax looks like this': 'Сейчас это выглядит так',
  'Time format': 'Формат времени',
  'Date display format': 'Формат отображения даты',
  'This format will be used when displaying dates in Kanban cards.':
    'В этом формате даты показываются на карточках.',

  'Show relative date': 'Показывать относительную дату',
  "When toggled, cards will display the distance between today and the card's date. eg. 'In 3 days', 'A month ago'. Relative dates will not be shown for dates from the Tasks and Dataview plugins.":
    'Если включено, на карточках будет видно, сколько осталось или прошло с даты карточки: «через 3 дня», «месяц назад». Для дат из плагинов Tasks и Dataview не показывается.',

  'Move dates to card footer': 'Даты в нижней части карточки',
  "When toggled, dates will be displayed in the card's footer instead of the card's body.":
    'Если включено, даты показываются внизу карточки, а не в тексте.',
  'Move tags to card footer': 'Теги в нижней части карточки',
  "When toggled, tags will be displayed in the card's footer instead of the card's body.":
    'Если включено, теги показываются внизу карточки, а не в тексте.',
  'Move task data to card footer': 'Данные задачи в нижней части карточки',
  "When toggled, task data (from the Tasks plugin) will be displayed in the card's footer instead of the card's body.":
    'Если включено, данные задачи (из плагина Tasks) показываются внизу карточки, а не в тексте.',

  'Inline metadata position': 'Где показывать встроенные метаданные',
  'Controls where the inline metadata (from the Dataview plugin) will be displayed.':
    'Где показывать встроенные метаданные (из плагина Dataview).',
  'Card body': 'В тексте карточки',
  'Card footer': 'Внизу карточки',
  'Merge with linked page metadata': 'Объединить с метаданными связанной заметки',

  'Hide card counts in list titles': 'Скрывать число карточек в заголовках списков',
  'When toggled, card counts are hidden from the list title':
    'Если включено, число карточек не показывается рядом с названием списка',
  'Link dates to daily notes': 'Связывать даты с ежедневными заметками',
  'When toggled, dates will link to daily notes. Eg. [[2021-04-26]]':
    'Если включено, даты становятся ссылками на ежедневные заметки, например [[2021-04-26]]',

  'Add date and time to archived cards': 'Добавлять дату и время к архивным карточкам',
  'When toggled, the current date and time will be added to the card title when it is archived. Eg. - [ ] 2021-05-14 10:00am My card title':
    'Если включено, при архивации к названию карточки добавляются текущие дата и время, например: - [ ] 2021-05-14 10:00am Моя карточка',
  'Add archive date/time after card title': 'Дата и время архивации после названия',
  'When toggled, the archived date/time will be added after the card title, e.g.- [ ] My card title 2021-05-14 10:00am. By default, it is inserted before the title.':
    'Если включено, дата и время архивации ставятся после названия карточки, например: - [ ] Моя карточка 2021-05-14 10:00am. По умолчанию они ставятся перед названием.',
  'Archive date/time separator': 'Разделитель даты архивации',
  'This will be used to separate the archived date/time from the title':
    'Отделяет дату и время архивации от названия карточки',
  'Archive date/time format': 'Формат даты архивации',
  'Kanban Plugin': 'Плагин Kanban',

  'Tag click action': 'Действие при клике по тегу',
  'Search Kanban Board': 'Искать на доске',
  'Search Obsidian Vault': 'Искать в хранилище',
  'This setting controls whether clicking the tags displayed below the card title opens the Obsidian search or the Kanban board search.':
    'Что открывает клик по тегу под названием карточки: поиск по хранилищу Obsidian или поиск по доске.',

  'Tag colors': 'Цвета тегов',
  'Set colors for tags displayed in cards.': 'Цвета для тегов на карточках.',
  'Linked Page Metadata': 'Метаданные связанной заметки',
  'Inline Metadata': 'Встроенные метаданные',
  'Display metadata for the first note linked within a card. Specify which metadata keys to display below. An optional label can be provided, and labels can be hidden altogether.':
    'Показывать метаданные первой заметки, на которую ссылается карточка. Ниже укажите, какие ключи выводить. Для ключа можно задать подпись или скрыть её совсем.',
  'Board Header Buttons': 'Кнопки в заголовке доски',

  'Calendar: first day of week': 'Календарь: первый день недели',
  'Override which day is used as the start of the week': 'С какого дня начинается неделя',
  Sunday: 'Воскресенье',
  Monday: 'Понедельник',
  Tuesday: 'Вторник',
  Wednesday: 'Среда',
  Thursday: 'Четверг',
  Friday: 'Пятница',
  Saturday: 'Суббота',

  'Background color': 'Цвет фона',
  Tag: 'Тег',
  'Text color': 'Цвет текста',
  'Date is': 'Дата',
  Today: 'Сегодня',
  'After now': 'Позже текущего момента',
  'Before now': 'Раньше текущего момента',
  'Between now and': 'От текущего момента до',
  'Display date colors': 'Цвета дат',
  'Set colors for dates displayed in cards based on the rules below.':
    'Цвета дат на карточках по правилам ниже.',
  'Add date color': 'Добавить цвет даты',

  'Metadata key': 'Ключ метаданных',
  'Display label': 'Подпись',
  'Hide label': 'Скрыть подпись',
  'Drag to rearrange': 'Перетащите, чтобы изменить порядок',
  Delete: 'Удалить',
  'Add key': 'Добавить ключ',
  'Add tag': 'Добавить тег',
  'Field contains markdown': 'Поле содержит markdown',
  'Tag sort order': 'Порядок сортировки тегов',
  'Set an explicit sort order for the specified tags.': 'Явный порядок сортировки для указанных тегов.',
  'Add tag color': 'Добавить цвет тега',

  // Столбцы таблицы и поля задач (Tasks / Dataview)
  List: 'Список',
  Card: 'Карточка',
  Date: 'Дата',
  Tags: 'Теги',
  Priority: 'Приоритет',
  Start: 'Начало',
  Created: 'Создано',
  Scheduled: 'Запланировано',
  Due: 'Срок',
  Cancelled: 'Отменено',
  Recurrence: 'Повторение',
  'Depends on': 'Зависит от',
  ID: 'ID',

  'More options': 'Другие действия',
  Cancel: 'Отмена',
  Done: 'Готово',
  Save: 'Сохранить',

  // Даты
  today: 'сегодня',
  yesterday: 'вчера',
  tomorrow: 'завтра',
  'Change date': 'Изменить дату',
  'Change time': 'Изменить время',

  // Карточки
  'Card title...': 'Название карточки...',
  'Add card': 'Добавить карточку',
  'Add a card': 'Добавить карточку',
  'Edit card': 'Редактировать карточку',
  'New note from card': 'Создать заметку из карточки',
  'Archive card': 'Архивировать карточку',
  'Delete card': 'Удалить карточку',
  'Edit date': 'Изменить дату',
  'Add date': 'Добавить дату',
  'Remove date': 'Убрать дату',
  'Edit time': 'Изменить время',
  'Add time': 'Добавить время',
  'Remove time': 'Убрать время',
  'Duplicate card': 'Дублировать карточку',
  'Split card': 'Разделить карточку',
  'Copy link to card': 'Копировать ссылку на карточку',
  'Insert card before': 'Вставить карточку выше',
  'Insert card after': 'Вставить карточку ниже',
  'Add label': 'Добавить метку',
  'Move to top': 'В начало списка',
  'Move to bottom': 'В конец списка',
  'Move to list': 'Переместить в список',

  // Списки
  'Enter list title...': 'Название списка...',
  'Mark cards in this list as complete': 'Отмечать карточки в этом списке выполненными',
  'Add list': 'Добавить список',
  'Add a list': 'Добавить список',
  'Move list': 'Переместить список',
  Close: 'Закрыть',
  'Are you sure you want to delete this list and all its cards?':
    'Удалить этот список вместе со всеми карточками?',
  'Yes, delete list': 'Да, удалить список',
  'Are you sure you want to archive this list and all its cards?':
    'Архивировать этот список вместе со всеми карточками?',
  'Yes, archive list': 'Да, архивировать список',
  'Are you sure you want to archive all cards in this list?':
    'Архивировать все карточки в этом списке?',
  'Yes, archive cards': 'Да, архивировать карточки',
  'Edit list': 'Редактировать список',
  'Archive cards': 'Архивировать карточки',
  'Archive list': 'Архивировать список',
  'Delete list': 'Удалить список',
  'Insert list before': 'Вставить список слева',
  'Insert list after': 'Вставить список справа',
  'Sort by card text': 'Сортировать по тексту',
  'Sort by date': 'Сортировать по дате',
  'Sort by tags': 'Сортировать по тегам',
  // Kanban склеивает: t('Sort by') + ' ' + название поля, поэтому двоеточие.
  'Sort by': 'Сортировать по:',

  // Прочее
  'Unable to find': 'Не удалось найти',
  'Open in default app': 'Открыть в приложении по умолчанию',
  Submit: 'Сохранить',
};

// Строки, вшитые в Kanban без t(): <option> в настройках цвета дат.
export const HARDCODED: Record<string, string> = {
  Hours: 'часов',
  Days: 'дней',
  Weeks: 'недель',
  Months: 'месяцев',
};
