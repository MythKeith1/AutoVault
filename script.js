```javascript
/* =====================================================
   AUTOVAULT — PREMIUM AUTOMOTIVE FUNNEL
   STAGE 03 — PAGE 01 JAVASCRIPT
===================================================== */


/* =====================================================
   01. DOM ELEMENTS
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const navigationLinks = document.getElementById("navigationLinks");
const navigationItems = document.querySelectorAll(".navigation-links a");


/* =====================================================
   02. MOBILE NAVIGATION
===================================================== */

if (menuToggle && navigationLinks) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navigationLinks.classList.toggle("active");

        menuToggle.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen.toString()
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

    });


    // Close menu after selecting a navigation link

    navigationItems.forEach(link => {

        link.addEventListener("click", () => {

            navigationLinks.classList.remove("active");
            menuToggle.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");

        });

    });


    // Close menu when clicking outside navigation

    document.addEventListener("click", event => {

        const clickedInsideNavigation =
            navigationLinks.contains(event.target) ||
            menuToggle.contains(event.target);

        if (!clickedInsideNavigation) {

            navigationLinks.classList.remove("active");
            menuToggle.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");

        }

    });

}


/* =====================================================
   03. HEADER SCROLL EFFECT
===================================================== */

const header = document.querySelector(".site-header");

if (header) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

}


/* =====================================================
   04. SCROLL REVEAL ANIMATIONS
===================================================== */

const revealElements = document.querySelectorAll(
    ".vehicle-card, .benefit-card, .about-content, .trust-item"
);

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("revealed");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(element => {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach(element => {
        element.classList.add("revealed");
    });

}


/* =====================================================
   05. VEHICLE CARD INTERACTIONS
===================================================== */

const vehicleCards = document.querySelectorAll(".vehicle-card");

vehicleCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.classList.add("vehicle-hover");

    });

    card.addEventListener("mouseleave", () => {

        card.classList.remove("vehicle-hover");

    });

});


/* =====================================================
   06. SMOOTH ANCHOR NAVIGATION
===================================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", event => {

        const targetId = anchor.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const targetElement = document.querySelector(targetId);

        if (targetElement) {

            event.preventDefault();

            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =====================================================
   07. HERO IMAGE FALLBACK
===================================================== */

const heroImage = document.querySelector(".hero-background img");

if (heroImage) {

    heroImage.addEventListener("error", () => {

        heroImage.style.display = "none";

    });

}


/* =====================================================
   08. CURRENT YEAR
===================================================== */

const copyrightText = document.querySelector(".footer-bottom span");

if (copyrightText) {

    copyrightText.textContent =
        `© ${new Date().getFullYear()} AUTOVAULT. ALL RIGHTS RESERVED.`;

}


/* =====================================================
   09. PAGE INITIALIZATION
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    document.body.classList.add("page-loaded");

    console.log("AUTOVAULT homepage initialized successfully.");

});
```
