const projects = [
  {
    id: "sales-workspace",
    title: "Рабочая платформа отдела продаж",
    shortTitle: "Sales Workspace",
    client: "Внутренний продукт",
    type: "Internal product / Sales enablement",
    year: "2026",
    color: "#8f6cff",
    rgb: "143, 108, 255",
    iconText: "WS",
    role: "Самостоятельное проектирование структуры продукта, модулей, пользовательских сценариев, интерфейсов и логики первой версии.",
    summary: "Единое рабочее пространство для обучения и ежедневной работы отдела продаж: от материалов и статусов команды до каталога и подготовки коммерческих предложений.",
    highlights: [
      "Академия с курсами, заданиями, библиотекой и внутренней валютой.",
      "Рабочие статусы сотрудников и игровая карта активности команды.",
      "Каталог мебели, профили поставщиков и подготовка структуры данных.",
      "Конструктор коммерческих предложений и подбор товаров по параметрам запроса.",
    ],
    stack: [".NET 8", "PostgreSQL", "Vue SPA", "HTML", "CSS", "JavaScript"],
    media: [
      {
        type: "image",
        src: "assets/cases/sales-workspace/workspace.png",
        label: "Обзор единого рабочего пространства",
      },
      { type: "image", src: "assets/cases/sales-workspace/statuses.png", label: "Выбор рабочего статуса" },
      {
        type: "image",
        src: "assets/cases/sales-workspace/team-map.png",
        label: "Карта активности команды",
      },
    ],
  },
  {
    id: "national-education",
    title: "Сайт «НацОбр»",
    shortTitle: "НацОбр",
    client: "Национальное образование",
    type: "Corporate website / EdTech",
    year: "2025",
    color: "#0878bd",
    rgb: "8, 120, 189",
    iconText: "НО",
    role: "Участвовал в создании сайта поставщика школьного оборудования и решений для умных классов.",
    summary: "Корпоративный сайт, который объединяет товарный каталог, готовые комплекты классов, реализованные проекты и сценарии получения заявки.",
    highlights: [
      "Каталог оборудования и категории по учебным предметам.",
      "Готовые классы и комплексные решения для школ.",
      "Реализованные проекты и этапы работы.",
      "Формы заявки и контакты для перехода к обсуждению проекта.",
    ],
    stack: ["Web", "Responsive", "Catalog", "Forms"],
    media: [
      { type: "image", src: "assets/cases/national-education/hero.png", label: "Главная страница и позиционирование" },
      { type: "image", src: "assets/cases/national-education/classes.png", label: "Галерея готовых классов" },
      { type: "image", src: "assets/cases/national-education/projects.png", label: "Проекты, направления и факты о компании" },
    ],
  },
  {
    id: "school-sport-portal",
    title: "Портал школ и спорта",
    shortTitle: "Школы и спорт",
    client: "Presale-проработка",
    type: "Консультация / Service design",
    year: "2026",
    color: "#e0a228",
    rgb: "224, 162, 40",
    iconText: "ПС",
    role: "Консультация по составу платформы, пользовательским сценариям и первичным требованиям.",
    summary: "Проработка возможной структуры регионального сервиса для школ и развития спортивных инициатив.",
    highlights: ["Состав платформы.", "Ключевые пользовательские сценарии.", "Первичные требования.", "Возможная структура сервиса."],
    stack: ["Discovery", "Requirements", "Service design"],
    media: [],
  },
  {
    id: "ai-presale",
    title: "AI Presale Assistant",
    shortTitle: "AI Presale",
    client: "Internal / СберСеллер",
    type: "AI-сервис",
    year: "2026",
    color: "#22ad7a",
    rgb: "34, 173, 122",
    iconText: "AI",
    role:
      "Проектирование MVP, UX-логики и AI-пайплайна; разработка локального прототипа с Codex и подготовка к корпоративному развёртыванию.",
    summary:
      "Внутренний AI-инструмент для автоматизации presale workflow: загрузка клиентских брифов, парсинг, аудит, анализ рынка, генерация креативных концепций и финального отчёта.",
    highlights: [
      "Собран локальный рабочий сервис с модульным pipeline: файл, парсинг, аудит, рынок, концепты, отчёт.",
      "Поддержаны локальные LLM-модели, российские LLM API и поисковые сервисы.",
      "Интерфейс проектировался под реальную работу presale-команды: быстрый запуск, статусы, score и выгрузки.",
    ],
    stack: ["Python", "HTML", "CSS", "JavaScript", "LLM", "Search API", "Codex", "Local models"],
    media: [
      {
        type: "image",
        src: "assets/cases/ai/ai-upload.png",
        label: "Загрузка и настройка анализа",
      },
      {
        type: "image",
        src: "assets/cases/ai/ai-processing.png",
        label: "Обработка брифа локальной AI-моделью",
      },
      {
        type: "image",
        src: "assets/cases/ai/ai-results.png",
        label: "Результаты аудита и оценка брифа",
      },
    ],
  },
  {
    id: "sales-flow-crm",
    title: "Sales Flow CRM",
    shortTitle: "Sales Flow",
    client: "Internal CRM",
    type: "CRM + аналитика",
    year: "2026",
    color: "#2f86ff",
    rgb: "47, 134, 255",
    iconText: "SF",
    role:
      "Проектирование и разработка кастомной CRM для проактивов, клиентских воронок, статусов, фильтров и управленческой аналитики.",
    summary:
      "Внутренняя CRM-система для управления проактивными предложениями, клиентской воронкой и общей аналитикой продаж. Проект разработан с Codex.",
    highlights: [
      "Рабочие пространства проактивов: карточки клиентов, статусы и фильтры.",
      "Аналитика: воронка статусов, деньги по статусам, экспорт CSV/PDF/PPTX.",
      "Интерфейс для ежедневной работы sales/presale-команды.",
    ],
    stack: [".NET 8", "Postgres", "Bootstrap", "HTML", "CSS", "JavaScript", "Codex", "Analytics"],
    media: [
      {
        type: "image",
        src: "assets/cases/crm/crm-dashboard.png",
        label: "Главный экран Sales Flow",
      },
      {
        type: "image",
        src: "assets/cases/crm/crm-workspace.png",
        label: "Рабочее пространство клиентской воронки",
      },
      {
        type: "image",
        src: "assets/cases/crm/crm-all-analytics.png",
        label: "Сводная аналитика",
      },
      {
        type: "image",
        src: "assets/cases/crm/crm-promo-stats.png",
        label: "Аналитика проактива",
      },
    ],
  },
  {
    id: "estimate-builder",
    title: "Конструктор смет",
    shortTitle: "Сметы",
    client: "Internal tool",
    type: "Costing service",
    year: "2026",
    color: "#f0b429",
    rgb: "240, 180, 41",
    iconText: "₽",
    role:
      "Проектирование internal-сервиса, который заменяет ручной расчёт digital-проектов в таблицах и помогает стандартизировать оценку.",
    summary:
      "Внутренний сервис для расчёта стоимости digital-проектов с ролями, структурой работ и подготовкой оценки для presale.",
    highlights: [
      "Перевёл ручной табличный процесс в продуктовую логику с ролями и контролируемой структурой.",
      "Сервис помогает быстрее собирать сметы и уменьшает риск ошибок на этапе presale.",
      "Рабочий интерфейс и логика разработаны с использованием Codex.",
    ],
    stack: [".NET 8", "Postgres", "Bootstrap", "HTML", "CSS", "JavaScript", "Codex"],
    media: [],
  },
  {
    id: "pik",
    title: "ПИК Мегамаркет",
    shortTitle: "ПИК MM",
    client: "ПИК",
    type: "API / web",
    year: "2025",
    color: "#fc4c02",
    rgb: "252, 76, 2",
    icon: "assets/icons/pikFav.png",
    role: "ТЗ, API-интеграция, постановка задач разработчикам, контроль сроков и клиентских правок.",
    summary:
      "Web-проект с API-интеграцией и обработкой пользовательских данных для промо-механики бренда.",
    highlights: [
      "Проработал требования к структуре данных и backend-взаимодействию.",
      "Вёл постановку задач, проверку сборок и коммуникацию с подрядчиками.",
      "Контролировал запуск и корректность пользовательских сценариев.",
    ],
    stack: ["REST API", "JSON", "Web API", "JavaScript", "Jira", "Confluence", "Яндекс.Метрика"],
    media: [{ type: "video", src: "assets/screencasts/pikmegamarket.mp4", label: "Скринкаст проекта" }],
  },
  {
    id: "vich",
    title: "Болезнь без лица",
    shortTitle: "Без лица",
    client: "Ваше дело / Минздрав",
    type: "Интерактивный спецпроект",
    year: "2025",
    color: "#e84f3d",
    rgb: "232, 79, 61",
    icon: "assets/icons/bezlica.png",
    awards: [
      {
        title: "Лучший социальный проект",
        result: "Шорт-лист премии НПБК «Эффективность 2026»",
      },
      {
        title: "Public Vote",
        result: "Спецноминация Silver Mercury 2026",
      },
      {
        title: "Бронзовая премия",
        result: "Silver Mercury 2026",
      },
    ],
    role:
      "Технический менеджмент: декомпозиция интерактивной механики, ТЗ, подрядчики, QA, аналитика и запуск.",
    summary:
      "Интерактивный образовательный web-проект о ВИЧ-инфекции, который показывает болезнь через личные истории и вовлекающий цифровой опыт.",
    highlights: [
      "Перевёл творческую концепцию и нелинейный сценарий в технические состояния.",
      "Синхронизировал клиента, дизайн, контент и разработку к фиксированному запуску.",
    ],
    stack: ["Figma", "HTML", "CSS", "JavaScript", "Analytics", "QA", "Jira"],
    media: [{ type: "video", src: "assets/screencasts/bezlica.m4v", label: "Скринкаст проекта" }],
  },
  {
    id: "kids-rules",
    title: "Детские правила",
    shortTitle: "Детские правила",
    client: "Сбер",
    type: "Cybersecurity interactive",
    year: "2025",
    color: "#22a036",
    rgb: "34, 160, 54",
    icon: "assets/cases/sber-logo-ru.png",

    iconText: "DR",
    role:
      "Подготовка ТЗ, описание интерактивных сценариев и контроль реализации образовательного web-проекта.",
    summary:
      "Интерактивный проект по теме кибербезопасности для взрослой аудитории: сложную тему нужно было упаковать в понятный, вовлекающий формат.",
    highlights: [
      "Описал сценарии, состояния интерфейса и требования к адаптивности.",
      "Согласовывал механику с клиентом и подрядчиками.",
      "Контролировал QA и корректность аналитики.",
    ],
    stack: ["Figma", "HTML", "CSS", "JavaScript", "QA", "Analytics"],
    media: [{
        type: "image",
        src: "assets/cases/first_page_rules.png",
        label: "Главная страница",
      },
      {
        type: "image",
        src: "assets/cases/first_screen_rules.png",
        label: "Первый экран",
      },
      {
        type: "image",
        src: "assets/cases/video_rules.png",
        label: "Видео с историей и правилами",
      },
      {
        type: "image",
        src: "assets/cases/story_rules.png",
        label: "История",
      },
      {
        type: "image",
        src: "assets/cases/promo_rules.png",
        label: "Промо-материалы",
      },
      {
        type: "image",
        src: "assets/cases/statistick_rules.png",
        label: "Статистика",
      },
      {
        type: "image",
        src: "assets/cases/game_start_rules.png",
        label: "Старт игры",
      },
      {
        type: "image",
        src: "assets/cases/ques_rules.png",
        label: "Вопросы",
      },
      {
        type: "image",
        src: "assets/cases/answ_rules.png",
        label: "Ответ на вопрос",
      },
      {
        type: "image",
        src: "assets/cases/game_result_rules.png",
        label: "Результат игры",
      },
    ],
  },
  {
    id: "currency",
    title: "Валюта для любых целей",
    shortTitle: "Валюта",
    client: "Сбер",
    type: "Currency API",
    year: "2025",
    color: "#21a038",
    rgb: "33, 160, 56",
    icon: "assets/cases/sber-logo-ru.png",
    role: "Техническая проработка API курсов валют, карт и fallback-сценариев.",
    summary:
      "Web-проект с API-интеграцией курсов валют и использованием Yandex Maps API в пользовательском сценарии.",
    highlights: [
      "Описал требования к внешним API и состояниям интерфейса.",
      "Согласовывал ограничения интеграций между клиентом и разработкой.",
      "Контролировал тестирование сценариев с картой и динамическими данными.",
    ],
    stack: ["REST API", "JSON", "Yandex Maps API", "JavaScript", "QA", "Analytics"],
    media: [{
        type: "image",
        src: "assets/cases/page.png",
        label: "Главный экран",
      },
      {
        type: "image",
        src: "assets/cases/banner.png",
        label: "Баннер",
      },],
  },
  {
    id: "crossy",
    title: "Доберись до стадиона",
    shortTitle: "Crossy Road",
    client: "Fonbet",
    type: "Browser game",
    year: "2025",
    color: "#55b320",
    rgb: "85, 179, 32",
    icon: "assets/icons/CrossyFav.png",
    role: "Техническое ведение браузерной игры: механика, постановка задач, адаптивность, QA.",
    summary:
      "Браузерная игра в стиле Crossy Road для вовлечения аудитории и удержания внимания внутри спецпроекта.",
    highlights: [
      "Согласовывал правила игры, ограничения и техническую реализуемость.",
      "Контролировал сборки, состояния игры и мобильную адаптацию.",
      "Синхронизировал креатив, разработку и клиентские ожидания.",
    ],
    stack: ["Three.js", "JavaScript", "Game loop", "Responsive", "QA", "Jira"],
    media: [{ type: "video", src: "assets/screencasts/FonCrossyRoad.mp4", label: "Скринкаст игры" }],
  },
  {
    id: "territory",
    title: "Захват территории",
    shortTitle: "Territory",
    client: "Fonbet",
    type: "Real-time game",
    year: "2025",
    color: "#0e2924",
    rgb: "14, 41, 36",
    icon: "assets/icons/PaperIo.png",
    role: "Формализация real-time механики, рисков нагрузки, состояний игры и тестирования.",
    summary:
      "Многопользовательская браузерная игра с real-time взаимодействием пользователей, по духу близкая к Slither.io.",
    highlights: [
      "Описал требования к игровым состояниям и взаимодействию пользователей.",
      "Помогал оценивать риски стабильности и нагрузки.",
      "Контролировал запуск с учётом UX, QA и клиентских ограничений.",
    ],
    stack: ["Real-time", "WebSocket logic", "JavaScript", "QA", "Risk management", "Jira"],
    media: [{ type: "video", src: "assets/screencasts/fonSnake.mp4", label: "Скринкаст игры" }],
  },
  {
    id: "insurance",
    title: "Сделайте разворот к призам",
    shortTitle: "КАСКО",
    client: "СберСтрахование",
    type: "Contest promo",
    year: "2024",
    color: "#007252",
    rgb: "0, 114, 82",
    icon: "assets/icons/KaskoFav.png",
    role: "Подготовка ТЗ, механики участия, контроль подрядчиков, аналитики и клиентских согласований.",
    summary:
      "Промо-лендинг КАСКО с конкурсной механикой, регистрационной формой и пользовательской базой.",
    highlights: [
      "Описал сценарии участия пользователя, требования к форме регистрации и данным.",
      "Координировал подрядчиков и обработку клиентских правок.",
      "Следил за корректностью аналитики и готовностью к запуску.",
    ],
    stack: ["JavaScript", "Forms", "Backend", "Analytics", "Jira", "QA"],
    media: [{ type: "video", src: "assets/screencasts/sbskasko.mp4", label: "Скринкаст проекта" }],
  },
  {
    id: "donor",
    title: "Донорство костного мозга",
    shortTitle: "Донорство",
    client: "Минздрав",
    type: "Content landing",
    year: "2024",
    color: "#f57dc3",
    rgb: "245, 125, 195",
    icon: "assets/icons/donorFav.png",
    role: "Техническое сопровождение контентного лендинга с анимациями и адаптивом.",
    summary:
      "Образовательно-просветительский лендинг о донорстве костного мозга с эмоциональной подачей и анимационными секвенциями.",
    highlights: [
      "Согласовывал анимационные сценарии и структуру лендинга.",
      "Контролировал адаптивность и качество пользовательского пути.",
      "Вёл техническую коммуникацию с командой и клиентом.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Animation", "Figma", "QA"],
    media: [{ type: "video", src: "assets/screencasts/Donorstvo.mp4", label: "Скринкаст проекта" }],
  },
];

const projectGroups = [
  { id: "all", label: "Все", shortLabel: "Все" },
  { id: "automation", label: "Бизнес-системы и автоматизация", shortLabel: "Автоматизация" },
  { id: "ai", label: "AI и интеллектуальные инструменты", shortLabel: "AI" },
  { id: "digital", label: "Цифровые продукты", shortLabel: "Продукты" },
  { id: "interactive", label: "Эксперименты и интерактив", shortLabel: "Интерактив" },
  { id: "presale", label: "Presale и проектирование решений", shortLabel: "Presale" },
];

const projectDetails = {
  "sales-workspace": {
    category: "automation",
    status: "Рабочая версия · внутреннее тестирование",
    problem: "Обучение, материалы, статусы команды, данные поставщиков и подготовка коммерческих предложений существовали как отдельные процессы. Менеджерам приходилось вручную искать позиции и собирать предложения.",
    solution: "Единое рабочее пространство, которое связывает обучение, командные статусы, каталог, подготовку данных и конструктор коммерческих предложений.",
    result: "Собрана рабочая первая версия продукта для внутреннего тестирования.",
    technologies: [".NET 8", "PostgreSQL", "Vue SPA", "HTML", "CSS", "JavaScript"],
    tools: ["Codex", "Product design", "UX scenarios"],
  },
  "national-education": {
    category: "digital",
    status: "Сайт работает",
    problem: "Поставщику школьного оборудования требовалось представить большой ассортимент, готовые классы и выполненные проекты в понятной структуре.",
    solution: "Корпоративный сайт с каталогом, предметными категориями, готовыми комплектами, реализованными проектами и формами заявки.",
    result: "На сайте собраны каталог, готовые классы, выполненные проекты и формы заявки.",
    technologies: ["Web", "Responsive", "Catalog", "Forms"],
    tools: [],
  },
  "school-sport-portal": {
    category: "presale",
    status: "Консультация / presale-проработка",
    problem: "Требовалось определить возможный состав региональной платформы и основные сценарии её пользователей.",
    solution: "Проработаны первичные требования, пользовательские сценарии и возможная структура сервиса.",
    result: "Подготовлена консультационная основа для дальнейшей оценки и проектирования.",
    technologies: ["Discovery", "Requirements", "Service design"],
    tools: ["Presale"],
  },
  "ai-presale": {
    category: "ai",
    type: "AI / Presale Automation",
    status: "Прототип · стадия тестирования",
    problem:
      "Анализ брифа, рынка, конкурентов и рисков, а также подготовка концепций занимают значительное время presale-команды.",
    solution:
      "Локальный прототип AI-системы, объединяющий аналитические операции в последовательный workflow.",
    role:
      "Проектирование MVP, пользовательских сценариев и логики AI-пайплайна; создание локального прототипа с Codex, интеграция моделей и подготовка к возможному корпоративному развёртыванию.",
    summary:
      "Прототип AI-системы для последовательного анализа клиентского брифа и подготовки структурированного результата.",
    highlights: [
      "Загрузка и обработка клиентских брифов.",
      "Анализ требований, рисков, рынка и конкурентов.",
      "Генерация концепций и структурированного отчёта.",
      "Поддержка разных AI-провайдеров.",
    ],
    result:
      "Собран рабочий локальный MVP для проверки логики AI-assisted presale.",
    technologies: ["Python", "HTML", "CSS", "JavaScript", "LLM API", "Search API", "Local models"],
    tools: ["Codex"],
  },
  "sales-flow-crm": {
    category: "automation",
    title: "Sales Flow — система управления проектными продажами",
    shortTitle: "Sales Flow",
    client: "Internal product",
    type: "CRM / Аналитика продаж / Internal Tool",
    status: "Рабочая основная версия",
    problem:
      "Данные о потенциальных сделках, статусах, клиентах и направлениях продаж находились в таблицах, поэтому воронку и потенциальную выручку было сложно анализировать оперативно.",
    solution:
      "Специализированное внутреннее веб-приложение для управления проектными предложениями, статусами, аналитикой и отчётностью.",
    role:
      "Самостоятельно спроектировал и создал основную версию продукта: структуру, пользовательскую логику, интерфейс и аналитику.",
    summary:
      "Внутренняя система для контроля проектных предложений, потенциальной выручки и причин потери сделок.",
    highlights: [
      "Учёт проектов, потенциальных сделок и статусов воронки.",
      "Аналитика по выручке, направлениям и клиентам.",
      "Конверсия, причины потери, фильтры и сводные показатели.",
      "Экспорт отчётности.",
    ],
    result: "В рабочей версии данные о предложениях, статусах и потенциальной выручке собраны в одном интерфейсе.",
    technologies: [".NET 8", "PostgreSQL", "Bootstrap", "HTML", "CSS", "JavaScript"],
    tools: ["Codex"],
  },
  "estimate-builder": {
    category: "automation",
    type: "Автоматизация расчётов / Internal Tool",
    status: "Рабочая первая версия",
    problem:
      "Менеджер вручную запрашивал оценки у подразделений, собирал ответы и консолидировал итоговую смету в Excel с риском ошибок.",
    solution:
      "Веб-сервис, где подразделения заполняют свои части по индивидуальным ссылкам, а менеджер проверяет консолидацию, задаёт маржу и выгружает Excel.",
    role:
      "Спроектировал исходную систему, её логику, структуру и пользовательские сценарии, участвовал в первоначальной реализации.",
    summary:
      "Внутренний веб-сервис для совместной подготовки проектной сметы несколькими подразделениями.",
    highlights: [
      "Создание проектов и раздельное заполнение оценок.",
      "Консолидация данных в единой структуре.",
      "Управление итоговой стоимостью и маржой.",
      "Автоматическая выгрузка готовой сметы в Excel.",
    ],
    result: "Ручная консолидация заменена единым процессом подготовки сметы на этапе presale.",
    technologies: [".NET 8", "PostgreSQL", "Bootstrap", "HTML", "CSS", "JavaScript"],
    tools: ["Codex"],
    visual: "estimate-flow",
  },
  pik: {
    category: "digital",
    status: "Запущен",
    problem: "Промо-механике требовались согласованная структура данных, API-интеграция и надёжная обработка пользовательских сценариев.",
    solution: "Web-проект с backend-взаимодействием, обработкой данных и аналитикой пользовательского пути.",
    result: "Проект доведён до запуска с проверенными сценариями и корректной передачей данных.",
    technologies: ["REST API", "JSON", "Web API", "JavaScript"],
    tools: ["Jira", "Confluence", "Яндекс.Метрика"],
  },
  vich: {
    category: "digital",
    status: "Запущен",
    problem: "Нужно было перевести сложную социальную тему и нелинейный творческий сценарий в понятный цифровой опыт.",
    solution: "Интерактивный образовательный web-проект, раскрывающий тему через личные истории и вовлекающую механику.",
    result: "Проект запущен и получил три подтверждённые награды и номинации в 2026 году.",
    technologies: ["HTML", "CSS", "JavaScript"],
    tools: ["Figma", "Jira", "QA", "Analytics"],
  },
  "kids-rules": {
    category: "digital",
    status: "Проектная реализация",
    problem: "Сложную тему кибербезопасности требовалось объяснить взрослой аудитории в понятном и вовлекающем формате.",
    solution: "Образовательный web-проект с историями, видео, статистикой и игровой проверкой знаний.",
    result: "Сценарии, состояния, адаптивность и аналитика сведены в целостную интерактивную механику.",
    technologies: ["HTML", "CSS", "JavaScript"],
    tools: ["Figma", "QA", "Analytics"],
  },
  currency: {
    category: "digital",
    status: "Проектная реализация",
    problem: "Пользовательскому сценарию требовались актуальные курсы валют, карта отделений и устойчивые fallback-состояния.",
    solution: "Web-проект с интеграцией API курсов валют и Yandex Maps API.",
    result: "Спроектированы требования к интеграциям и проверены сценарии с картой и динамическими данными.",
    technologies: ["REST API", "JSON", "Yandex Maps API", "JavaScript"],
    tools: ["QA", "Analytics"],
  },
  crossy: {
    category: "interactive",
    status: "Рабочая сборка",
    problem: "Нужно было адаптировать знакомую игровую механику для брендового web-формата и мобильных устройств.",
    solution: "Браузерная 3D-игра с короткой сессией и понятным циклом прохождения.",
    result: "Механика, состояния и адаптивность подготовлены и проверены в рабочих сборках.",
    technologies: ["Three.js", "JavaScript", "Game loop", "Responsive web"],
    tools: ["Jira", "QA"],
  },
  territory: {
    category: "interactive",
    status: "Запущен",
    problem: "Многопользовательская механика требовала формализации real-time состояний и оценки рисков стабильности под нагрузкой.",
    solution: "Браузерная игра с одновременным взаимодействием пользователей и захватом территории.",
    result: "Проект доведён до запуска с учётом UX, стабильности и клиентских ограничений.",
    technologies: ["Real-time", "WebSocket logic", "JavaScript"],
    tools: ["Jira", "QA", "Risk management"],
  },
  insurance: {
    category: "digital",
    status: "Подготовлен к запуску",
    problem: "Конкурсной промо-механике требовались однозначные правила участия, регистрация и корректная работа с пользовательскими данными.",
    solution: "Промо-лендинг КАСКО с формой регистрации, конкурсным сценарием и аналитикой.",
    result: "Требования, подрядчики, клиентские правки и готовность продукта к запуску были синхронизированы.",
    technologies: ["JavaScript", "Forms", "Backend"],
    tools: ["Jira", "QA", "Analytics"],
  },
  donor: {
    category: "digital",
    status: "Проектная реализация",
    problem: "Просветительскую тему нужно было подать эмоционально, сохранив понятный путь и качество на разных экранах.",
    solution: "Контентный лендинг с адаптивной структурой и анимационными секвенциями.",
    result: "Структура, анимационные сценарии и адаптивность сведены в целостный пользовательский опыт.",
    technologies: ["HTML", "CSS", "JavaScript", "Animation"],
    tools: ["Figma", "QA"],
  },
};

projects.forEach((project) => Object.assign(project, projectDetails[project.id]));

const projectOrder = [
  "territory", "vich", "sales-workspace", "ai-presale", "sales-flow-crm", "estimate-builder",
  "national-education", "pik", "kids-rules", "currency", "crossy", "insurance", "donor",
  "school-sport-portal",
];

projects.sort((a, b) => projectOrder.indexOf(a.id) - projectOrder.indexOf(b.id));

const state = {
  activeId: projects[0].id,
  activeIndex: 0,
  activeMediaIndex: 0,
  activeGroup: "all",
  autoplayPaused: false,
  autoplayTimer: null,
  lastFocusedElement: null,
};

const root = document.documentElement;
const projectNodes = document.querySelector("#projectNodes");
const projectShowcase = document.querySelector("#projectShowcase");
const projectIndex = document.querySelector("#projectIndex");
const projectGroupsNode = document.querySelector("#projectGroups");
const homeView = document.querySelector("#homeView");
const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");
const pulseButton = document.querySelector("#pulseButton");
const showcaseCounter = document.querySelector("#showcaseCounter");
const showcaseProgress = document.querySelector("#showcaseProgress");
const caseView = document.querySelector("#caseView");
const mediaFrame = document.querySelector("#mediaFrame");
const caseVideo = document.querySelector("#caseVideo");
const caseImage = document.querySelector("#caseImage");
const fallbackVisual = document.querySelector("#fallbackVisual");
const backButton = document.querySelector("#backButton");
const caseNav = document.querySelector("#caseNav");
const mediaPills = document.querySelector("#mediaPills");
const caseAward = document.querySelector("#caseAward");
const profileTrigger = document.querySelector("#profileTrigger");
const profileDialog = document.querySelector("#profileDialog");
const profileClose = document.querySelector("#profileClose");

function setAccent(project) {
  root.style.setProperty("--accent", project.color);
  root.style.setProperty("--accent-rgb", project.rgb);
}

function projectIconMarkup(project) {
  if (project.icon) {
    return `<img src="${project.icon}" alt="" />`;
  }

  return `<span class="project-letter">${project.iconText || project.shortTitle.slice(0, 2)}</span>`;
}

function getGroup(category) {
  return projectGroups.find((group) => group.id === category) || projectGroups[0];
}

function getVisibleProjects() {
  return state.activeGroup === "all"
    ? projects
    : projects.filter((project) => project.category === state.activeGroup);
}

function estimateFlowMarkup(compact = false) {
  const steps = [
    ["01", "Создание проекта"],
    ["02", "Оценки подразделений"],
    ["03", "Консолидация и маржа"],
    ["04", "Готовая смета"],
  ];

  return `
    <div class="estimate-flow${compact ? " is-compact" : ""}">
      <span class="estimate-flow-kicker">Схема процесса подготовки сметы</span>
      <div class="estimate-flow-track">
        ${steps
          .map(
            ([number, label], index) => `
              <div class="estimate-step">
                <span>${number}</span>
                <strong>${label}</strong>
              </div>
              ${index < steps.length - 1 ? '<i aria-hidden="true">→</i>' : ""}
            `,
          )
          .join("")}
      </div>
    </div>
  `;
}

function showcaseMediaMarkup(project) {
  const item = project.media?.[0];

  if (project.visual === "estimate-flow") {
    return estimateFlowMarkup(true);
  }

  if (item?.type === "image") {
    return `<img class="${project.mediaFit === "cover" ? "is-cover" : ""}" src="${item.src}" alt="" draggable="false" />`;
  }

  if (item?.type === "video") {
    return `<video src="${item.src}" muted loop playsinline preload="metadata"></video>`;
  }

  return `
    <div class="showcase-placeholder" aria-hidden="true">
      <span>${project.iconText || project.shortTitle.slice(0, 2)}</span>
      <strong>${project.type}</strong>
    </div>
  `;
}

function projectSlideMarkup(project, index) {
  const awardMarkup = project.awards?.length
    ? `
      <span class="showcase-award">
        <span>${project.awards.length} награды</span>
        <strong>Silver Mercury · НПБК</strong>
      </span>
    `
    : "";

  return `
    <article
      class="project-slide${index === 0 ? " is-active" : ""}"
      data-project="${project.id}"
      style="--node-rgb: ${project.rgb}"
    >
      <button class="project-slide-button" type="button" aria-label="Открыть проект ${project.title}">
        <span class="showcase-copy">
          <span class="showcase-meta">
            <span>${String(index + 1).padStart(2, "0")}</span>
            <span>${project.client}</span>
          </span>
          <span class="showcase-group">${getGroup(project.category).label}</span>
          <span class="showcase-type">${project.type}</span>
          <strong class="showcase-title${project.title.length > 20 ? " is-long" : ""}">${project.title}</strong>
          ${awardMarkup}
          <span class="showcase-footer">
            <span class="showcase-status-label">${project.status}</span>
            <span class="showcase-cta">Открыть кейс</span>
          </span>
        </span>
        <span class="showcase-media">
          ${showcaseMediaMarkup(project)}
          <span class="showcase-media-tint" aria-hidden="true"></span>
        </span>
      </button>
    </article>
  `;
}

function renderProjectNodes() {
  projectGroupsNode.innerHTML = projectGroups
    .map((group) => {
      const count = group.id === "all" ? projects.length : projects.filter((project) => project.category === group.id).length;
      return `
        <button type="button" data-group="${group.id}" class="${group.id === "all" ? "is-active" : ""}">
          <span>${group.shortLabel}</span><small>${count}</small>
        </button>
      `;
    })
    .join("");

  renderVisibleProjects();

  projectGroupsNode.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.group === state.activeGroup) return;
      state.activeGroup = button.dataset.group;
      state.activeIndex = 0;
      renderVisibleProjects();
      renderCaseNav();
      setActiveProject(0);
    });
  });
}

function renderVisibleProjects() {
  const visibleProjects = getVisibleProjects();

  projectNodes.innerHTML = visibleProjects
    .map((project, index) => projectSlideMarkup(project, index))
    .join("");

  projectIndex.innerHTML = visibleProjects
    .map(
      (project) => `
        <button
          type="button"
          data-project="${project.id}"
          class="${project.id === visibleProjects[0]?.id ? "is-active" : ""}"
          aria-label="Выбрать проект ${project.title}"
        ><span aria-hidden="true"></span></button>
      `,
    )
    .join("");

  projectNodes.querySelectorAll(".project-slide").forEach((node) => {
    node.addEventListener("click", () => openCase(node.dataset.project, node));
  });

  projectIndex.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const index = visibleProjects.findIndex((project) => project.id === button.dataset.project);
      setActiveProject(index, index < state.activeIndex ? "backward" : "forward");
    });
  });
}

function renderCaseNav() {
  caseNav.innerHTML = getVisibleProjects()
    .map(
      (project) => `
        <button type="button" data-project="${project.id}">
          <span class="case-nav-icon">${projectIconMarkup(project)}</span>
          <span>${project.shortTitle}</span>
        </button>
      `,
    )
    .join("");

  caseNav.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => openCase(button.dataset.project));
  });
}

function getProject(id) {
  return projects.find((project) => project.id === id) || projects[0];
}

function resetShowcaseProgress() {
  showcaseProgress.classList.remove("is-running");
  void showcaseProgress.offsetWidth;
  if (!state.autoplayPaused && getVisibleProjects().length > 1) {
    showcaseProgress.classList.add("is-running");
  }
}

function restartAutoplay() {
  window.clearTimeout(state.autoplayTimer);
  resetShowcaseProgress();

  if (!state.autoplayPaused && getVisibleProjects().length > 1) {
    state.autoplayTimer = window.setTimeout(() => {
      setActiveProject(state.activeIndex + 1, "forward");
    }, 6500);
  }
}

function setActiveProject(index, direction = "forward") {
  const visibleProjects = getVisibleProjects();
  const normalizedIndex = (index + visibleProjects.length) % visibleProjects.length;
  const project = visibleProjects[normalizedIndex];
  state.activeIndex = normalizedIndex;
  state.activeId = project.id;
  setAccent(project);
  projectShowcase.classList.toggle("is-backward", direction === "backward");
  const hasMultipleProjects = visibleProjects.length > 1;
  prevButton.disabled = !hasMultipleProjects;
  nextButton.disabled = !hasMultipleProjects;
  pulseButton.disabled = !hasMultipleProjects;

  projectNodes.querySelectorAll(".project-slide").forEach((slide, slideIndex) => {
    const isActive = slideIndex === normalizedIndex;
    slide.classList.toggle("is-active", isActive);
    const video = slide.querySelector("video");
    if (video) {
      if (isActive) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    }
  });

  projectIndex.querySelectorAll("button").forEach((button, buttonIndex) => {
    const isActive = buttonIndex === normalizedIndex;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-current", isActive ? "true" : "false");
    button.setAttribute("aria-pressed", String(isActive));
  });

  projectGroupsNode.querySelectorAll("button").forEach((button) => {
    const isActive = button.dataset.group === state.activeGroup;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-current", isActive ? "true" : "false");
  });

  showcaseCounter.textContent =
    `${String(normalizedIndex + 1).padStart(2, "0")} / ${String(visibleProjects.length).padStart(2, "0")}`;
  restartAutoplay();
}

function openCase(id, originElement) {
  const project = getProject(id);
  const visibleProjects = getVisibleProjects();
  const visibleIndex = visibleProjects.findIndex((item) => item.id === project.id);
  const index = visibleIndex >= 0 ? visibleIndex : projects.findIndex((item) => item.id === project.id);
  const total = visibleIndex >= 0 ? visibleProjects.length : projects.length;
  const isCaseAlreadyOpen = document.body.classList.contains("case-open");
  window.clearTimeout(state.autoplayTimer);
  showcaseProgress.classList.remove("is-running");
  state.activeId = project.id;
  if (visibleIndex >= 0) state.activeIndex = visibleIndex;
  state.activeMediaIndex = 0;
  setAccent(project);

  const rect = originElement?.getBoundingClientRect();
  const x = rect ? rect.left + rect.width / 2 : window.innerWidth * 0.72;
  const y = rect ? rect.top + rect.height / 2 : window.innerHeight * 0.5;
  root.style.setProperty("--origin-x", `${Math.round(x)}px`);
  root.style.setProperty("--origin-y", `${Math.round(y)}px`);

  document.querySelector("#caseCounter").textContent =
    `${String(index + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
  document.querySelector("#caseClient").textContent = project.client;
  document.querySelector("#caseType").textContent = project.type;
  document.querySelector("#caseTitle").textContent = project.title;
  document.querySelector("#caseSummary").textContent = project.summary;
  document.querySelector("#caseProblem").textContent = project.problem;
  document.querySelector("#caseSolution").textContent = project.solution;
  document.querySelector("#caseRole").textContent = project.role;
  document.querySelector("#caseResult").textContent = project.result;
  document.querySelector("#caseStatus").textContent = project.status;
  document.querySelector("#caseYear").textContent = project.year;
  if (project.awards?.length) {
    caseView.classList.add("has-awards");
    caseAward.hidden = false;
    caseAward.innerHTML = `
      <div class="case-award-heading">
        <span>Награды</span>
        <strong>${project.awards.length} достижения в 2026 году</strong>
      </div>
      <ol class="case-award-list">
        ${project.awards
          .map(
            (award, awardIndex) => `
              <li>
                <span>${String(awardIndex + 1).padStart(2, "0")}</span>
                <strong>${award.title}</strong>
                <small>${award.result}</small>
              </li>
            `,
          )
          .join("")}
      </ol>
    `;
  } else {
    caseView.classList.remove("has-awards");
    caseAward.hidden = true;
    caseAward.innerHTML = "";
  }
  document.querySelector("#caseHighlights").innerHTML = project.highlights
    .map((item) => `<li>${item}</li>`)
    .join("");
  document.querySelector("#caseStack").innerHTML = project.technologies.map((item) => `<span>${item}</span>`).join("");
  document.querySelector("#caseTools").innerHTML = project.tools.map((item) => `<span>${item}</span>`).join("");
  document.querySelector("#caseToolsGroup").hidden = project.tools.length === 0;

  caseNav.querySelectorAll("button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.project === project.id);
  });
  const activeCaseButton = caseNav.querySelector("button.is-active");
  if (activeCaseButton) {
    const targetLeft = activeCaseButton.offsetLeft - (caseNav.clientWidth - activeCaseButton.offsetWidth) / 2;
    caseNav.scrollTo({ left: targetLeft, behavior: isCaseAlreadyOpen ? "smooth" : "auto" });
  }

  renderMedia(project, 0);
  if (!isCaseAlreadyOpen) {
    state.lastFocusedElement = document.activeElement;
  }
  caseView.scrollTop = 0;
  caseView.setAttribute("aria-hidden", "false");
  homeView.setAttribute("inert", "");
  document.body.classList.add("case-open");
  window.setTimeout(() => backButton.focus(), 40);
}

function renderMedia(project, mediaIndex) {
  const media = project.media || [];
  const item = media[mediaIndex];
  state.activeMediaIndex = mediaIndex;

  if (!item) {
    mediaFrame.style.setProperty("--media-ratio", project.visual === "estimate-flow" ? "1 / 1" : "16 / 9");
    caseVideo.pause();
    caseVideo.removeAttribute("src");
    caseVideo.load();
    caseVideo.style.display = "none";
    caseImage.removeAttribute("src");
    caseImage.style.display = "none";
    fallbackVisual.innerHTML = project.visual === "estimate-flow"
      ? estimateFlowMarkup()
      : `<div class="private-visual"><span>${project.iconText || project.shortTitle.slice(0, 2)}</span><strong>Внутренний проект</strong><small>Закрытые материалы</small></div>`;
    fallbackVisual.classList.add("is-visible");
    document.querySelector("#caseReference").textContent = project.visual === "estimate-flow"
      ? "Схема процесса подготовки сметы"
      : "Закрытые материалы проекта";
    mediaPills.innerHTML = "";
    return;
  }

  fallbackVisual.classList.remove("is-visible");
  document.querySelector("#caseReference").textContent = item.label;

  if (item.type === "video") {
    mediaFrame.style.setProperty("--media-ratio", "16 / 9");
    caseImage.removeAttribute("src");
    caseImage.style.display = "none";
    caseVideo.style.display = "block";
    if (caseVideo.getAttribute("src") !== item.src) {
      caseVideo.src = item.src;
    }
    caseVideo.play().catch(() => {});
  } else {
    mediaFrame.style.setProperty("--media-ratio", "16 / 9");
    caseVideo.pause();
    caseVideo.removeAttribute("src");
    caseVideo.load();
    caseVideo.style.display = "none";
    caseImage.src = item.src;
    caseImage.alt = item.label;
    caseImage.style.display = "block";
  }

  mediaPills.innerHTML =
    media.length > 1
      ? media
          .map(
            (mediaItem, index) => `
              <button
                type="button"
                data-media-index="${index}"
                class="${index === mediaIndex ? "is-active" : ""}"
                aria-label="Показать медиа ${index + 1}: ${mediaItem.label}"
              >
                ${String(index + 1).padStart(2, "0")}
              </button>
            `,
          )
          .join("")
      : "";
}

function closeCase() {
  document.body.classList.remove("case-open");
  caseView.setAttribute("aria-hidden", "true");
  homeView.removeAttribute("inert");
  caseVideo.pause();
  setActiveProject(state.activeIndex);
  state.lastFocusedElement?.focus();
}

function showPreviousProject() {
  setActiveProject(state.activeIndex - 1, "backward");
}

function showNextProject() {
  setActiveProject(state.activeIndex + 1, "forward");
}

function toggleAutoplay() {
  state.autoplayPaused = !state.autoplayPaused;
  projectShowcase.classList.toggle("is-paused", state.autoplayPaused);
  pulseButton.setAttribute("aria-pressed", String(state.autoplayPaused));
  const label = state.autoplayPaused
    ? "Запустить автопереключение"
    : "Приостановить автопереключение";
  pulseButton.setAttribute("aria-label", label);
  pulseButton.setAttribute("title", label);
  pulseButton.innerHTML = `
    <span
      class="media-control-icon ${state.autoplayPaused ? "is-play" : "is-pause"}"
      aria-hidden="true"
    ></span>
  `;
  restartAutoplay();
}

prevButton.addEventListener("click", showPreviousProject);
nextButton.addEventListener("click", showNextProject);
pulseButton.addEventListener("click", toggleAutoplay);
backButton.addEventListener("click", closeCase);
profileTrigger.addEventListener("click", () => {
  profileTrigger.setAttribute("aria-expanded", "true");
  profileDialog.showModal();
});

function closeProfileDialog() {
  profileTrigger.setAttribute("aria-expanded", "false");
  profileDialog.close();
  profileTrigger.focus();
}

profileClose.addEventListener("click", closeProfileDialog);
profileDialog.addEventListener("click", (event) => {
  if (event.target === profileDialog) closeProfileDialog();
});
profileDialog.addEventListener("cancel", () => profileTrigger.setAttribute("aria-expanded", "false"));
profileDialog.addEventListener("close", () => {
  profileTrigger.setAttribute("aria-expanded", "false");
  profileTrigger.focus();
});

mediaPills.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-media-index]");
  if (!button) return;

  const project = getProject(state.activeId);
  renderMedia(project, Number(button.dataset.mediaIndex));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && document.body.classList.contains("case-open")) {
    closeCase();
  }
  if (document.body.classList.contains("case-open") && event.key === "ArrowLeft") {
    const visibleProjects = getVisibleProjects();
    const currentIndex = visibleProjects.findIndex((project) => project.id === state.activeId);
    openCase(visibleProjects[(currentIndex - 1 + visibleProjects.length) % visibleProjects.length].id);
  }
  if (document.body.classList.contains("case-open") && event.key === "ArrowRight") {
    const visibleProjects = getVisibleProjects();
    const currentIndex = visibleProjects.findIndex((project) => project.id === state.activeId);
    openCase(visibleProjects[(currentIndex + 1) % visibleProjects.length].id);
  }
  if (!document.body.classList.contains("case-open")) {
    if (event.key === "ArrowLeft") showPreviousProject();
    if (event.key === "ArrowRight") showNextProject();
    if (event.key.toLowerCase() === "p") toggleAutoplay();
  }
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    window.clearTimeout(state.autoplayTimer);
  } else if (!document.body.classList.contains("case-open")) {
    restartAutoplay();
  }
});

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  state.autoplayPaused = true;
  pulseButton.setAttribute("aria-pressed", "true");
  pulseButton.setAttribute("aria-label", "Запустить автопереключение");
  pulseButton.setAttribute("title", "Запустить автопереключение");
  pulseButton.innerHTML = '<span class="media-control-icon is-play" aria-hidden="true"></span>';
}

renderProjectNodes();
renderCaseNav();
setActiveProject(0);
