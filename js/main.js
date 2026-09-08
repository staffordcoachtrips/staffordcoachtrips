"use strict";

function initialiseSite() {
  const menuButton = document.querySelector(".menu-button");
  const menu = document.querySelector(".nav-links");

  if (menuButton && menu) {
    const closeMenu = () => {
      menu.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    };

    menuButton.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(open));
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", (event) => {
        if (link.getAttribute("aria-current") === "page") {
          event.preventDefault();
        }

        closeMenu();
      });
    });

    document.addEventListener("click", (event) => {
      if (
        menu.classList.contains("open") &&
        !menu.contains(event.target) &&
        !menuButton.contains(event.target)
      ) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && menu.classList.contains("open")) {
        closeMenu();
        menuButton.focus();
      }
    });
  }

  const year = document.getElementById("year");

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  const pageTitle = document.getElementById("pageTitle");
  const destination = document.getElementById("destination");

  if (pageTitle || destination) {
    const trip =
      new URLSearchParams(window.location.search).get("trip") || "Future Trip";

    if (pageTitle) {
      pageTitle.textContent = "Register your interest in " + trip;
    }

    if (destination) {
      destination.value = trip;
    }
  }

  const pickup = document.getElementById("pickup");
  const otherPickupGroup = document.getElementById("otherPickupGroup");

  if (pickup && otherPickupGroup) {
    const updateOtherPickup = () => {
      otherPickupGroup.style.display =
        pickup.value === "Other" ? "block" : "none";
    };

    pickup.addEventListener("change", updateOtherPickup);
    updateOtherPickup();
  }

  document.querySelectorAll(".trip-slider").forEach((slider) => {
    const images = slider.querySelectorAll("img");

    if (images.length < 2) {
      return;
    }

    let current = 0;

    window.setInterval(() => {
      images[current].classList.remove("active");
      current = (current + 1) % images.length;
      images[current].classList.add("active");
    }, 3500);
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initialiseSite, {
    once: true
  });
} else {
  initialiseSite();
}
