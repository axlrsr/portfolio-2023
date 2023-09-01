// Custom scripts
import { splitText } from "./splitText.js";

// GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function animation() {
  // Nav animation
  gsap.from(".nav", {
    "--nav-after-scale": 0,
    duration: 1.2,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".nav",
      start: "top 85%",
      end: "bottom 15%",
    },
  });

  gsap.from(".nav__home", {
    y: "100% + 0.5rem",
    rotate: "25deg",
    opacity: 0,
    duration: 0.8,
    delay: 0.4,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".nav",
      start: "top 85%",
      end: "bottom 15%",
    },
  });

  gsap.from(".nav__item", {
    y: "100% + 0.5rem",
    rotate: "25deg",
    opacity: 0,
    duration: 0.8,
    delay: 0.6,
    stagger: 0.2,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".nav",
      start: "top 85%",
      end: "bottom 15%",
    },
  });

  // Header animation
  const headerTitleWordEls = document.querySelectorAll(".header__title__word");
  headerTitleWordEls.forEach((wordEl) => {
    splitText(wordEl, "");
  });

  gsap.from(".header__title__word > span", {
    y: "1em",
    rotate: "10deg",
    opacity: 0,
    duration: 0.8,
    stagger: 0.04,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".header__title",
      start: "top 85%",
      end: "bottom 15%",
    },
  });

  const headerTextEl = document.querySelector(".header__text");
  splitText(headerTextEl, " ");

  gsap.from(".header__text", {
    yPercent: 50,
    rotate: "5deg",
    opacity: 0,
    duration: 1.2,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".header__text",
      start: "top 85%",
      end: "bottom 15%",
    },
  });

  gsap.from(".header__text > span", {
    opacity: 0.25,
    duration: 0.8,
    stagger: 0.04,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".header__text",
      start: "top 85%",
      end: "bottom 15%",
    },
  });

  // Section title animation
  gsap.from(".section-title", {
    "--section-title-after-scale": 0,
    duration: 1.2,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".section-title",
      start: "top 85%",
      end: "bottom 15%",
    },
  });

  gsap.from(".section-title > *", {
    y: "100% + 0.5rem",
    rotate: "25deg",
    opacity: 0,
    duration: 0.8,
    delay: 0.4,
    stagger: 0.2,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".section-title",
      start: "top 85%",
      end: "bottom 15%",
    },
  });

  // Projects animation
  const projectsItems = gsap.utils.toArray(".projects__item");

  projectsItems.forEach((item) => {
    gsap.from(item, {
      y: "4rem",
      rotate: "2deg",
      opacity: 0,
      duration: 0.8,
      ease: "power4.out",
      scrollTrigger: {
        trigger: item,
        start: "top 85%",
        end: "bottom 15%",
      },
    });
  });

  // Footer animation
  gsap.from(".footer", {
    "--footer-before-scale": 0,
    duration: 1.2,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".footer",
    },
  });

  gsap.from(".footer__credit", {
    y: "-100% - 0.5rem",
    rotate: "25deg",
    opacity: 0,
    duration: 0.8,
    delay: 0.4,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".footer",
    },
  });

  gsap.from(".footer__item", {
    y: "-100% - 0.5rem",
    rotate: "25deg",
    opacity: 0,
    duration: 0.8,
    delay: 0.6,
    stagger: 0.2,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".footer",
    },
  });
}
