// Style
import "./style.css";

// Animation
import { animation } from "./src/js/animation.js";
animation();

// WebGL
import { webgl } from "./src/js/webgl.js";
webgl();

// Set credit year
const footerYearEl = document.querySelector(".footer__year");
footerYearEl.innerHTML = new Date().getFullYear();
