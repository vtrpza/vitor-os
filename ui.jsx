/* global React */
// Vitor Pouza OS — icon set
const { createElement: h } = React;

function Icon({ name, ...props }) {
  const P = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round", viewBox: "0 0 24 24", ...props };
  const paths = ICONS[name] || ICONS.dot;
  return h("svg", { ...P }, paths.map((d, i) =>
    typeof d === "string"
      ? h("path", { key: i, d })
      : h(d.t, { key: i, ...d.a })
  ));
}

const C = (cx, cy, r) => ({ t: "circle", a: { cx, cy, r } });
const R = (x, y, w, hh, rx) => ({ t: "rect", a: { x, y, width: w, height: hh, rx } });
const L = (x1, y1, x2, y2) => ({ t: "line", a: { x1, y1, x2, y2 } });

const ICONS = {
  dot: [C(12, 12, 2)],
  // dock / apps
  about: ["M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z", "M5 20a7 7 0 0 1 14 0"],
  exp: ["M3 7h18v13H3z", "M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", "M3 12h18"],
  skills: ["M8 9 5 12l3 3", "M16 9l3 3-3 3", "M13 7l-2 10"],
  proj: ["M4 5h16v11H4z", "M2 20h20", "M9 8h6", "M9 11h4"],
  wins: ["M8 21h8", "M12 17v4", "M7 4h10v5a5 5 0 0 1-10 0z", "M7 5H4v2a3 3 0 0 0 3 3", "M17 5h3v2a3 3 0 0 1-3 3"],
  music: ["M9 18V6l10-2v12", C(6.5, 18, 2.5), C(16.5, 16, 2.5)],
  cv: ["M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z", "M14 3v5h5", "M9 13h6", "M9 17h4"],
  term: ["M4 5h16v14H4z", "m8 10 3 2-3 2", "M13 14h4"],
  mail: ["M3 6h18v12H3z", "m3 7 9 6 9-6"],
  // ui glyphs
  download: ["M12 3v12", "m7 11 5 4 5-4", "M5 21h14"],
  external: ["M14 5h5v5", "M19 5l-8 8", "M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4"],
  github: ["M9 19c-4 1.5-4-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.5 11.5 0 0 0-6 0C6.3 3.3 5.3 3.6 5.3 3.6a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 3.9 10c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"],
  linkedin: [R(3, 3, 18, 18, 2), "M8 10v7", "M8 7v0", "M12 17v-4a2 2 0 0 1 4 0v4", "M12 17v-7"],
  phone: ["M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"],
  pin: ["M12 21s7-5.5 7-11a7 7 0 0 0-14 0c0 5.5 7 11 7 11Z", C(12, 10, 2.5)],
  sun: [C(12, 12, 4), "M12 2v2", "M12 20v2", "M4 12H2", "M22 12h-2", "m5 5 1.5 1.5", "m17.5 17.5 1.5 1.5", "m5 19 1.5-1.5", "m17.5 6.5 1.5-1.5"],
  moon: ["M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"],
  play: [{ t: "path", a: { d: "M7 4v16l13-8z", fill: "currentColor", stroke: "none" } }],
  pause: [R(7, 4, 3.5, 16, 1), R(13.5, 4, 3.5, 16, 1)],
  next: ["m5 4 10 8-10 8z", "M19 4v16"],
  prev: ["m19 4-10 8 10 8z", "M5 4v16"],
  copy: [R(9, 9, 11, 11, 2), "M5 15V5a2 2 0 0 1 2-2h8"],
  arch: ["M3 9 12 4l9 5", "M5 9v10h14V9", "M9 19v-5h6v5"],
  design: [C(12, 12, 9), C(12, 12, 3), "M12 3v6", "M12 15v6", "M3 12h6", "M15 12h6"],
  ship: ["M4 13h16l-1.5 6H5.5z", "M12 4v9", "M8 7l4-3 4 3", "M3 13l9 3 9-3"],
  speed: ["M12 14 16 8", C(12, 14, 1), "M5 18a8 8 0 1 1 14 0", "M12 6v0"],
  data: [{ t: "ellipse", a: { cx: 12, cy: 6, rx: 7, ry: 3 } }, "M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6", "M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"],
  wifi: ["M5 12.5a10 10 0 0 1 14 0", "M8 15.5a6 6 0 0 1 8 0", C(12, 19, 0.6)],
  battery: [R(2, 8, 18, 9, 2.5), "M22 11v3", { t: "rect", a: { x: 3.5, y: 9.5, width: 11, height: 6, rx: 1, fill: "currentColor", stroke: "none" } }],
  search: [C(11, 11, 7), "m20 20-3.5-3.5"],
  apple: ["M16 13c0 3 2 4 2 4-.7 1.8-1.8 3-3 3-1 0-1.5-.6-2.8-.6s-1.9.6-2.8.6c-1.5 0-3.5-2.2-4.2-4.8C3.6 11.2 5.6 8 8 8c1.2 0 2 .7 3 .7S13 8 14.2 8c1 0 2.2.4 3 1.4-2.5 1.4-2.2 3.6-1.2 3.6", "M13 5.5c.7-1 .6-2.2.5-2.5-1 .1-2 .8-2.5 1.5-.5.6-.7 1.6-.6 2.4 1 .1 1.9-.5 2.6-1.4"],
};

window.Icon = Icon;
window.ICONS = ICONS;
