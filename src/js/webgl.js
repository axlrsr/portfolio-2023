import { Renderer, Geometry, Program, Mesh, Color, Vec3, Vec2 } from "ogl";

import backgroundVertexShader from "../shaders/background/vertex.glsl?raw";
import backgroundFragmentShader from "../shaders/background/fragment.glsl?raw";

export function setupWebgl() {
  // Get original size
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  // Create renderer
  const renderer = new Renderer({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const gl = renderer.gl;
  document.body.appendChild(gl.canvas);

  // Update size and renderer on resize
  window.addEventListener("resize", () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    renderer.setSize(sizes.width, sizes.height);
  });

  // Get mouse position
  const mouse = new Vec2();

  window.addEventListener("mousemove", (e) => {
    mouse.x = (e.clientX / sizes.width) * 2 - 1;
    mouse.y = -(e.clientY / sizes.height) * 2 + 1;
  });

  // Update shader color on hover
  const projectsColors = [];
  const defaultColor = new Color("#7020df");
  const defaultColorVec = new Vec3(
    defaultColor.r,
    defaultColor.g,
    defaultColor.b
  );

  let currentColor = new Vec3().copy(defaultColorVec);
  let targetColor = currentColor;

  const projectsLinkEls = document.querySelectorAll(".projects__link");

  projectsLinkEls.forEach((el, i) => {
    const projectColor = new Color(el.dataset.color);
    projectsColors[i] = new Vec3(
      projectColor.r,
      projectColor.g,
      projectColor.b
    );

    el.addEventListener("mouseenter", () => {
      targetColor = projectsColors[i];
    });

    el.addEventListener("mouseleave", () => {
      targetColor = defaultColorVec;
    });
  });

  // Create geometry
  const geometry = new Geometry(gl, {
    position: { size: 2, data: new Float32Array([-1, -1, 3, -1, -1, 3]) },
    uv: { size: 2, data: new Float32Array([0, 0, 2, 0, 0, 2]) },
  });

  // Create material
  const program = new Program(gl, {
    vertex: backgroundVertexShader,
    fragment: backgroundFragmentShader,
    uniforms: {
      uTime: { value: 0 },
      uResolution: { value: [sizes.width, sizes.height] },
      uMaxWidth: { value: 800 },
      uColor: { value: currentColor },
      uMouse: { value: mouse },
    },
  });

  // Create mesh
  const mesh = new Mesh(gl, { geometry, program });

  // Animation function
  requestAnimationFrame(update);

  function update(t) {
    requestAnimationFrame(update);

    program.uniforms.uTime.value = t * 0.001;
    program.uniforms.uResolution.value = [sizes.width, sizes.height];
    program.uniforms.uColor.value = currentColor.lerp(targetColor, 0.05);
    program.uniforms.uMouse.value = mouse;

    renderer.render({ scene: mesh });
  }
}
