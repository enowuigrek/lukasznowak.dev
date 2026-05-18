'use client';

import { useEffect, useRef } from 'react';

const VERT = `
attribute vec2 a_pos;
void main(){ gl_Position = vec4(a_pos, 0.0, 1.0); }
`;

// Grayscale FBM noise — bardzo subtelne, zachowuje palety szarości serwisu
const FRAG = `
precision highp float;
uniform vec2 u_res;
uniform vec2 u_mouse;
uniform float u_time;

float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }

float noise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  float a = hash(i), b = hash(i+vec2(1,0));
  float c = hash(i+vec2(0,1)), d = hash(i+vec2(1,1));
  vec2 u = f*f*(3.0-2.0*f);
  return mix(mix(a,b,u.x), mix(c,d,u.x), u.y);
}

float fbm(vec2 p){
  float v = 0.0, a = 0.5;
  for(int i=0;i<4;i++){ v += a*noise(p); p *= 2.1; a *= 0.5; }
  return v;
}

void main(){
  vec2 uv = (gl_FragCoord.xy - 0.5*u_res) / u_res.y;
  vec2 m  = (u_mouse      - 0.5*u_res) / u_res.y;

  // delikatne zniekształcenie od kursora
  vec2 d = uv - m;
  float dist = length(d);
  vec2 warp = -d * exp(-dist*2.2) * 0.18;
  vec2 p = uv * 1.2 + warp;

  float t  = u_time * 0.04;
  float n  = fbm(p + vec2(t, -t * 0.6));
  float n2 = fbm(p * 1.6 + vec2(-t * 0.4, t * 0.8) + n * 0.5);

  // Zakres: od #0a0a0a (0.039) do ~#2e2e2e (0.18) — subtelne ale widoczne
  float base   = 0.039;          // --bg
  float bright = n2 * 0.15;      // max ~0.15 ponad base
  float lum = base + bright;

  // blask przy kursorze
  lum += 0.05 * exp(-dist * 4.5);

  // winieta — ciemniejsze krawędzie
  lum *= 1.0 - 0.3 * length(uv);

  gl_FragColor = vec4(vec3(lum), 1.0);
}
`;

function compile(gl, type, src) {
  const sh = gl.createShader(type);
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(sh));
    return null;
  }
  return sh;
}

export default function ShaderBackground() {
  const ref = useRef(null);
  const state = useRef({ mouse: [0.5, 0.5], target: [0.5, 0.5], t0: 0 });

  useEffect(() => {
    const canvas = ref.current;
    const gl = canvas.getContext('webgl', { antialias: false, premultipliedAlpha: false });
    if (!gl) return;

    const vs = compile(gl, gl.VERTEX_SHADER, VERT);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;

    const prog = gl.createProgram();
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(prog));
      return;
    }
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(prog, 'a_pos');
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uRes   = gl.getUniformLocation(prog, 'u_res');
    const uMouse = gl.getUniformLocation(prog, 'u_mouse');
    const uTime  = gl.getUniformLocation(prog, 'u_time');

    state.current.t0 = performance.now() / 1000;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const w = Math.floor(canvas.clientWidth  * dpr);
      const h = Math.floor(canvas.clientHeight * dpr);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    };

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      state.current.target = [
        (e.clientX - r.left)  / r.width,
        1 - (e.clientY - r.top) / r.height,
      ];
    };
    const onLeave = () => { state.current.target = [0.5, 0.5]; };

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerleave', onLeave, { passive: true });

    let raf;
    const render = () => {
      resize();
      const { mouse, target, t0 } = state.current;
      mouse[0] += (target[0] - mouse[0]) * 0.06;
      mouse[1] += (target[1] - mouse[1]) * 0.06;

      const W = canvas.width, H = canvas.height;
      gl.viewport(0, 0, W, H);
      gl.uniform2f(uRes,   W, H);
      gl.uniform2f(uMouse, mouse[0] * W, mouse[1] * H);
      gl.uniform1f(uTime,  performance.now() / 1000 - t0);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      raf = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        display: 'block',
      }}
    />
  );
}
