// ==========================================
// LAXMAN PARIYAR PORTFOLIO 2026
// DARK MODE ONLY
// ==========================================

document.body.classList.add("dark");

// -----------------------------
// SCROLL PROGRESS BAR
// -----------------------------

const progressBar = document.querySelector(".progress-bar");
let ticking = false;

window.addEventListener("scroll", () => {
    if (!ticking) {
        requestAnimationFrame(() => {
            const scrollTop = window.scrollY;
            const documentHeight =
                document.documentElement.scrollHeight - window.innerHeight;

            const progress = (scrollTop / documentHeight) * 100;
            progressBar.style.width = progress + "%";

            ticking = false;
        });

        ticking = true;
    }
});

// -----------------------------
// REVEAL ANIMATIONS
// -----------------------------

const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
);

const revealElements = document.querySelectorAll(
    ".project-card, .skill-card, .gallery-item, .featured-grid, .about-grid"
);

if (prefersReducedMotion.matches) {
    revealElements.forEach((element) => {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
    });
} else {
    revealElements.forEach((element) => {
        element.style.opacity = "0";
        element.style.transform = "translateY(40px)";
        element.style.transition = "all .8s ease";
    });
}

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {
    if (!prefersReducedMotion.matches) {
        revealObserver.observe(element);
    }
});

// -----------------------------
// ACTIVE NAVIGATION
// -----------------------------

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

// -----------------------------
// SMOOTH SCROLL
// -----------------------------

document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const target = document.querySelector(
            link.getAttribute("href")
        );

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// -----------------------------
// HERO ANIMATION
// -----------------------------

window.addEventListener("load", () => {
    const heroElements = [
        document.querySelector(".hero-label"),
        document.querySelector(".hero h1"),
        document.querySelector(".hero-description"),
        document.querySelector(".hero-actions")
    ];

    if (prefersReducedMotion.matches) {
        heroElements.forEach((element) => {
            if (!element) return;

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        });

        return;
    }

    heroElements.forEach((element, index) => {
        if (!element) return;

        element.style.opacity = "0";
        element.style.transform = "translateY(25px)";
        element.style.transition = "all .8s ease";

        setTimeout(() => {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }, index * 200);
    });
});

// -----------------------------
// BUTTON HOVER
// -----------------------------

document
    .querySelectorAll(".btn-primary, .btn-secondary")
    .forEach((button) => {
        button.addEventListener("mouseenter", () => {
            button.style.transform = "translateY(-3px)";
        });

        button.addEventListener("mouseleave", () => {
            button.style.transform = "translateY(0)";
        });
    });

// -----------------------------
// BACK TO TOP
// -----------------------------

const backToTopBtn = document.createElement("button");

backToTopBtn.classList.add("back-to-top");
backToTopBtn.innerHTML = "↑";

backToTopBtn.style.cssText = `
position: fixed;
bottom: 80px;
right: 24px;
width: 48px;
height: 48px;
border-radius: 50%;
border: 1px solid var(--border);
background: var(--card);
color: var(--text);
cursor: pointer;
opacity: 0;
visibility: hidden;
transition: all .3s ease;
z-index: 999;
font-size: 1.4rem;
`;

document.body.appendChild(backToTopBtn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        backToTopBtn.style.opacity = "1";
        backToTopBtn.style.visibility = "visible";
    } else {
        backToTopBtn.style.opacity = "0";
        backToTopBtn.style.visibility = "hidden";
    }
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// -----------------------------
// MOBILE MENU
// -----------------------------

const nav = document.querySelector("nav");
const header = document.querySelector(".header .container");

if (window.innerWidth <= 768 && nav && header) {
    const toggle = document.createElement("button");

    toggle.classList.add("menu-toggle");
    toggle.innerHTML = "☰";

    header.insertBefore(toggle, nav);

    toggle.addEventListener("click", () => {
        nav.classList.toggle("mobile-open");

        toggle.innerHTML =
            nav.classList.contains("mobile-open")
                ? "✕"
                : "☰";
    });
}

window.addEventListener("resize", () => {
    const nav = document.querySelector("nav");

    if (window.innerWidth > 768 && nav) {
        nav.classList.remove("mobile-open");
    }
});
const items = document.querySelectorAll('.gallery-item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });

items.forEach(item => observer.observe(item));

// -----------------------------
// CONSOLE
// -----------------------------

console.log("LAXMAN PARIYAR • Portfolio 2026");