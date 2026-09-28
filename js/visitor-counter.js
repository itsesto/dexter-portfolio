/* =========================================
   PUBLIC PORTFOLIO VISITOR COUNTER
========================================= */

const SUPABASE_PROJECT_URL =
  "https://prbxhdzbcunsddngbkdg.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_vnS5JR9euawwtZMX25En2g_J_CHfu2h";

async function requestVisitCount(functionName) {
  const projectUrl =
    SUPABASE_PROJECT_URL.replace(/\/+$/, "");

  const response = await fetch(
    `${projectUrl}/rest/v1/rpc/${functionName}`,
    {
      method: "POST",

      headers: {
        apikey: SUPABASE_PUBLISHABLE_KEY,
        "Content-Type": "application/json"
      },

      body: JSON.stringify({})
    }
  );

  if (!response.ok) {
    const errorText = await response.text();

    throw new Error(
      `Visitor counter error ${response.status}: ${errorText}`
    );
  }

  const result = await response.json();

  if (Array.isArray(result)) {
    return Number(result[0] || 0);
  }

  return Number(result || 0);
}

function createVisitorCounter() {
  const hero =
    document.querySelector(".home-hero");

  if (!hero) return null;

  const existingCounter =
    document.getElementById(
      "portfolioVisitorCounter"
    );

  if (existingCounter) {
    return existingCounter;
  }

  const counter =
    document.createElement("div");

  counter.className =
    "portfolio-visitor-counter is-loaded";

  counter.id = "portfolioVisitorCounter";
  counter.setAttribute("aria-live", "polite");

  counter.innerHTML = `
    <span
      class="visitor-live-dot"
      aria-hidden="true"
    ></span>

    <span
      class="visitor-count-number"
      id="portfolioVisitCount"
    >
      ...
    </span>

    <span class="visitor-count-label">
      Profile Visits
    </span>
  `;

  hero.appendChild(counter);

  return counter;
}

async function initializeVisitorCounter() {
  const counter = createVisitorCounter();

  if (!counter) return;

  const countElement =
    document.getElementById(
      "portfolioVisitCount"
    );

  try {
    let wasCounted = false;

    try {
      wasCounted =
        sessionStorage.getItem(
          "dexterPortfolioVisitCounted"
        ) === "true";
    } catch (error) {
      wasCounted = false;
    }

    const functionName = wasCounted
      ? "get_portfolio_visits"
      : "increment_portfolio_visits";

    const visitCount =
      await requestVisitCount(functionName);

    countElement.textContent =
      visitCount.toLocaleString();

    if (!wasCounted) {
      try {
        sessionStorage.setItem(
          "dexterPortfolioVisitCounted",
          "true"
        );
      } catch (error) {
        // Continue if session storage is unavailable.
      }
    }
  } catch (error) {
    console.error(error);

    countElement.textContent = "—";
    counter.title =
      "Visitor count is temporarily unavailable";
  }
}

initializeVisitorCounter();