const projects = [
  {
    id: "ai-presale",
    title: "AI Presale Assistant",
    shortTitle: "AI Presale",
    client: "Internal / СберСеллер",
    type: "LLM-сервис",
    year: "2026",
    color: "#19a88b",
    rgb: "25, 168, 139",
    icon: "assets/icons/Vector.png",
    x: 31,
    y: 30,
    role: "Продуктовая и техническая проработка MVP, логика анализа брифов, рисков и генерации креативных концепций.",
    summary:
      "Внутренний сервис автоматизации presale-процессов на базе LLM: анализ клиентских брифов, оценка рисков, исследование рынка и генерация концепций.",
    highlights: [
      "Собрал рабочий локальный прототип с помощью Codex и AI-инструментов.",
      "Проработал сценарии интеграции локальных AI-моделей, российских LLM API и поиска.",
      "Подготовил проект к развёртыванию на корпоративной инфраструктуре вместе с DevOps.",
    ],
    stack: ["LLM", "GigaChat", "Web API", "Codex", "Search API", "MVP", "DevOps handoff"],
  },
  {
    id: "takzdorovo",
    title: "Не отменяй свою жизнь",
    shortTitle: "Так здорово",
    client: "Минздрав",
    type: "Тест + контент",
    year: "2023",
    color: "#e30613",
    rgb: "227, 6, 19",
    icon: "assets/icons/TakZdorovoFav.svg",
    video: "assets/screencasts/TakZdorovo.mp4",
    x: 58,
    y: 20,
    role: "Технический менеджер проекта: ТЗ, подрядчики, интерактивные сценарии, QA и запуск.",
    summary:
      "Одностраничный проект Минздрава с тестом, персональными рекомендациями, чек-листами, подкастами и дополнительными материалами.",
    highlights: [
      "Декомпозировал тестовую механику, контентные блоки и пользовательские состояния.",
      "Синхронизировал клиентские правки, технические ограничения и сроки запуска.",
      "Контролировал адаптивность, QA и подготовку релиза.",
    ],
    stack: ["Figma", "HTML", "CSS", "JavaScript", "Analytics", "QA", "Jira"],
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
    video: "assets/screencasts/pikmegamarket.mp4",
    x: 78,
    y: 34,
    role: "ТЗ, API-интеграция, постановка задач разработчикам, контроль сроков и клиентских правок.",
    summary:
      "Web-проект с API-интеграцией и обработкой пользовательских данных для промо-механики бренда.",
    highlights: [
      "Проработал требования к структуре данных и backend-взаимодействию.",
      "Вёл постановку задач, проверку сборок и коммуникацию с подрядчиками.",
      "Контролировал запуск и корректность пользовательских сценариев.",
    ],
    stack: ["REST API", "JSON", "Web API", "JavaScript", "Jira", "Confluence", "Яндекс.Метрика"],
  },
  {
    id: "vtb-report",
    title: "Как сдать годовой отчёт правильно",
    shortTitle: "ВТБ отчёт",
    client: "ВТБ",
    type: "Longread + test",
    year: "2024",
    color: "#234be7",
    rgb: "35, 75, 231",
    icon: "assets/icons/vtbFav.png",
    video: "assets/screencasts/vtbInstruction.mp4",
    x: 47,
    y: 47,
    role: "Техническое сопровождение лендинга: интерактив, структура, проверка реализации и запуск.",
    summary:
      "Интерактивный спецпроект для предпринимателей о годовой бухгалтерской и налоговой отчётности, дедлайнах и подготовке документов.",
    highlights: [
      "Согласовывал структуру лонгрида, тестовой механики и интерактивных блоков.",
      "Контролировал корректность адаптивной реализации и визуальных состояний.",
      "Проверял сборку и готовность к публикации.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Longread", "Test mechanic", "QA", "Analytics"],
  },
  {
    id: "green-day",
    title: "Поймайте скидку",
    shortTitle: "Green Day",
    client: "СберСтрахование",
    type: "Promo + parallax",
    year: "2024",
    color: "#403470",
    rgb: "64, 52, 112",
    icon: "assets/icons/greenDay.png",
    video: "assets/screencasts/GreenDay.mp4",
    x: 68,
    y: 61,
    role: "ТЗ, интерактивная промо-механика, контроль анимаций, backend-сценариев и запуска.",
    summary:
      "Промо-проект СберСтрахования с интерактивной механикой, параллакс-анимациями, backend-частью и шеринговыми сценариями.",
    highlights: [
      "Формализовал пользовательские сценарии поиска скидки и участия в промо.",
      "Координировал анимации, backend-логику, дизайн и разработку.",
      "Контролировал адаптив, аналитику и готовность к запуску.",
    ],
    stack: ["JavaScript", "Parallax", "Backend", "Sharing", "Responsive", "QA", "Analytics"],
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
    video: "assets/screencasts/FonCrossyRoad.mp4",
    x: 26,
    y: 67,
    role: "Техническое ведение браузерной игры: механика, постановка задач, адаптивность, QA.",
    summary:
      "Браузерная игра в стиле Crossy Road для вовлечения аудитории и удержания внимания внутри спецпроекта.",
    highlights: [
      "Согласовывал правила игры, ограничения и техническую реализуемость.",
      "Контролировал сборки, состояния игры и мобильную адаптацию.",
      "Синхронизировал креатив, разработку и клиентские ожидания.",
    ],
    stack: ["Three.js", "JavaScript", "Game loop", "Responsive", "QA", "Jira"],
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
    video: "assets/screencasts/fonSnake.mp4",
    x: 84,
    y: 74,
    role: "Формализация real-time механики, рисков нагрузки, состояний игры и тестирования.",
    summary:
      "Многопользовательская браузерная игра с real-time взаимодействием пользователей, по духу близкая к Slither.io.",
    highlights: [
      "Описал требования к игровым состояниям и взаимодействию пользователей.",
      "Помогал оценивать риски стабильности и нагрузки.",
      "Контролировал запуск с учётом UX, QA и клиентских ограничений.",
    ],
    stack: ["Real-time", "WebSocket logic", "JavaScript", "QA", "Risk management", "Jira"],
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
    video: "assets/screencasts/sbskasko.mp4",
    x: 42,
    y: 82,
    role: "Подготовка ТЗ, механики участия, контроль подрядчиков, аналитики и клиентских согласований.",
    summary:
      "Промо-лендинг КАСКО с конкурсной механикой, регистрационной формой и пользовательской базой.",
    highlights: [
      "Описал сценарии участия пользователя, требования к форме регистрации и данным.",
      "Координировал подрядчиков и обработку клиентских правок.",
      "Следил за корректностью аналитики и готовностью к запуску.",
    ],
    stack: ["JavaScript", "Forms", "Backend", "Analytics", "Jira", "QA"],
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
    video: "assets/screencasts/Donorstvo.mp4",
    x: 17,
    y: 43,
    role: "Техническое сопровождение контентного лендинга с анимациями и адаптивом.",
    summary:
      "Образовательно-просветительский лендинг о донорстве костного мозга с эмоциональной подачей и анимационными секвенциями.",
    highlights: [
      "Согласовывал анимационные сценарии и структуру лендинга.",
      "Контролировал адаптивность и качество пользовательского пути.",
      "Вёл техническую коммуникацию с командой и клиентом.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Animation", "Figma", "QA"],
  },
];

const state = {
  activeId: projects[0].id,
  pulse: false,
  pointerX: 0,
  pointerY: 0,
};

const root = document.documentElement;
const projectNodes = document.querySelector("#projectNodes");
const projectCloud = document.querySelector("#projectCloud");
const shuffleButton = document.querySelector("#shuffleButton");
const pulseButton = document.querySelector("#pulseButton");
const previewIndex = document.querySelector("#previewIndex");
const previewTitle = document.querySelector("#previewTitle");
const previewMeta = document.querySelector("#previewMeta");
const caseView = document.querySelector("#caseView");
const caseVideo = document.querySelector("#caseVideo");
const fallbackVisual = document.querySelector("#fallbackVisual");
const backButton = document.querySelector("#backButton");
const caseNav = document.querySelector("#caseNav");

function setAccent(project) {
  root.style.setProperty("--accent", project.color);
  root.style.setProperty("--accent-rgb", project.rgb);
}

function renderProjectNodes() {
  projectNodes.innerHTML = projects
    .map(
      (project, index) => `
        <button
          class="project-node"
          type="button"
          data-project="${project.id}"
          style="--x: ${project.x}%; --y: ${project.y}%; --delay: ${-index * 0.47}s; --node-rgb: ${project.rgb}"
          aria-label="Открыть проект ${project.title}"
        >
          <span class="project-icon"><img src="${project.icon}" alt="" /></span>
          <span>
            <span class="node-kicker">${String(index + 1).padStart(2, "0")} / ${project.client}</span>
            <span class="node-title">${project.shortTitle}</span>
            <span class="node-type">${project.type}</span>
          </span>
        </button>
      `,
    )
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
          <img src="${project.icon}" alt="" />
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
  setAccent(project);

  const rect = originElement?.getBoundingClientRect();
  const x = rect ? rect.left + rect.width / 2 : window.innerWidth * 0.72;
  const y = rect ? rect.top + rect.height / 2 : window.innerHeight * 0.5;
  root.style.setProperty("--origin-x", `${Math.round(x)}px`);
  root.style.setProperty("--origin-y", `${Math.round(y)}px`);

  document.querySelector("#caseCounter").textContent = `${String(index + 1).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}`;
  document.querySelector("#caseClient").textContent = project.client;
  document.querySelector("#caseType").textContent = project.type;
  document.querySelector("#caseTitle").textContent = project.title;
  document.querySelector("#caseSummary").textContent = project.summary;
  document.querySelector("#caseRole").textContent = project.role;
  document.querySelector("#caseReference").textContent = project.video ? "Screencast reference" : "Prototype reference";
  document.querySelector("#caseYear").textContent = project.year;
  document.querySelector("#caseHighlights").innerHTML = project.highlights.map((item) => `<li>${item}</li>`).join("");
  document.querySelector("#caseStack").innerHTML = project.stack.map((item) => `<span>${item}</span>`).join("");

  if (project.video) {
    fallbackVisual.classList.remove("is-visible");
    caseVideo.style.display = "block";
    if (!caseVideo.src.endsWith(project.video)) {
      caseVideo.src = project.video;
    }
    caseVideo.play().catch(() => {});
  } else {
    caseVideo.pause();
    caseVideo.removeAttribute("src");
    caseVideo.load();
    caseVideo.style.display = "none";
    fallbackVisual.classList.add("is-visible");
  }

  caseNav.querySelectorAll("button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.project === project.id);
  });

  caseView.setAttribute("aria-hidden", "false");
  document.body.classList.add("case-open");
}

function closeCase() {
  document.body.classList.remove("case-open");
  caseView.setAttribute("aria-hidden", "true");
  caseVideo.pause();
}

function shuffleProjects() {
  const next = projects[Math.floor(Math.random() * projects.length)];
  const node = projectNodes.querySelector(`[data-project="${next.id}"]`);
  if (node) {
    selectPreview(next.id);
    node.animate(
      [
        { transform: "translate(-50%, -50%) scale(1)" },
        { transform: "translate(-50%, -50%) scale(1.08)" },
        { transform: "translate(-50%, -50%) scale(1)" },
      ],
      { duration: 320, easing: "ease-out" },
    );
  }
}

function setupPointerMagnet() {
  projectCloud.addEventListener("pointermove", (event) => {
    const rect = projectCloud.getBoundingClientRect();
    state.pointerX = (event.clientX - rect.left) / rect.width - 0.5;
    state.pointerY = (event.clientY - rect.top) / rect.height - 0.5;
  });

  projectCloud.addEventListener("pointerleave", () => {
    state.pointerX = 0;
    state.pointerY = 0;
  });

  function frame(time) {
    const nodes = projectNodes.querySelectorAll(".project-node");
    nodes.forEach((node, index) => {
      const drift = state.pulse ? 16 : 8;
      const x = Math.sin(time * 0.001 + index * 1.7) * drift + state.pointerX * (index % 2 ? 18 : -14);
      const y = Math.cos(time * 0.0012 + index * 1.4) * drift + state.pointerY * (index % 2 ? -10 : 16);
      node.style.translate = `${x}px ${y}px`;
    });
    requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
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

shuffleButton.addEventListener("click", shuffleProjects);

pulseButton.addEventListener("click", () => {
  state.pulse = !state.pulse;
  pulseButton.setAttribute("aria-pressed", String(state.pulse));
});

backButton.addEventListener("click", closeCase);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && document.body.classList.contains("case-open")) {
    closeCase();
  }
  if (event.key.toLowerCase() === "p" && !document.body.classList.contains("case-open")) {
    pulseButton.click();
  }
});

renderProjectNodes();
renderCaseNav();
selectPreview(projects[0].id);
setupPointerMagnet();
setupAmbientCanvas();
