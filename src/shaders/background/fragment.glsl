precision highp float;

uniform float uTime;
uniform vec2 uResolution;
uniform float uMaxWidth;

varying vec2 vUv;

void main() {
  vec2 aspect = uResolution / max(uResolution.x, uResolution.y);
  vec2 uv = vUv * aspect;
  vec2 center = vec2(0.5) * aspect;
  float width = min(0.75, uMaxWidth / uResolution.x);
  float radius = width / 2.0;

  vec3 blackColor = vec3(0.098,0.09,0.11);
  vec3 whiteColor = vec3(0.439,0.125,0.875);

  float strength = 1.0 - smoothstep(radius - 0.25, radius + 0.2, distance(uv, center));

  vec3 mixedColor = mix(blackColor, whiteColor, strength);

  gl_FragColor = vec4(mixedColor, 1.0);
}