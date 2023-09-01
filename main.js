// Style
import "./style.css";

// Animation
import { animation } from "./src/js/animation.js";
animation();

// Set credit year
const footerYearEl = document.querySelector(".footer__year");
footerYearEl.innerHTML = new Date().getFullYear();
