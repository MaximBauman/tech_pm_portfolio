const projects = [
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
        label: "AI Presale Assistant / upload workspace",
      },
      {
        type: "image",
        src: "assets/cases/ai/ai-processing.png",
        label: "AI processing overlay",
      },
      {
        type: "image",
        src: "assets/cases/ai/ai-results.png",
        label: "AI audit result and presale score",
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
      "Интерфейс для ежедневной работы sales/presale-команды, а не демо-витрина.",
    ],
    stack: [".NET 8", "Postgres", "Bootstrap", "HTML", "CSS", "JavaScript", "Codex", "Analytics"],
    media: [
      {
        type: "image",
        src: "assets/cases/crm/crm-dashboard.png",
        label: "Sales Flow dashboard",
      },
      {
        type: "image",
        src: "assets/cases/crm/crm-workspace.png",
        label: "Client funnel workspace",
      },
      {
        type: "image",
        src: "assets/cases/crm/crm-all-analytics.png",
        label: "Global analytics",
      },
      {
        type: "image",
        src: "assets/cases/crm/crm-promo-stats.png",
        label: "Promo analytics",
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
      "Внутренний сервис для расчёта стоимости digital-проектов с ролями, структурой работ и подготовкой оценки для presale. Скрин заменён безопасным AI-placeholder из-за коммерческой информации.",
    highlights: [
      "Перевёл ручной табличный процесс в продуктовую логику с ролями и контролируемой структурой.",
      "Сервис помогает быстрее собирать сметы и уменьшает риск ошибок на этапе presale.",
      "Рабочий интерфейс и логика разработаны с использованием Codex.",
    ],
    stack: [".NET 8", "Postgres", "Bootstrap", "HTML", "CSS", "JavaScript", "Codex"],
    media: [
      {
        type: "image",
        src: "assets/cases/ai/ai-processing.png",
        label: "Internal tool placeholder",
      },
    ],
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
    media: [{ type: "video", src: "assets/screencasts/pikmegamarket.mp4", label: "Screencast reference" }],
  },
  {
    id: "vich",
    title: "Ваше дело: болезнь без лица",
    shortTitle: "ВИЧ",
    client: "Минздрав",
    type: "Social impact",
    year: "2025",
    color: "#e84f3d",
    rgb: "232, 79, 61",
    icon: "assets/icons/TakZdorovoFav.svg",
    role:
      "Технический менеджер проекта: ТЗ, подрядчики, интерактивные сценарии, QA, аналитика и запуск.",
    summary:
      "Интерактивный образовательный web-проект о ВИЧ-инфекции. Победитель Silver Mercury в Pure Audience и бронзовый призёр среди социально значимых проектов.",
    highlights: [
      "Декомпозировал интерактивную механику и контентную структуру в задачи для разработки.",
      "Синхронизировал клиентские правки, ограничения и сроки запуска.",
      "Контролировал качество пользовательского пути и готовность проекта к публикации.",
    ],
    stack: ["Figma", "HTML", "CSS", "JavaScript", "Analytics", "QA", "Jira"],
    media: [{ type: "video", src: "assets/screencasts/TakZdorovo.mp4", label: "Related social project reference" }],
  },
  {
    id: "kids-rules",
    title: "Детские правила",
    shortTitle: "Детские правила",
    client: "Сбер",
    type: "Cybersecurity interactive",
    year: "2025",
    color: "#7a63d8",
    rgb: "122, 99, 216",
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
    media: [],
  },
  {
    id: "currency",
    title: "Валюта для любых целей",
    shortTitle: "Валюта",
    client: "Сбер",
    type: "Currency API",
    year: "2025",
    color: "#234be7",
    rgb: "35, 75, 231",
    icon: "assets/icons/vtbFav.png",
    role: "Техническая проработка API курсов валют, карт и fallback-сценариев.",
    summary:
      "Web-проект с API-интеграцией курсов валют и использованием Yandex Maps API в пользовательском сценарии.",
    highlights: [
      "Описал требования к внешним API и состояниям интерфейса.",
      "Согласовывал ограничения интеграций между клиентом и разработкой.",
      "Контролировал тестирование сценариев с картой и динамическими данными.",
    ],
    stack: ["REST API", "JSON", "Yandex Maps API", "JavaScript", "QA", "Analytics"],
    media: [],
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
    media: [{ type: "video", src: "assets/screencasts/FonCrossyRoad.mp4", label: "Screencast reference" }],
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
    media: [{ type: "video", src: "assets/screencasts/fonSnake.mp4", label: "Screencast reference" }],
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
    media: [{ type: "video", src: "assets/screencasts/sbskasko.mp4", label: "Screencast reference" }],
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
    media: [{ type: "video", src: "assets/screencasts/Donorstvo.mp4", label: "Screencast reference" }],
  },
];

const state = {
  activeId: projects[0].id,
  activeMediaIndex: 0,
  flowPaused: false,
};

const root = document.documentElement;
const projectNodes = document.querySelector("#projectNodes");
const shuffleButton = document.querySelector("#shuffleButton");
const pulseButton = document.querySelector("#pulseButton");
const previewIndex = document.querySelector("#previewIndex");
const previewTitle = document.querySelector("#previewTitle");
const previewMeta = document.querySelector("#previewMeta");
const caseView = document.querySelector("#caseView");
const mediaFrame = document.querySelector("#mediaFrame");
const caseVideo = document.querySelector("#caseVideo");
const caseImage = document.querySelector("#caseImage");
const fallbackVisual = document.querySelector("#fallbackVisual");
const backButton = document.querySelector("#backButton");
const caseNav = document.querySelector("#caseNav");
const mediaPills = document.querySelector("#mediaPills");

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

function projectButtonMarkup(project, index, copyIndex) {
  return `
    <button
      class="project-node"
      type="button"
      data-project="${project.id}"
      data-copy="${copyIndex}"
      style="--node-rgb: ${project.rgb}"
      aria-label="Открыть проект ${project.title}"
    >
      <span class="project-icon">${projectIconMarkup(project)}</span>
      <span>
        <span class="node-kicker">${String(index + 1).padStart(2, "0")} / ${project.client}</span>
        <span class="node-title">${project.shortTitle}</span>
        <span class="node-type">${project.type}</span>
      </span>
    </button>
  `;
}

function renderProjectNodes() {
  const rows = [
    { items: projects, copy: 0 },
    { items: [...projects].reverse(), copy: 1 },
  ];

  projectNodes.innerHTML = rows
    .map(({ items, copy }, rowIndex) => {
      const doubledItems = [...items, ...items];
      return `
        <div class="marquee-row marquee-row-${rowIndex + 1}">
          ${doubledItems
            .map((project, index) => projectButtonMarkup(project, projects.indexOf(project), `${copy}-${index}`))
            .join("")}
        </div>
      `;
    })
    .join("");

  projectNodes.querySelectorAll(".project-node").forEach((node) => {
    node.addEventListener("pointerenter", () => selectPreview(node.dataset.project));
    node.addEventListener("focus", () => selectPreview(node.dataset.project));
    node.addEventListener("click", () => openCase(node.dataset.project, node));
  });
}

function renderCaseNav() {
  caseNav.innerHTML = projects
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

function selectPreview(id) {
  const project = getProject(id);
  const index = projects.findIndex((item) => item.id === project.id);
  state.activeId = project.id;
  setAccent(project);
  previewIndex.textContent = String(index + 1).padStart(2, "0");
  previewTitle.textContent = project.title;
  previewMeta.textContent = `${project.client} / ${project.type}`;

  projectNodes.querySelectorAll(".project-node").forEach((node) => {
    node.classList.toggle("is-active", node.dataset.project === project.id);
  });
}

function openCase(id, originElement) {
  const project = getProject(id);
  const index = projects.findIndex((item) => item.id === project.id);
  state.activeId = project.id;
  state.activeMediaIndex = 0;
  setAccent(project);

  const rect = originElement?.getBoundingClientRect();
  const x = rect ? rect.left + rect.width / 2 : window.innerWidth * 0.72;
  const y = rect ? rect.top + rect.height / 2 : window.innerHeight * 0.5;
  root.style.setProperty("--origin-x", `${Math.round(x)}px`);
  root.style.setProperty("--origin-y", `${Math.round(y)}px`);

  document.querySelector("#caseCounter").textContent =
    `${String(index + 1).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}`;
  document.querySelector("#caseClient").textContent = project.client;
  document.querySelector("#caseType").textContent = project.type;
  document.querySelector("#caseTitle").textContent = project.title;
  document.querySelector("#caseSummary").textContent = project.summary;
  document.querySelector("#caseRole").textContent = project.role;
  document.querySelector("#caseYear").textContent = project.year;
  document.querySelector("#caseHighlights").innerHTML = project.highlights
    .map((item) => `<li>${item}</li>`)
    .join("");
  document.querySelector("#caseStack").innerHTML = project.stack.map((item) => `<span>${item}</span>`).join("");

  caseNav.querySelectorAll("button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.project === project.id);
  });

  renderMedia(project, 0);
  caseView.scrollTop = 0;
  caseView.setAttribute("aria-hidden", "false");
  document.body.classList.add("case-open");
}

function renderMedia(project, mediaIndex) {
  const media = project.media || [];
  const item = media[mediaIndex];
  state.activeMediaIndex = mediaIndex;

  if (!item) {
    mediaFrame.style.setProperty("--media-ratio", "16 / 9");
    caseVideo.pause();
    caseVideo.removeAttribute("src");
    caseVideo.load();
    caseVideo.style.display = "none";
    caseImage.removeAttribute("src");
    caseImage.style.display = "none";
    fallbackVisual.classList.add("is-visible");
    document.querySelector("#caseReference").textContent = "Protected internal reference";
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
    caseVideo.pause();
    caseVideo.removeAttribute("src");
    caseVideo.load();
    caseVideo.style.display = "none";
    caseImage.src = item.src;
    caseImage.alt = item.label;
    caseImage.style.display = "block";
    caseImage.onload = () => {
      if (caseImage.naturalWidth && caseImage.naturalHeight && caseImage.getAttribute("src") === item.src) {
        mediaFrame.style.setProperty("--media-ratio", `${caseImage.naturalWidth} / ${caseImage.naturalHeight}`);
      }
    };

    if (caseImage.complete && caseImage.naturalWidth && caseImage.naturalHeight) {
      mediaFrame.style.setProperty("--media-ratio", `${caseImage.naturalWidth} / ${caseImage.naturalHeight}`);
    }
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
  caseVideo.pause();
}

function openRandomProject() {
  const next = projects[Math.floor(Math.random() * projects.length)];
  const node = projectNodes.querySelector(`.project-node[data-project="${next.id}"]`);
  selectPreview(next.id);
  openCase(next.id, node);
}

function toggleFlow() {
  state.flowPaused = !state.flowPaused;
  document.body.classList.toggle("flow-paused", state.flowPaused);
  pulseButton.setAttribute("aria-pressed", String(state.flowPaused));
  pulseButton.textContent = state.flowPaused ? "Resume" : "Pause";
}

function setupAmbientCanvas() {
  const canvas = document.querySelector("#ambientCanvas");
  const context = canvas.getContext("2d");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let width = 0;
  let height = 0;
  let points = [];

  function resize() {
    const ratio = window.devicePixelRatio || 1;
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    points = Array.from({ length: Math.max(28, Math.min(68, Math.round((width * height) / 26000))) }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      r: 1 + Math.random() * 1.4,
    }));
  }

  function draw() {
    context.clearRect(0, 0, width, height);
    points.forEach((point, index) => {
      if (!reduceMotion) {
        point.x += point.vx;
        point.y += point.vy;
      }
      if (point.x < -20) point.x = width + 20;
      if (point.x > width + 20) point.x = -20;
      if (point.y < -20) point.y = height + 20;
      if (point.y > height + 20) point.y = -20;

      context.fillStyle = "rgba(22, 24, 29, 0.18)";
      context.beginPath();
      context.arc(point.x, point.y, point.r, 0, Math.PI * 2);
      context.fill();

      for (let i = index + 1; i < points.length; i += 1) {
        const other = points[i];
        const distance = Math.hypot(point.x - other.x, point.y - other.y);
        if (distance < 112) {
          context.strokeStyle = `rgba(22, 24, 29, ${0.06 * (1 - distance / 112)})`;
          context.lineWidth = 1;
          context.beginPath();
          context.moveTo(point.x, point.y);
          context.lineTo(other.x, other.y);
          context.stroke();
        }
      }
    });
    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  resize();
  draw();
}

shuffleButton.addEventListener("click", openRandomProject);
pulseButton.addEventListener("click", toggleFlow);
backButton.addEventListener("click", closeCase);

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
  if (event.key.toLowerCase() === "p" && !document.body.classList.contains("case-open")) {
    toggleFlow();
  }
});

renderProjectNodes();
renderCaseNav();
selectPreview(projects[0].id);
setupAmbientCanvas();
