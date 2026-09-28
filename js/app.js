/* ========================================
   PAGE SETUP
======================================== */

renderSidebar();

const currentPage =
  document.body.dataset.page || "home";

/* ========================================
   PAGE RENDERING
======================================== */

if (
  currentPage === "home" &&
  typeof renderHome === "function"
) {
  renderHome();
}

if (
  currentPage === "projects" &&
  typeof renderProjects === "function"
) {
  renderProjects();
}

if (
  currentPage === "case-study" &&
  typeof renderCaseStudy === "function"
) {
  renderCaseStudy();
}

if (
  currentPage === "services" &&
  typeof renderServicesPage === "function"
) {
  renderServicesPage();
}

if (
  currentPage === "credentials" &&
  typeof renderCredentialsPage === "function"
) {
  renderCredentialsPage();
}

/* ========================================
   PROJECT FILTERS
======================================== */

if (currentPage === "projects") {
  const projectFilters =
    document.querySelectorAll(
      ".project-filter"
    );

  const projectCards =
    document.querySelectorAll(
      ".project-card"
    );

  projectFilters.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedFilter =
        button.dataset.filter;

      projectFilters.forEach((item) => {
        item.classList.remove("active");
      });

      button.classList.add("active");

      projectCards.forEach((card) => {
        const cardCategory =
          card.dataset.category;

        const shouldShow =
          selectedFilter === "All" ||
          selectedFilter === cardCategory;

        card.classList.toggle(
          "hidden",
          !shouldShow
        );
      });
    });
  });
}

/* ========================================
   MOBILE NAVIGATION
======================================== */

const mobileMenuButton =
  document.getElementById(
    "mobileMenuButton"
  );

const sidebar =
  document.getElementById("sidebar");

const sidebarOverlay =
  document.getElementById(
    "sidebarOverlay"
  );

function closeMobileMenu() {
  if (!sidebar) return;

  sidebar.classList.remove("open");

  sidebarOverlay?.classList.remove(
    "visible"
  );

  mobileMenuButton?.classList.remove(
    "active"
  );

  mobileMenuButton?.setAttribute(
    "aria-expanded",
    "false"
  );

  document.body.classList.remove(
    "menu-open"
  );
}

function openMobileMenu() {
  if (!sidebar) return;

  sidebar.classList.add("open");

  sidebarOverlay?.classList.add(
    "visible"
  );

  mobileMenuButton?.classList.add(
    "active"
  );

  mobileMenuButton?.setAttribute(
    "aria-expanded",
    "true"
  );

  document.body.classList.add(
    "menu-open"
  );
}

if (mobileMenuButton && sidebar) {
  mobileMenuButton.addEventListener(
    "click",
    () => {
      const isOpen =
        sidebar.classList.contains("open");

      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    }
  );
}

sidebarOverlay?.addEventListener(
  "click",
  closeMobileMenu
);

document
  .querySelectorAll(".navigation-link")
  .forEach((link) => {
    link.addEventListener(
      "click",
      closeMobileMenu
    );
  });

document.addEventListener(
  "keydown",
  (event) => {
    if (event.key === "Escape") {
      closeMobileMenu();
    }
  }
);

/* ========================================
   CARD POINTER EFFECT
======================================== */

document
  .querySelectorAll(".home-card")
  .forEach((card) => {
    card.addEventListener(
      "pointermove",
      (event) => {
        if (event.pointerType === "touch") {
          return;
        }

        const bounds =
          card.getBoundingClientRect();

        const pointerX =
          event.clientX - bounds.left;

        const pointerY =
          event.clientY - bounds.top;

        card.style.setProperty(
          "--pointer-x",
          `${pointerX}px`
        );

        card.style.setProperty(
          "--pointer-y",
          `${pointerY}px`
        );
      }
    );
  });

/* ========================================
   SCROLL REVEAL
======================================== */

const revealElements =
  document.querySelectorAll(
    [
      ".home-hero",
      ".tools-strip",
      ".home-card",
      ".service-page-card",
      ".credential-card",
      ".credential-focus-grid article"
    ].join(", ")
  );

if (
  "IntersectionObserver" in window
) {
  const revealObserver =
    new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add(
            "visible"
          );

          revealObserver.unobserve(
            entry.target
          );
        });
      },
      {
        threshold: 0.08,
        rootMargin:
          "0px 0px 30px 0px"
      }
    );

  revealElements.forEach(
    (element, index) => {
      element.classList.add("reveal");

      element.style.setProperty(
        "--reveal-delay",
        `${
          Math.min(index, 5) * 60
        }ms`
      );

      revealObserver.observe(element);
    }
  );
} else {
  revealElements.forEach((element) => {
    element.classList.add("visible");
  });
}

/* ========================================
   POLAROID 3D EFFECT
======================================== */

const polaroidStack =
  document.querySelector(
    ".polaroid-stack"
  );

if (polaroidStack) {
  polaroidStack.addEventListener(
    "pointermove",
    (event) => {
      if (event.pointerType === "touch") {
        return;
      }

      const bounds =
        polaroidStack.getBoundingClientRect();

      const x =
        (event.clientX - bounds.left) /
        bounds.width;

      const y =
        (event.clientY - bounds.top) /
        bounds.height;

      const rotateY =
        (x - 0.5) * 8;

      const rotateX =
        (0.5 - y) * 7;

      polaroidStack.style.transform = `
        perspective(900px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
      `;
    }
  );

  polaroidStack.addEventListener(
    "pointerleave",
    () => {
      polaroidStack.style.transform =
        "perspective(900px) rotateX(0deg) rotateY(0deg)";
    }
  );
}

/* ========================================
   DASHBOARD 3D EFFECT
======================================== */

const dashboardPreview =
  document.querySelector(
    ".dashboard-preview"
  );

if (dashboardPreview) {
  dashboardPreview.addEventListener(
    "pointermove",
    (event) => {
      if (event.pointerType === "touch") {
        return;
      }

      const bounds =
        dashboardPreview.getBoundingClientRect();

      const x =
        (event.clientX - bounds.left) /
        bounds.width;

      const y =
        (event.clientY - bounds.top) /
        bounds.height;

      const rotateY =
        (x - 0.5) * 4;

      const rotateX =
        (0.5 - y) * 3;

      dashboardPreview.style.transform = `
        perspective(1200px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-3px)
      `;
    }
  );

  dashboardPreview.addEventListener(
    "pointerleave",
    () => {
      dashboardPreview.style.transform =
        "perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0)";
    }
  );
}

/* ========================================
   PROJECT VIDEO CAROUSEL
======================================== */

const videoCarousel =
  document.querySelector(
    "#videoCarousel"
  );

if (videoCarousel) {
  const videoSlides = [
    ...videoCarousel.querySelectorAll(
      ".video-slide"
    )
  ];

  const videoDots = [
    ...videoCarousel.querySelectorAll(
      ".video-dot"
    )
  ];

  const previousButton =
    videoCarousel.querySelector(
      "#videoPrevious"
    );

  const nextButton =
    videoCarousel.querySelector(
      "#videoNext"
    );

  let currentVideoIndex = 0;
  let failedVideoTimer;

  function showVideo(index) {
    if (!videoSlides.length) return;

    clearTimeout(failedVideoTimer);

    let nextIndex = index;

    if (nextIndex < 0) {
      nextIndex =
        videoSlides.length - 1;
    }

    if (
      nextIndex >= videoSlides.length
    ) {
      nextIndex = 0;
    }

    videoSlides.forEach(
      (slide, slideIndex) => {
        const video =
          slide.querySelector("video");

        const isActive =
          slideIndex === nextIndex;

        slide.classList.toggle(
          "active",
          isActive
        );

        videoDots[
          slideIndex
        ]?.classList.toggle(
          "active",
          isActive
        );

        if (video && !isActive) {
          video.pause();
          video.currentTime = 0;
        }
      }
    );

    currentVideoIndex = nextIndex;

    const activeVideo =
      videoSlides[
        currentVideoIndex
      ]?.querySelector("video");

    if (!activeVideo) return;

    activeVideo.currentTime = 0;

    const playPromise =
      activeVideo.play();

    if (playPromise !== undefined) {
      playPromise.catch(() => {
        failedVideoTimer =
          setTimeout(() => {
            showVideo(
              currentVideoIndex + 1
            );
          }, 5000);
      });
    }
  }

  videoSlides.forEach(
    (slide, index) => {
      const video =
        slide.querySelector("video");

      if (!video) return;

      video.addEventListener(
        "ended",
        () => {
          showVideo(index + 1);
        }
      );

      video.addEventListener(
        "error",
        () => {
          if (
            index === currentVideoIndex
          ) {
            failedVideoTimer =
              setTimeout(() => {
                showVideo(index + 1);
              }, 1500);
          }
        }
      );
    }
  );

  previousButton?.addEventListener(
    "click",
    () => {
      showVideo(
        currentVideoIndex - 1
      );
    }
  );

  nextButton?.addEventListener(
    "click",
    () => {
      showVideo(
        currentVideoIndex + 1
      );
    }
  );

  videoDots.forEach(
    (dot, index) => {
      dot.addEventListener(
        "click",
        () => {
          showVideo(index);
        }
      );
    }
  );

  document.addEventListener(
    "visibilitychange",
    () => {
      const activeVideo =
        videoSlides[
          currentVideoIndex
        ]?.querySelector("video");

      if (!activeVideo) return;

      if (document.hidden) {
        activeVideo.pause();
      } else {
        activeVideo
          .play()
          .catch(() => {});
      }
    }
  );

  showVideo(0);
}

/* ========================================
   REDUCED MOTION SUPPORT
======================================== */

const prefersReducedMotion =
  window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

if (prefersReducedMotion.matches) {
  document
    .querySelectorAll(".reveal")
    .forEach((element) => {
      element.classList.add(
        "visible"
      );
    });
}
if (
  currentPage === "about" &&
  typeof renderAboutPage === "function"
) {
  renderAboutPage();
}
if (
  currentPage === "contact" &&
  typeof renderContactPage === "function"
) {
  renderContactPage();
}