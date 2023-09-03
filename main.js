// Style
import "./style.css";

// Animation
import { setupAnimations } from "./src/js/animation.js";
setupAnimations();

// WebGL
import { setupWebgl } from "./src/js/webgl.js";
setupWebgl();

// Set credit year
const footerYearEl = document.querySelector(".footer__year");
footerYearEl.innerHTML = new Date().getFullYear();
