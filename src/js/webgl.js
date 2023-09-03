import { Renderer, Geometry, Program, Mesh, Vec2 } from "ogl";

import backgroundVertexShader from "../shaders/background/vertex.glsl?raw";
import backgroundFragmentShader from "../shaders/background/fragment.glsl?raw";

export function webgl() {
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

    renderer.render({ scene: mesh });
  }
}
