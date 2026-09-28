function icon(name, size = 21) {
  const icons = {
    home: `
      <path d="M3 11.5 12 4l9 7.5"></path>
      <path d="M5 10.5V21h14V10.5"></path>
      <path d="M9 21v-6h6v6"></path>
    `,
    folder: `
      <path d="M3 6h6l2 2h10v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6Z"></path>
    `,
    cube: `
      <path d="m12 2 9 5-9 5-9-5 9-5Z"></path>
      <path d="M3 7v10l9 5 9-5V7"></path>
      <path d="M12 12v10"></path>
    `,
    chart: `
      <path d="M4 21V11h4v10"></path>
      <path d="M10 21V4h4v17"></path>
      <path d="M16 21V8h4v13"></path>
    `,
    message: `
      <path d="M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-6l-4 4v-4H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"></path>
      <path d="M7 10h.01M12 10h.01M17 10h.01"></path>
    `,
    user: `
      <circle cx="12" cy="7" r="4"></circle>
      <path d="M4 22v-2a8 8 0 0 1 16 0v2"></path>
    `,
    mail: `
      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
      <path d="m3 6 9 7 9-7"></path>
    `,
    github: `
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7.5A5.8 5.8 0 0 0 19.2 3 5.5 5.5 0 0 0 19 0s-1.2-.4-4 1.5a13.8 13.8 0 0 0-7 0C5.2-.4 4 0 4 0a5.5 5.5 0 0 0-.2 3A5.8 5.8 0 0 0 2.2 7c0 5.9 3.5 7.1 6.8 7.5A4.8 4.8 0 0 0 8 18v4"></path>
      <path d="M8 19c-3 .9-3-1.5-4-2"></path>
    `,
    linkedin: `
      <rect x="3" y="9" width="4" height="12"></rect>
      <path d="M5 3v.01"></path>
      <path d="M11 21v-7a4 4 0 0 1 8 0v7"></path>
      <path d="M11 9v12"></path>
    `,
    x: `
      <path d="M4 3 20 21"></path>
      <path d="M20 3 4 21"></path>
    `,
    youtube: `
      <path d="M22 12s0-4-1-6c-.5-1-1.5-1.5-2.5-1.7C16.5 4 12 4 12 4s-4.5 0-6.5.3C4.5 4.5 3.5 5 3 6c-1 2-1 6-1 6s0 4 1 6c.5 1 1.5 1.5 2.5 1.7 2 .3 6.5.3 6.5.3s4.5 0 6.5-.3c1-.2 2-.7 2.5-1.7 1-2 1-6 1-6Z"></path>
      <path d="m10 9 5 3-5 3V9Z"></path>
    `
  };

  return `
    <svg
      class="icon"
      width="${size}"
      height="${size}"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      ${icons[name] || icons.home}
    </svg>
  `;
}


function renderSidebar() {
  const sidebar = document.getElementById("sidebar");

  if (!sidebar) return;

  const page = document.body.dataset.page;

  const currentPage =
    page === "case-study"
      ? "projects"
      : page;

  const navigation = portfolioData.navigation
    .map((item) => {
      const isActive =
        item.page === currentPage;

      return `
        <a
          class="navigation-link ${isActive ? "active" : ""}"
          href="${item.href}"
          ${isActive ? 'aria-current="page"' : ""}
        >
          ${icon(item.icon)}
          <span>${item.label}</span>
        </a>
      `;
    })
    .join("");

  sidebar.innerHTML = `
    <section class="sidebar-profile">
      <a
        class="profile-picture"
        href="index.html"
        aria-label="Dexter Esto homepage"
      >
        <img
          src="${portfolioData.profile.image}"
          alt="Dexter Esto"
        >
      </a>

      <h2>
        ${portfolioData.profile.name}

<span
  class="profile-mark"
  title="Verified profile"
  aria-label="Verified profile"
>
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle
      cx="12"
      cy="12"
      r="11"
      fill="#1877f2"
    ></circle>

    <path
      d="M7.5 12.3 10.5 15.3 16.8 8.8"
      fill="none"
      stroke="#ffffff"
      stroke-width="2.3"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
</span>
      </h2>

      <p>${portfolioData.profile.handle}</p>

      <div class="social-links">
        <a
          href="${portfolioData.socialLinks.github}"
          aria-label="GitHub"
        >
          ${icon("github", 19)}
        </a>

        <a
          href="${portfolioData.socialLinks.linkedin}"
          aria-label="LinkedIn"
        >
          ${icon("linkedin", 19)}
        </a>

        <a
          href="${portfolioData.socialLinks.x}"
          aria-label="X"
        >
          ${icon("x", 18)}
        </a>

        <a
          href="${portfolioData.socialLinks.youtube}"
          aria-label="YouTube"
        >
          ${icon("youtube", 20)}
        </a>

        <a
          href="mailto:${portfolioData.profile.email}"
          aria-label="Email Dexter"
        >
          ${icon("mail", 19)}
        </a>
      </div>
    </section>

    <nav
      class="sidebar-navigation"
      aria-label="Main navigation"
    >
      ${navigation}
    </nav>

    <footer class="sidebar-footer">
      <p>
        © ${new Date().getFullYear()}
        ${portfolioData.profile.name}
      </p>

      <p>Build a calmer tomorrow.</p>
    </footer>
  `;
}


function renderTools() {
  const toolDomains = {
    "n8n": "n8n.io",
    "Make": "make.com",
    "Zapier": "zapier.com",
    "Microsoft Power Automate": "powerautomate.microsoft.com",
    "Pipedrive": "pipedrive.com",
    "GoHighLevel": "gohighlevel.com",
    "HubSpot": "hubspot.com",
    "Asana": "asana.com",
    "ClickUp": "clickup.com",
    "Notion": "notion.so",
    "Airtable": "airtable.com",
    "Supabase": "supabase.com",
    "Firebase": "firebase.google.com",
    "Google Sheets": "sheets.google.com",
    "Google Calendar": "calendar.google.com",
    "Slack": "slack.com",
    "OpenAI": "openai.com",
    "Claude": "claude.ai",
    "Gemini": "gemini.google.com",
    "Ollama": "ollama.com",
    "Groq": "groq.com",
    "Vapi": "vapi.ai",
    "Retell": "retellai.com",
    "JavaScript": "javascript.com",
    "Python": "python.org",
    "APIs": "openapis.org",
    "Webhooks": "webhook.site",
    "ngrok": "ngrok.com",
    "Mailtrap": "mailtrap.io"
  };

  return portfolioData.home.tools
    .map((tool) => {
      const domain =
        toolDomains[tool] || "simpleicons.org";

const officialLogoUrls = {
  "Google Sheets":
    "https://ssl.gstatic.com/docs/spreadsheets/favicon3.ico",

  "Google Calendar":
    "https://calendar.google.com/googlecalendar/images/favicons_2020q4/calendar_31.ico"
};

const logoUrl =
  officialLogoUrls[tool] ||
  `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

      return `
        <div class="tool-logo">
          <span class="tool-logo-icon">
            <img
              src="${logoUrl}"
              alt="${tool} logo"
              width="28"
              height="28"
              loading="eager"
              onerror="this.style.display='none';this.parentElement.textContent='✦';"
            >
          </span>

          <strong>${tool}</strong>
        </div>
      `;
    })
    .join("");
}


function renderServices() {
  const serviceDetails = {
    "Workflow Automation": {
      included:
        "Process mapping, connected workflows, automated notifications, approvals, data synchronization, error handling, and monitoring.",
      tools:
        "n8n, Make, Zapier, Microsoft Power Automate",
      outcome:
        "Reduce repetitive work, manual errors, and processing time."
    },

    "CRM Automation": {
      included:
        "Lead capture, AI qualification, pipeline updates, automated follow-ups, duplicate prevention, and appointment booking.",
      tools:
        "Pipedrive, GoHighLevel, HubSpot, n8n",
      outcome:
        "Faster lead response and fewer missed sales opportunities."
    },

    "AI Voice Agents": {
      included:
        "Incoming-call handling, customer qualification, FAQ responses, calendar checking, appointment booking, call summaries, and human handoff.",
      tools:
        "Vapi, Retell, OpenAI, Google Calendar, Pipedrive",
      outcome:
        "Provide 24/7 call coverage and reduce missed customer inquiries."
    },

    "AI Integration": {
      included:
        "AI assistants, RAG knowledge systems, data extraction, classification, summarization, APIs, and business software connections.",
      tools:
        "OpenAI, Claude, Gemini, Ollama, Groq, APIs, Webhooks",
      outcome:
        "Make business information easier to access and use."
    }
  };

  return portfolioData.home.services
    .map((service) => {
      const details =
        serviceDetails[service.title] || {
          included:
            "A customized automation solution based on your existing business process.",
          tools:
            "Automation platforms, APIs, and business software",
          outcome:
            "A more organized and efficient business process."
        };

      return `
        <article
          class="home-service-item service-popover-item"
          tabindex="0"
          aria-label="Preview ${service.title}"
        >
          <span>${service.number}</span>

          <div>
            <strong>${service.title}</strong>
            <p>${service.description}</p>
          </div>

          <aside
            class="service-float-card"
            aria-label="${service.title} details"
          >
            <div class="service-float-heading">
              <span>${service.number}</span>

              <div>
                <small>SERVICE PREVIEW</small>
                <h3>${service.title}</h3>
              </div>
            </div>

            <div class="service-float-section">
              <strong>What’s included</strong>
              <p>${details.included}</p>
            </div>

            <div class="service-float-section">
              <strong>Tools</strong>
              <p>${details.tools}</p>
            </div>

            <div class="service-float-section">
              <strong>Business outcome</strong>
              <p>${details.outcome}</p>
            </div>

            <div class="service-float-actions">
              <a href="services.html">
                Learn more →
              </a>

              <a href="contact.html">
                Discuss this service →
              </a>
            </div>
          </aside>
        </article>
      `;
    })
    .join("");
}


/* ========================================
   HOMEPAGE VIDEO CAROUSEL
======================================== */

function renderVideoCarousel() {
  const videos =
    portfolioData.homeVideos || [];

  if (videos.length === 0) {
    return `
      <div class="video-carousel video-carousel-empty">
        <p>No project videos have been added yet.</p>
      </div>
    `;
  }

  const slides = videos
    .map((video, index) => {
      return `
        <article
          class="video-slide ${
            index === 0 ? "active" : ""
          }"
          data-video-index="${index}"
        >
          <video
            class="project-video"
            src="${video.src}"
            muted
            playsinline
            preload="${
              index === 0
                ? "auto"
                : "metadata"
            }"
          ></video>

          <div class="video-overlay">
            <div>
              <span>PROJECT SHOWCASE</span>
              <h3>${video.title}</h3>
              <p>${video.subtitle}</p>
            </div>

            <a href="${video.projectUrl}">
              View project →
            </a>
          </div>
        </article>
      `;
    })
    .join("");

  const dots = videos
    .map((video, index) => {
      return `
        <button
          class="video-dot ${
            index === 0 ? "active" : ""
          }"
          type="button"
          data-video-index="${index}"
          aria-label="Show ${video.title}"
        ></button>
      `;
    })
    .join("");

  return `
    <div
      class="video-carousel"
      id="videoCarousel"
    >
      <div class="video-slides">
        ${slides}
      </div>

      <button
        class="video-control video-previous"
        id="videoPrevious"
        type="button"
        aria-label="Previous video"
      >
        ←
      </button>

      <button
        class="video-control video-next"
        id="videoNext"
        type="button"
        aria-label="Next video"
      >
        →
      </button>

      <div
        class="video-dots"
        id="videoDots"
      >
        ${dots}
      </div>
    </div>
  `;
}


/* ========================================
   HOMEPAGE
======================================== */

function renderHome() {
  const app =
    document.getElementById("app");

  if (!app) return;

  app.innerHTML = `
    <header class="home-hero">
      <div>
        <h1>
          ${portfolioData.home.hero.title}
        </h1>

        <p>
          ${portfolioData.home.hero.description}
        </p>
      </div>

      <a
        class="primary-button"
        href="contact.html"
      >
        ${icon("mail", 19)}
        <span>Get in touch</span>
        <span>→</span>
      </a>
    </header>

    <section class="tools-strip home-card">
      <div class="tools-heading">
        <span>DAILY DRIVERS</span>
        <strong>Tools I work with</strong>
      </div>

      <div class="tools-divider"></div>

      <div
        class="tools-logos tools-marquee"
        aria-label="Automation tools and platforms"
      >
        <div class="tools-track">
          <div class="tools-group">
            ${renderTools()}
          </div>

          <div
            class="tools-group"
            aria-hidden="true"
          >
            ${renderTools()}
          </div>
        </div>
      </div>
    </section>

    <section class="home-grid">
      <article class="home-card projects-card">
        <div class="card-heading-row">
          <div class="round-icon">
            ${icon("folder")}
          </div>

          <div>
            <h2>Projects</h2>
            <p>
              Real automations. Practical systems.
            </p>
          </div>

          <a href="projects.html">
            View all →
          </a>
        </div>

        ${renderVideoCarousel()}
      </article>

      <article class="home-card about-card">
        <div class="card-heading-row">
          <div class="round-icon">
            ${icon("user")}
          </div>

          <div>
            <h2>About</h2>
            <p>
              The person behind the workflows.
            </p>
          </div>
        </div>

        <a
          class="polaroid-stack"
          href="about.html"
        >
          <div class="polaroid polaroid-back-one"></div>
          <div class="polaroid polaroid-back-two"></div>

          <div class="polaroid polaroid-main">
            <img
              src="${portfolioData.profile.image}"
              alt="Dexter Esto"
            >

            <span>
              Automate a brighter tomorrow.
            </span>
          </div>
        </a>
      </article>

      <article class="home-card builds-card">
        <div class="card-heading-row">
          <div class="round-icon">
            ⚡
          </div>

          <div>
            <h2>AI Builds</h2>
            <p>
              Ideas turned into working systems.
            </p>
          </div>
        </div>

        <div class="build-tags">
          ${portfolioData.home.aiBuilds
            .map(
              (item) =>
                `<span>${item}</span>`
            )
            .join("")}
        </div>
      </article>

      <article class="home-card services-card">
        <div class="card-heading-row">
          <div class="round-icon">
            ${icon("cube")}
          </div>

          <div>
            <h2>Services</h2>
            <p>
              From idea to implementation.
            </p>
          </div>

          <a href="services.html">
            View all →
          </a>
        </div>

        <div class="home-services-list">
          ${renderServices()}
        </div>
      </article>

      <article class="home-card credentials-card certificate-home-card">
  <div class="card-heading-row">
    <div class="round-icon">
      ${icon("chart")}
    </div>

    <div>
      <h2>Credentials & Certificates</h2>

      <p>
        Selected certifications and technical credentials.
      </p>
    </div>
  </div>

  <div
    class="certificate-stage"
    tabindex="0"
    aria-label="Certificate previews"
  >
    <div class="certificate-stack">
      ${portfolioData.home.credentials
        .filter((certificate, index) => {
          return [0, 1, 2, 4].includes(index);
        })
        .map((certificate, index) => {
          return `
            <a
              class="certificate-preview certificate-preview-${
                index + 1
              }"
              href="${certificate.image}"
              target="_blank"
              rel="noopener noreferrer"
              title="Open ${certificate.title}"
            >
              <img
                src="${certificate.image}"
                alt="${certificate.title}"
                loading="lazy"
              >

              <span>
                ${certificate.title}
              </span>
            </a>
          `;
        })
        .join("")}
    </div>

    <div class="certificate-seal">
      <span>✦</span>

      <strong>
        8<br>
        Certificates
      </strong>

      <small>
        HOVER TO PREVIEW
      </small>
    </div>
  </div>

  <div class="certificate-card-footer">
    <span>
      AI, data, automation, and technical training
    </span>

    <a href="credentials.html">
      View all →
    </a>
  </div>
</article>

      <article
  class="home-card testimonial-card"
  id="testimonials"
>
  <div class="card-heading-row">
    <div class="round-icon">
      ${icon("message")}
    </div>

    <div>
      <h2>Testimonial</h2>
      <p>
        Feedback from hands-on project testing.
      </p>
    </div>

    <span class="testimonial-label">
      Verified feedback
    </span>
  </div>

  <div
  class="testimonial-person-card"
  id="testimonials"
>
  <div class="testimonial-hearts" aria-hidden="true">
  <span>♥</span>
  <span>♥</span>
  <span>♥</span>
  <span>♥</span>
  <span>♥</span>
  <span>♥</span>
  <span>♥</span>
  <span>♥</span>
  <span>♥</span>
  <span>♥</span>
  </div>
    <img
      src="assets/images/testimonials/jen.jpg"
      alt="Jen, project tester and workflow reviewer"
      class="testimonial-photo"
    >

    <div class="testimonial-content">
      <span class="testimonial-quote-mark">“</span>

      <blockquote>
       Dexter turns complex automation workflows into clear,
       easy-to-follow experiences. He carefully tests and
       improves every step until the process feels reliable
       and user-friendly.

      </blockquote>

      <div class="testimonial-author">
        <strong>Jen</strong>
        <small>
          Project Tester &amp; Workflow Reviewer
        </small>
      </div>
    </div>
  </div>
</article>
    </section>
  `;
}


/* ========================================
   PROJECT VISUAL
======================================== */

function renderProjectVisual(project) {
  const projectCovers = {
    "leadflow-ai": {
      src: "assets/images/projects/leadflow-cover.png",
      alt: "LeadFlow AI lead qualification dashboard"
    },

    "construction-reactivation": {
      src: "assets/images/projects/reactivation-cover.png",
      alt: "Construction lead reactivation CRM pipeline"
    },

    "feedback-mining": {
      src: "assets/images/projects/feedback-cover.png",
      alt: "Customer feedback sentiment and theme dashboard"
    },

    "aquaflow": {
      src: "assets/images/projects/aquaflow-cover.png",
      alt: "AquaFlow CRM automation dashboard"
    },

    "primeflow": {
      src: "assets/images/projects/primeflow-cover.png",
      alt: "PrimeFlow AI voice receptionist dashboard"
    },

    "smart-stretch": {
      src: "assets/images/projects/smart-stretch-cover.png",
      alt: "Smart Stretch website chatbot interface"
    },

    "coastal-solar": {
      src: "assets/images/projects/coastal-solar-cover.png",
      alt: "Coastal Solar AI customer support dashboard"
    }
  };

  const cover = projectCovers[project.id];

  if (!cover) {
    return "";
  }

  return `
    <div class="project-browser project-cover-browser">
      <img
        class="project-cover-image"
        src="${cover.src}"
        alt="${cover.alt}"
        loading="lazy"
        decoding="async"
      >
    </div>
  `;
}

/* ========================================
   PROJECT CARD
======================================== */

function renderProjectCard(project) {
  return `
    <a
      class="project-card"
      href="case-study.html?project=${project.id}"
      data-category="${project.category}"
    >
      ${renderProjectVisual(project)}

      <div class="project-card-heading">
        <div>
          <h2>${project.title}</h2>

          <p>
            ${project.summary}
          </p>
        </div>

        <span>→</span>
      </div>

      <div class="project-card-footer">
        <span class="project-category">
          ${project.category}
        </span>

        <div class="project-tool-list">
          ${project.tools
            .slice(0, 3)
            .map(
              (tool) =>
                `<span>${tool}</span>`
            )
            .join("")}
        </div>
      </div>
    </a>
  `;
}


/* ========================================
   PROJECTS PAGE
======================================== */

function renderProjects() {
  const app =
    document.getElementById("app");

  if (!app) return;

  app.innerHTML = `
    <header class="projects-header">
      <a
        href="index.html"
        class="back-link"
      >
        ← Home
      </a>

      <h1>Projects</h1>

      <p>
        Real automation prototypes for practical business
        problems—from lead management to AI voice systems.
      </p>

      <div
        class="project-filters"
        id="projectFilters"
      >
        ${portfolioData.projectFilters
          .map((filter, index) => {
            return `
              <button
                class="project-filter ${
                  index === 0 ? "active" : ""
                }"
                type="button"
                data-filter="${filter}"
              >
                ${filter}
              </button>
            `;
          })
          .join("")}
      </div>
    </header>

    <section
      class="projects-grid"
      id="projectsGrid"
    >
      ${portfolioData.projects
        .map(renderProjectCard)
        .join("")}
    </section>

    <section class="project-cta">
      <div class="round-icon">⚡</div>

      <div>
        <h2>Got a workflow to automate?</h2>

        <p>
          Tell me about your process and I’ll show you
          what could be automated.
        </p>
      </div>

      <a
        class="primary-button"
        href="contact.html"
      >
        Start a project →
      </a>
    </section>
  `;
}


/* ========================================
   MULTI-CURRENCY ROI CALCULATOR
======================================== */

const roiCurrencies = {
  PHP: {
    label: "PHP — Philippine Peso",
    locale: "en-PH"
  },

  USD: {
    label: "USD — US Dollar",
    locale: "en-US"
  },

  EUR: {
    label: "EUR — Euro",
    locale: "en-IE"
  },

  GBP: {
    label: "GBP — British Pound",
    locale: "en-GB"
  },

  SGD: {
    label: "SGD — Singapore Dollar",
    locale: "en-SG"
  },

  AUD: {
    label: "AUD — Australian Dollar",
    locale: "en-AU"
  },

  CAD: {
    label: "CAD — Canadian Dollar",
    locale: "en-CA"
  }
};


function formatCurrency(
  value,
  currencyCode
) {
  const currency =
    roiCurrencies[currencyCode] ||
    roiCurrencies.PHP;

  return new Intl.NumberFormat(
    currency.locale,
    {
      style: "currency",
      currency: currencyCode,
      maximumFractionDigits: 0
    }
  ).format(value);
}


function initializeRoiCalculator() {
  const calculator =
    document.getElementById(
      "roiCalculator"
    );

  if (!calculator) return;

  const currencySelect =
    calculator.querySelector(
      "[data-roi-currency]"
    );

  const inputs = [
    ...calculator.querySelectorAll(
      "[data-roi-input]"
    )
  ];

  const resetButton =
    calculator.querySelector(
      "[data-roi-reset]"
    );

  function getValue(name) {
    const input =
      calculator.querySelector(
        `[name="${name}"]`
      );

    return Math.max(
      0,
      Number(input?.value) || 0
    );
  }

  function calculateRoi() {
    const currencyCode =
      currencySelect?.value || "PHP";

    const monthlyVolume =
      getValue("monthlyVolume");

    const minutesBefore =
      getValue("minutesBefore");

    const minutesAfter =
      getValue("minutesAfter");

    const hourlyRate =
      getValue("hourlyRate");

    const monthlyToolCost =
      getValue("monthlyToolCost");

    const setupCost =
      getValue("setupCost");

    const minutesSavedPerTask =
      Math.max(
        0,
        minutesBefore - minutesAfter
      );

    const monthlyHoursSaved =
      (
        monthlyVolume *
        minutesSavedPerTask
      ) / 60;

    const monthlyLaborSavings =
      monthlyHoursSaved * hourlyRate;

    const monthlyNetSavings =
      monthlyLaborSavings -
      monthlyToolCost;

    const firstYearSavings =
      monthlyLaborSavings * 12;

    const firstYearInvestment =
      setupCost +
      monthlyToolCost * 12;

    const firstYearNetValue =
      firstYearSavings -
      firstYearInvestment;

    const firstYearRoi =
      firstYearInvestment > 0
        ? (
            firstYearNetValue /
            firstYearInvestment
          ) * 100
        : 0;

    const paybackMonths =
      monthlyNetSavings > 0
        ? setupCost /
          monthlyNetSavings
        : null;

    calculator
      .querySelectorAll(
        "[data-selected-currency]"
      )
      .forEach((element) => {
        element.textContent =
          currencyCode;
      });

    const hoursOutput =
      calculator.querySelector(
        "[data-roi-hours]"
      );

    const monthlyOutput =
      calculator.querySelector(
        "[data-roi-monthly]"
      );

    const percentageOutput =
      calculator.querySelector(
        "[data-roi-percentage]"
      );

    const paybackOutput =
      calculator.querySelector(
        "[data-roi-payback]"
      );

    if (hoursOutput) {
      hoursOutput.textContent =
        `${monthlyHoursSaved.toFixed(1)} hrs`;
    }

    if (monthlyOutput) {
      monthlyOutput.textContent =
        formatCurrency(
          monthlyNetSavings,
          currencyCode
        );
    }

    if (percentageOutput) {
      percentageOutput.textContent =
        `${firstYearRoi.toFixed(1)}%`;
    }

    if (paybackOutput) {
      paybackOutput.textContent =
        paybackMonths === null
          ? "No payback yet"
          : `${paybackMonths.toFixed(1)} months`;
    }
  }

  inputs.forEach((input) => {
    input.dataset.defaultValue =
      input.value;

    input.addEventListener(
      "input",
      calculateRoi
    );
  });

  currencySelect?.addEventListener(
    "change",
    calculateRoi
  );

  resetButton?.addEventListener(
    "click",
    () => {
      inputs.forEach((input) => {
        input.value =
          input.dataset.defaultValue;
      });

      if (currencySelect) {
        currencySelect.value = "PHP";
      }

      calculateRoi();
    }
  );

  calculateRoi();
}


/* ========================================
   DYNAMIC CASE-STUDY PAGE
======================================== */

function renderCaseStudy() {
  const app = document.getElementById("app");

  if (!app) return;

  const parameters = new URLSearchParams(
    window.location.search
  );

  const projectId = parameters.get("project");

  const project = portfolioData.projects.find(
    (item) => item.id === projectId
  );

  const details =
    portfolioData.caseStudies?.[projectId];

  if (!project || !details) {
    app.innerHTML = `
      <section class="case-study-error">
        <span>404</span>

        <h1>Project not found</h1>

        <p>
          The project information could not be loaded.
        </p>

        <a
          class="primary-button"
          href="projects.html"
        >
          ← Return to projects
        </a>
      </section>
    `;

    return;
  }

  const projectVideo = (
    portfolioData.homeVideos || []
  ).find((video) => {
    return video.projectUrl.includes(
      `project=${project.id}`
    );
  });

  const workflowSteps = {
    primeflow: [
      "Receive the customer call",
      "Collect the caller’s information",
      "Check appointment availability",
      "Book the selected appointment",
      "Synchronize the CRM and calendar"
    ],

    aquaflow: [
      "Receive the water-assessment form",
      "Validate and normalize the inquiry",
      "Check for duplicate CRM records",
      "Qualify the customer request",
      "Schedule and track the assessment"
    ],

    "leadflow-ai": [
      "Capture the new lead",
      "Validate the lead information",
      "Qualify and prioritize the record",
      "Create or update the CRM entry",
      "Assign the next sales action"
    ],

    "coastal-solar": [
      "Receive the customer question",
      "Identify the customer’s intent",
      "Search the approved information",
      "Generate the support response",
      "Escalate when human help is needed"
    ],

    "feedback-mining": [
      "Receive the customer feedback",
      "Validate the feedback record",
      "Classify topic, sentiment, and urgency",
      "Assign the responsible department",
      "Route uncertain cases for human review"
    ],

    "construction-reactivation": [
      "Scan the inactive lead records",
      "Check campaign eligibility",
      "Send controlled outreach",
      "Classify and qualify the reply",
      "Book a consultation when eligible"
    ]
  };

  const steps =
    workflowSteps[project.id] || [
      "Receive the business input",
      "Validate the submitted information",
      "Process the automation rules",
      "Update the connected system",
      "Record the completed result"
    ];

  const defaults = details.roiDefaults;

  document.title =
    `${project.title} | Dexter Esto`;

  app.innerHTML = `
    <article class="case-study-page">
      <a
        class="back-link"
        href="projects.html"
      >
        ← All projects
      </a>

      <header class="case-study-hero">
        <div class="case-study-heading">
          <span class="case-study-category">
            ${project.category}
          </span>

          <h1>${project.title}</h1>

          <p>${project.summary}</p>

          <div class="case-study-tools">
            ${(project.tools || [])
              .map((tool) => {
                return `<span>${tool}</span>`;
              })
              .join("")}
          </div>
        </div>

        ${
          projectVideo
            ? `
              <div class="case-study-video-frame">
                <video
                  src="${projectVideo.src}"
                  controls
                  muted
                  playsinline
                  preload="metadata"
                ></video>
              </div>
            `
            : `
              <div class="case-study-visual">
                ${renderProjectVisual(project)}
              </div>
            `
        }
      </header>

      ${
        details.workflowImage
          ? `
            <section class="case-workflow-image-section">
              <div class="case-workflow-image-heading">
                <div>
                  <span class="section-label">
                    SYSTEM WORKFLOW
                  </span>

                  <h2>
                    How the complete system connects
                  </h2>

                  <p>
                    A visual overview of how information
                    moves through the automation.
                  </p>
                </div>

                <a
                  class="workflow-view-button"
                  href="${details.workflowImage}"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View full image ↗
                </a>
              </div>

              <figure class="case-workflow-figure">
                <a
                  href="${details.workflowImage}"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open the full workflow image"
                >
                  <img
                    src="${details.workflowImage}"
                    alt="${details.workflowAlt || `${project.title} workflow`}"
                    loading="lazy"
                    decoding="async"
                  >
                </a>

                ${
                  details.workflowCaption
                    ? `
                      <figcaption>
                        ${details.workflowCaption}
                      </figcaption>
                    `
                    : ""
                }
              </figure>
            </section>
          `
          : ""
      }

      <section class="case-business-grid">
        <article class="case-detail-card problem-card">
          <span class="section-label">
            01 — BUSINESS PROBLEM
          </span>

          <h2>
            What was slowing the business down?
          </h2>

          <p>
            ${details.businessProblem}
          </p>
        </article>

        <article class="case-detail-card solution-card">
          <span class="section-label">
            02 — BUSINESS SOLUTION
          </span>

          <h2>
            How the system solves it
          </h2>

          <p>
            ${details.businessSolution}
          </p>
        </article>
      </section>

      <section class="case-study-section metrics-section">
        <span class="section-label">
          03 — BEFORE AND AFTER
        </span>

        <div class="case-section-heading">
          <div>
            <h2>
              Operational comparison
            </h2>

            <p>
              Prototype benchmarks comparing the
              manual process with the automated
              workflow.
            </p>
          </div>

          <span class="estimate-badge">
            PROTOTYPE ESTIMATES
          </span>
        </div>

        <div class="metrics-table">
          <div class="metrics-header">
            <span>Metric</span>
            <span>Before</span>
            <span>After</span>
          </div>

          ${details.metrics
            .map((metric) => {
              return `
                <div class="metric-row">
                  <strong>
                    ${metric.label}
                  </strong>

                  <span class="before-value">
                    ${metric.before}
                  </span>

                  <span class="after-value">
                    ${metric.after}
                  </span>
                </div>
              `;
            })
            .join("")}
        </div>
      </section>

      <section class="case-study-section">
        <span class="section-label">
          04 — AUTOMATION FLOW
        </span>

        <h2>
          How the workflow operates
        </h2>

        <div class="case-study-workflow">
          ${steps
            .map((step, index) => {
              return `
                <div class="case-study-step">
                  <span>
                    ${String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </span>

                  <p>${step}</p>
                </div>
              `;
            })
            .join("")}
        </div>
      </section>

      <section class="case-operations-grid">
        <article class="case-detail-card">
          <span class="section-label">
            05 — TOOLS USED
          </span>

          <h2>
            Technology and integrations
          </h2>

          <div class="case-tool-grid">
            ${(project.tools || [])
              .map((tool) => {
                return `
                  <div class="case-tool-item">
                    <span>✦</span>
                    <strong>${tool}</strong>
                  </div>
                `;
              })
              .join("")}
          </div>
        </article>

        <article class="case-detail-card">
          <span class="section-label">
            06 — OPERATIONAL IMPROVEMENTS
          </span>

          <h2>
            What improves operationally
          </h2>

          <ul class="improvement-list">
            ${details.improvements
              .map((improvement) => {
                return `
                  <li>
                    <span>✓</span>
                    ${improvement}
                  </li>
                `;
              })
              .join("")}
          </ul>
        </article>
      </section>

      <section
        class="roi-calculator"
        id="roiCalculator"
      >
        <div class="roi-heading">
          <span class="section-label">
            07 — ROI CALCULATOR
          </span>

          <h2>
            Estimate the value of this automation
          </h2>

          <p>
            Use your business’s real workload and
            costs. The results update automatically
            as you type.
          </p>
        </div>

        <div class="roi-currency-row">
          <label for="roiCurrency">
            Currency
          </label>

          <select
            id="roiCurrency"
            name="currency"
            data-roi-currency
          >
            ${Object.entries(roiCurrencies)
              .map(([code, currency]) => {
                return `
                  <option value="${code}">
                    ${currency.label}
                  </option>
                `;
              })
              .join("")}
          </select>

          <small>
            Enter every cost using this currency.
            Changing it does not convert the values.
          </small>
        </div>

        <div class="roi-layout">
          <div class="roi-inputs">
            <label>
              <span>
                How many times is this task done
                each month?
              </span>

              <input
                type="number"
                name="monthlyVolume"
                value="${defaults.monthlyVolume}"
                min="0"
                data-roi-input
              >

              <small class="roi-field-help">
                Example: 100 calls, leads, bookings,
                or support requests.
              </small>
            </label>

            <label>
              <span>
                Minutes needed manually
              </span>

              <input
                type="number"
                name="minutesBefore"
                value="${defaults.minutesBefore}"
                min="0"
                data-roi-input
              >

              <small class="roi-field-help">
                Average time an employee currently
                spends on one task.
              </small>
            </label>

            <label>
              <span>
                Minutes needed with automation
              </span>

              <input
                type="number"
                name="minutesAfter"
                value="${defaults.minutesAfter}"
                min="0"
                data-roi-input
              >

              <small class="roi-field-help">
                Time still needed after the automated
                workflow is introduced.
              </small>
            </label>

            <label>
              <span>
                Employee cost per hour
                (<b data-selected-currency>PHP</b>)
              </span>

              <input
                type="number"
                name="hourlyRate"
                value="${defaults.hourlyRate}"
                min="0"
                data-roi-input
              >

              <small class="roi-field-help">
                Salary or estimated labor value for
                one working hour.
              </small>
            </label>

            <label>
              <span>
                Monthly software and automation cost
                (<b data-selected-currency>PHP</b>)
              </span>

              <input
                type="number"
                name="monthlyToolCost"
                value="${defaults.monthlyToolCost}"
                min="0"
                data-roi-input
              >

              <small class="roi-field-help">
                Include software subscriptions,
                hosting, and maintenance.
              </small>
            </label>

            <label>
              <span>
                One-time implementation cost
                (<b data-selected-currency>PHP</b>)
              </span>

              <input
                type="number"
                name="setupCost"
                value="${defaults.setupCost}"
                min="0"
                data-roi-input
              >

              <small class="roi-field-help">
                Initial cost to design, build, test,
                and launch the automation.
              </small>
            </label>
          </div>

          <div class="roi-simple-results">
            <div class="roi-result-card">
              <span>
                Team hours saved per month
              </span>

              <strong data-roi-hours>
                0 hrs
              </strong>

              <small>
                Estimated working time returned
                to the team.
              </small>
            </div>

            <div class="roi-result-card featured">
              <span>
                Net savings per month
              </span>

              <strong data-roi-monthly>
                ₱0
              </strong>

              <small>
                Labor value saved minus monthly
                automation costs.
              </small>
            </div>

            <div class="roi-result-card">
              <span>
                Return after the first year
              </span>

              <strong data-roi-percentage>
                0%
              </strong>

              <small>
                Includes setup cost and twelve
                months of software costs.
              </small>
            </div>

            <div class="roi-result-card">
              <span>
                Time to recover setup cost
              </span>

              <strong data-roi-payback>
                0 months
              </strong>

              <small>
                Estimated number of months before
                savings cover implementation.
              </small>
            </div>

            <button
              class="roi-reset-button"
              type="button"
              data-roi-reset
            >
              Reset to example values
            </button>
          </div>
        </div>

        <details class="roi-explanation">
          <summary>
            How are these results calculated?
          </summary>

          <div>
            <p>
              <strong>Monthly time saved</strong>
              = tasks per month × minutes saved
              per task ÷ 60.
            </p>

            <p>
              <strong>Net monthly savings</strong>
              = value of employee time saved −
              monthly automation cost.
            </p>

            <p>
              <strong>First-year ROI</strong>
              compares the first-year net value
              against the setup cost and twelve
              months of automation costs.
            </p>

            <p>
              <strong>Payback period</strong>
              estimates how long the monthly net
              savings will take to recover the
              one-time implementation cost.
            </p>
          </div>
        </details>

        <p class="roi-disclaimer">
          This calculator provides an operational
          estimate, not a guaranteed financial
          return. Actual results depend on adoption,
          workflow volume, employee costs, software
          pricing, and implementation requirements.
        </p>
      </section>

      <section class="case-study-next">
        <div>
          <span>
            HAVE A PROCESS LIKE THIS?
          </span>

          <h2>
            Let’s turn it into an organized
            automation.
          </h2>
        </div>

        <a
          class="primary-button"
          href="contact.html"
        >
          Start a conversation →
        </a>
      </section>
    </article>
  `;

  initializeRoiCalculator();
}
/* ========================================
   SERVICES PAGE
======================================== */

function renderServicesPage() {
  const app =
    document.getElementById("app");

  if (!app) return;

  const data =
    portfolioData.servicesPage;

  if (!data) {
    app.innerHTML = `
      <section class="services-error">
        <h1>Services are currently unavailable.</h1>

        <a
          class="primary-button"
          href="index.html"
        >
          ← Return home
        </a>
      </section>
    `;

    return;
  }

  const serviceCards = data.services
    .map((service) => {
      return `
        <article class="service-page-card">
          <div class="service-card-number">
            ${service.number}
          </div>

          <div class="service-card-heading">
            <h2>${service.title}</h2>
            <p>${service.description}</p>
          </div>

          <div class="service-ideal">
            <span>GOOD FIT FOR</span>
            <p>${service.idealFor}</p>
          </div>

          <div class="service-deliverables">
            <span>WHAT YOU RECEIVE</span>

            <ul>
              ${service.deliverables
                .map((deliverable) => {
                  return `
                    <li>
                      <span>✓</span>
                      ${deliverable}
                    </li>
                  `;
                })
                .join("")}
            </ul>
          </div>

          <div class="service-tools">
            ${service.tools
              .map(
                (tool) =>
                  `<span>${tool}</span>`
              )
              .join("")}
          </div>

          <a
            href="contact.html?service=${encodeURIComponent(
              service.title
            )}"
            class="service-card-link"
          >
            Discuss this service →
          </a>
        </article>
      `;
    })
    .join("");

  const processSteps = data.process
    .map((step) => {
      return `
        <article class="service-process-step">
          <span>${step.number}</span>

          <div>
            <h3>${step.title}</h3>
            <p>${step.description}</p>
          </div>
        </article>
      `;
    })
    .join("");

  app.innerHTML = `
    <article class="services-page">
      <a
        class="back-link"
        href="index.html"
      >
        ← Home
      </a>

      <header class="services-page-hero">
        <div>
          <span class="services-eyebrow">
            ${data.introduction.eyebrow}
          </span>

          <h1>
            ${data.introduction.title}
          </h1>

          <p>
            ${data.introduction.description}
          </p>
        </div>

        <a
          class="primary-button"
          href="contact.html"
        >
          Start a project →
        </a>
      </header>

      <section class="services-page-grid">
        ${serviceCards}
      </section>

      <section class="services-process">
        <div class="services-section-heading">
          <span>HOW I WORK</span>

          <h2>
            From business problem to working system.
          </h2>

          <p>
            A structured process keeps the automation
            focused, testable, and easy to operate.
          </p>
        </div>

        <div class="service-process-grid">
          ${processSteps}
        </div>
      </section>

      <section class="services-included">
        <div>
          <span>EVERY IMPLEMENTATION INCLUDES</span>

          <h2>
            Built for clarity, safety, and handoff.
          </h2>
        </div>

        <ul>
          ${data.included
            .map((item) => {
              return `
                <li>
                  <span>✓</span>
                  ${item}
                </li>
              `;
            })
            .join("")}
        </ul>
      </section>

      <section class="services-final-cta">
        <div>
          <span>HAVE A PROCESS IN MIND?</span>

          <h2>
            Let’s identify what can be automated.
          </h2>

          <p>
            Tell me what your team currently does
            manually and what outcome you want.
          </p>
        </div>

        <a
          class="primary-button"
          href="contact.html"
        >
          Discuss your workflow →
        </a>
      </section>
    </article>
  `;
}
/* ========================================
   CREDENTIALS AND CERTIFICATES PAGE
======================================== */

function renderCredentialsPage() {
  const app = document.getElementById("app");

  if (!app) return;

  const certificates =
    portfolioData.home?.credentials || [];

  document.title =
    "Credentials & Certificates | Dexter Esto";

  app.innerHTML = `
    <article class="credentials-page">
      <header class="credentials-page-hero">
        <div class="credentials-hero-copy">
          <span class="credentials-eyebrow">
            PROFESSIONAL DEVELOPMENT
          </span>

          <h1>
            Credentials & Certificates
          </h1>

          <p>
            Certificates and technical training
            supporting my work in AI Engineering,
            Data Engineering, Workflow Automation,
            and Business-System Integration.
          </p>
        </div>

        <div class="credentials-summary">
          <div>
            <strong>${certificates.length}</strong>

            <span>
              Certificates
            </span>
          </div>

          <div>
            <strong>4</strong>

            <span>
              Learning areas
            </span>
          </div>
        </div>
      </header>

      <section class="credentials-introduction">
        <div>
          <span class="section-label">
            CONTINUOUS LEARNING
          </span>

          <h2>
            Building practical skills through
            structured training
          </h2>
        </div>

        <p>
          These credentials support the practical
          systems demonstrated in my portfolio.
          Select any certificate to view its
          full-resolution image.
        </p>
      </section>

      ${
        certificates.length
          ? `
            <section
              class="credentials-grid"
              aria-label="Certificates"
            >
              ${certificates
                .map((certificate, index) => {
                  return `
                    <article class="credential-card">
                      <a
                        class="credential-image-link"
                        href="${certificate.image}"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open ${certificate.title}"
                      >
                        <div class="credential-image-frame">
                          <img
                            src="${certificate.image}"
                            alt="${certificate.title}"
                            loading="lazy"
                            decoding="async"
                          >

                          <span class="credential-open-label">
                            View certificate ↗
                          </span>
                        </div>
                      </a>

                      <div class="credential-card-content">
                        <span class="credential-number">
                          ${String(index + 1).padStart(
                            2,
                            "0"
                          )}
                        </span>

                        <div>
                          <h2>
                            ${certificate.title}
                          </h2>

                          <p>
                            Professional learning
                            credential
                          </p>
                        </div>
                      </div>
                    </article>
                  `;
                })
                .join("")}
            </section>
          `
          : `
            <section class="credentials-empty">
              <h2>
                Certificates will be added soon.
              </h2>

              <p>
                Verified credentials and training
                records will appear here.
              </p>
            </section>
          `
      }

      <section class="credential-focus-section">
        <div class="credential-focus-heading">
          <span class="section-label">
            TECHNICAL FOCUS
          </span>

          <h2>
            Skills supported by these credentials
          </h2>
        </div>

        <div class="credential-focus-grid">
          <article>
            <span>01</span>
            <h3>AI Engineering</h3>
            <p>
              AI-assisted systems, structured
              prompts, validation, and responsible
              human-review controls.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Data Engineering</h3>
            <p>
              Data preparation, structured records,
              validation, and reliable information
              movement between systems.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Workflow Automation</h3>
            <p>
              Low-code process automation using
              n8n, Zapier, APIs, webhooks, and
              business rules.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Technical Training</h3>
            <p>
              Continued professional development
              through practical courses and
              recognized training programs.
            </p>
          </article>
        </div>
      </section>

      <section class="credentials-final-cta">
        <div>
          <span>
            WANT TO SEE THESE SKILLS IN PRACTICE?
          </span>

          <h2>
            Explore the automation systems I have
            built.
          </h2>
        </div>

        <a
          class="primary-button"
          href="projects.html"
        >
          View projects →
        </a>
      </section>
    </article>
  `;
}
/* ========================================
   ABOUT PAGE
======================================== */

function renderAboutPage() {
  const app = document.getElementById("app");

  if (!app) return;

  const about = portfolioData.about;

  if (!about) return;

  document.title = "About | Dexter Esto";

  app.innerHTML = `
    <article class="about-page">
      <header class="about-page-hero">
        <div class="about-hero-copy">
          <span class="about-eyebrow">
            ${about.introduction.eyebrow}
          </span>

          <h1>
            ${about.introduction.title}
          </h1>

          <p>
            ${about.introduction.description}
          </p>

          <div class="about-hero-actions">
            <a
              class="primary-button"
              href="projects.html"
            >
              Explore my projects →
            </a>

            <a
              class="about-secondary-button"
              href="contact.html"
            >
              Contact me
            </a>
          </div>
        </div>

        <div class="about-profile-card">
          <div class="about-profile-image">
            <img
              src="${portfolioData.profile.image}"
              alt="${portfolioData.profile.name}"
            >
          </div>

          <div class="about-profile-information">
            <span>
              AI AUTOMATION ENGINEER
            </span>

            <h2>
              ${portfolioData.profile.name}
            </h2>

            <p>
              Computer Engineering background
            </p>

            <div class="about-availability">
              <span></span>
              Available for remote opportunities
            </div>
          </div>
        </div>
      </header>

      <section class="about-story-section">
        <div class="about-section-heading">
          <span class="section-label">
            MY APPROACH
          </span>

          <h2>
            Connecting technology with practical
            business operations
          </h2>
        </div>

        <div class="about-story-content">
          ${about.story
            .map((paragraph) => {
              return `<p>${paragraph}</p>`;
            })
            .join("")}
        </div>
      </section>

      <section class="about-principles-section">
        <div class="about-section-heading">
          <span class="section-label">
            HOW I BUILD
          </span>

          <h2>
            Principles behind my automation work
          </h2>
        </div>

        <div class="about-principles-grid">
          ${about.principles
            .map((principle) => {
              return `
                <article class="about-principle-card">
                  <span>
                    ${principle.number}
                  </span>

                  <h3>
                    ${principle.title}
                  </h3>

                  <p>
                    ${principle.description}
                  </p>
                </article>
              `;
            })
            .join("")}
        </div>
      </section>

      <section class="about-details-grid">
        <article class="about-toolkit-card">
          <span class="section-label">
            TOOLS AND PLATFORMS
          </span>

          <h2>
            My automation toolkit
          </h2>

          <p>
            The tools I use depend on the business
            process and existing technology.
          </p>

          <div class="about-toolkit-list">
            ${about.toolkit
              .map((tool) => {
                return `<span>${tool}</span>`;
              })
              .join("")}
          </div>
        </article>

        <article class="about-working-card">
          <span class="section-label">
            WORKING STYLE
          </span>

          <h2>
            Organized from planning to handoff
          </h2>

          <ul>
            ${about.workingStyle
              .map((item) => {
                return `
                  <li>
                    <span>✓</span>
                    ${item}
                  </li>
                `;
              })
              .join("")}
          </ul>
        </article>
      </section>

      <section class="about-final-cta">
        <div>
          <span>
            HAVE A PROCESS THAT NEEDS AUTOMATION?
          </span>

          <h2>
            Let’s explore how it can become a
            clearer and more efficient system.
          </h2>
        </div>

        <a
          class="primary-button"
          href="contact.html"
        >
          Start a conversation →
        </a>
      </section>
    </article>
  `;
}
/* ========================================
   CONTACT PAGE
======================================== */

function renderContactPage() {
  const app = document.getElementById("app");

  if (!app) return;

  const contact = portfolioData.contact;

  if (!contact) return;

  document.title = "Contact | Dexter Esto";

  app.innerHTML = `
    <article class="contact-page">
      <header class="contact-page-header">
        <span class="contact-eyebrow">
          ${contact.introduction.eyebrow}
        </span>

        <h1>
          ${contact.introduction.title}
        </h1>

        <p>
          ${contact.introduction.description}
        </p>
      </header>

      <section class="contact-layout">
        <aside class="contact-information">
          <div class="contact-information-heading">
            <span class="section-label">
              CONTACT INFORMATION
            </span>

            <h2>
              Start with a simple conversation
            </h2>

            <p>
              You do not need to have the complete
              automation planned. Describe the
              current process and what is slowing
              the business down.
            </p>
          </div>

          <div class="contact-details-list">
            <a
              class="contact-detail-item"
              href="mailto:${contact.email}"
            >
              <span class="contact-detail-icon">
                ${icon("mail", 20)}
              </span>

              <div>
                <small>Email</small>
                <strong>${contact.email}</strong>
              </div>
            </a>

            <div class="contact-detail-item">
              <span class="contact-detail-icon">
                ${icon("user", 20)}
              </span>

              <div>
                <small>Location</small>
                <strong>${contact.location}</strong>
              </div>
            </div>

            <div class="contact-detail-item">
              <span class="contact-detail-icon">
                ${icon("message", 20)}
              </span>

              <div>
                <small>Response time</small>
                <strong>
                  ${contact.responseTime}
                </strong>
              </div>
            </div>
          </div>

          <div class="contact-booking-card">
            <span>
              PREFER A QUICK CALL?
            </span>

            <h3>
              Book a discovery conversation
            </h3>

            <p>
              Choose an available time through
              Calendly to discuss your current
              process and automation goals.
            </p>

            <a
              class="contact-calendly-button"
              href="${contact.calendlyUrl}"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule through Calendly →
            </a>
          </div>
        </aside>

        <section class="contact-form-card">
          <div class="contact-form-heading">
            <span class="section-label">
              PROJECT INQUIRY
            </span>

            <h2>
              Tell me about your process
            </h2>

            <p>
              Fields marked with an asterisk are
              required.
            </p>
          </div>

          <form
            class="contact-form"
            id="contactForm"
            novalidate
          >
            <div class="contact-form-grid">
              <label>
                <span>
                  Full name *
                </span>

                <input
                  type="text"
                  name="fullName"
                  autocomplete="name"
                  placeholder="Your full name"
                  required
                >
              </label>

              <label>
                <span>
                  Email address *
                </span>

                <input
                  type="email"
                  name="email"
                  autocomplete="email"
                  placeholder="you@company.com"
                  required
                >
              </label>

              <label>
                <span>
                  Company or business
                </span>

                <input
                  type="text"
                  name="company"
                  autocomplete="organization"
                  placeholder="Business name"
                >
              </label>

              <label>
                <span>
                  Service needed *
                </span>

                <select
                  name="service"
                  required
                >
                  <option value="">
                    Select a service
                  </option>

                  ${contact.services
                    .map((service) => {
                      return `
                        <option value="${service}">
                          ${service}
                        </option>
                      `;
                    })
                    .join("")}
                </select>
              </label>

              <label>
                <span>
                  Estimated budget
                </span>

                <input
                  type="text"
                  name="budget"
                  placeholder="Example: USD 1,000"
                >
              </label>

              <label>
                <span>
                  Preferred timeline
                </span>

                <select name="timeline">
                  <option value="">
                    Select a timeline
                  </option>

                  <option value="As soon as possible">
                    As soon as possible
                  </option>

                  <option value="Within 2–4 weeks">
                    Within 2–4 weeks
                  </option>

                  <option value="Within 1–2 months">
                    Within 1–2 months
                  </option>

                  <option value="Flexible">
                    Flexible
                  </option>

                  <option value="Just exploring">
                    Just exploring
                  </option>
                </select>
              </label>
            </div>

            <label class="contact-message-field">
              <span>
                Which task or process would you love to stop doing
                manually? *
              </span>

              <textarea
                name="message"
                rows="7"
                placeholder="Describe the current process, tools you use, repetitive work, and the result you want."
                required
              ></textarea>
            </label>

            <label class="contact-consent">
              <input
                type="checkbox"
                name="consent"
                value="yes"
                required
              >

              <span>
                I agree that the information I
                submit may be used to respond to
                this project inquiry.
              </span>
            </label>

            <div
              class="contact-form-status"
              id="contactFormStatus"
              role="status"
              aria-live="polite"
            ></div>

            <button
              class="contact-submit-button"
              type="submit"
            >
              Send project inquiry →
            </button>

            <p class="contact-form-note">
              Your information will not be
              displayed publicly or sold.
            </p>
          </form>
        </section>
      </section>
    </article>
  `;
}