/* global React, ReactDOM, Icon */
// Vitor Pouza OS — núcleo do sistema
const { createElement: el, useState: uS, useRef: uR, useEffect: uE, useCallback } = React;

const APPS = [
  { id: "about",   title: "Sobre mim",   ic: "about",  grad: "ic-grad-about",  w: 560, h: 540, comp: () => window.AppAbout },
  { id: "exp",     title: "Experiência", ic: "exp",    grad: "ic-grad-exp",    w: 560, h: 600, comp: () => window.AppExperience },
  { id: "skills",  title: "Skills",      ic: "skills", grad: "ic-grad-skills", w: 580, h: 560, comp: () => window.AppSkills },
  { id: "proj",    title: "Projetos",    ic: "proj",   grad: "ic-grad-proj",   w: 640, h: 600, comp: () => window.AppProjects },
  { id: "wins",    title: "Conquistas",  ic: "wins",   grad: "ic-grad-wins",   w: 600, h: 600, comp: () => window.AppWins },
  { id: "sep1",    sep: true },
  { id: "music",   title: "Música",      ic: "music",  grad: "ic-grad-music",  w: 360, h: 560, comp: () => window.AppMusic },
  { id: "term",    title: "Terminal",    ic: "term",   grad: "ic-grad-term",   w: 600, h: 420, comp: () => window.AppTerminal },
  { id: "sep2",    sep: true },
  { id: "contact", title: "Contato",     ic: "mail",   grad: "ic-grad-mail",   w: 480, h: 540, comp: () => window.AppContact },
  { id: "cv",      title: "Currículo",   ic: "cv",     grad: "ic-grad-cv",     w: 400, h: 480, comp: () => window.AppCV },
];
const APP_MAP = Object.fromEntries(APPS.filter((a) => !a.sep).map((a) => [a.id, a]));

/* ---------------- TWEAKS: defaults + helpers ---------------- */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "light",
  "accent": "#d97757",
  "wallpaper": "sunset",
  "glassBlur": 30,
  "winRadius": 14,
  "dockMag": true
}/*EDITMODE-END*/;

const FAVS = ["about", "proj", "contact", "term"];

function useIsMobile() {
  const [m, setM] = uS(typeof window !== "undefined" && window.innerWidth <= 700);
  uE(() => {
    const on = () => setM(window.innerWidth <= 700);
    window.addEventListener("resize", on);
    return () => window.removeEventListener("resize", on);
  }, []);
  return m;
}

const ACCENTS = ["#d97757", "#2a6fdb", "#1f8a5b", "#7c5cff", "#e84393"];
const WALLS = [
  { value: "sunset", label: "Pôr do sol" },
  { value: "ocean", label: "Oceano" },
  { value: "forest", label: "Floresta" },
  { value: "graphite", label: "Grafite" },
];

function hexToRgb(hex) {
  const h = String(hex).replace("#", "");
  const x = h.length === 3 ? h.replace(/./g, (c) => c + c) : h;
  const n = parseInt(x, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
function rgba(hex, a) { const [r, g, b] = hexToRgb(hex); return `rgba(${r}, ${g}, ${b}, ${a})`; }
function darken(hex, amt) {
  const c = hexToRgb(hex).map((v) => Math.round(v * (1 - amt)));
  return "#" + c.map((v) => v.toString(16).padStart(2, "0")).join("");
}

/* ---------------- CUSTOM LOGO MARK ---------------- */
function LogoMark() {
  return el("span", { className: "mb-mark", title: "Vitor Pouza OS" },
    el("svg", { viewBox: "0 0 24 24", fill: "none" },
      el("path", { d: "M4.5 6.5 L12 18.5 L19.5 6.5", stroke: "#fff", strokeWidth: 2.7, strokeLinecap: "round", strokeLinejoin: "round" })
    )
  );
}

/* ---------------- BOOT ---------------- */
function Boot({ onDone }) {
  const [pct, setPct] = uS(0);
  const [status, setStatus] = uS("iniciando kernel...");
  const [fade, setFade] = uS(false);
  uE(() => {
    const steps = [
      [18, "montando sistema de arquivos..."],
      [40, "carregando React · Next.js · TypeScript..."],
      [62, "iniciando design system..."],
      [82, "conectando à produção..."],
      [100, "pronto."],
    ];
    let i = 0;
    const tick = () => {
      if (i >= steps.length) { setFade(true); setTimeout(onDone, 650); return; }
      const [p, s] = steps[i]; setPct(p); setStatus(s); i++;
      setTimeout(tick, 460);
    };
    const t = setTimeout(tick, 420);
    return () => clearTimeout(t);
  }, []);
  return el("div", { className: "boot" + (fade ? " fade" : ""), onClick: () => { setFade(true); setTimeout(onDone, 400); } },
    el("div", { className: "boot-logo" }, "VP"),
    el("div", { className: "boot-name" }, "Vitor Pouza OS"),
    el("div", { className: "boot-bar" }, el("i", { style: { width: pct + "%", transition: "width 0.4s ease" } })),
    el("div", { className: "boot-status" }, status),
    el("div", { className: "boot-skip" }, "clique para pular")
  );
}

/* ---------------- WINDOW ---------------- */
function Win({ w, onClose, onFocus, onMin, onMax, onDrag, setTheme, toggleTheme, onToast, openApp }) {
  const app = APP_MAP[w.appId];
  const Comp = app.comp();
  const ref = uR(null);
  const stateRef = uR(null);

  const startDrag = (ev) => {
    if (w.maximized) return;
    onFocus();
    const sx = ev.clientX, sy = ev.clientY, ox = w.x, oy = w.y;
    const move = (m2) => {
      const nx = ox + (m2.clientX - sx);
      const ny = Math.max(32, oy + (m2.clientY - sy));
      onDrag(w.id, nx, ny);
    };
    const up = () => { window.removeEventListener("pointermove", move); window.removeEventListener("pointerup", up); };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };

  const style = w.maximized
    ? { left: 8, top: 38, width: "calc(100vw - 16px)", height: "calc(100vh - 130px)", zIndex: w.z }
    : { left: w.x, top: w.y, width: w.w, height: w.h, zIndex: w.z };

  return el("div", {
      className: "win" + (w.closing ? " closing" : "") + (w.minimizing ? " minimizing" : ""),
      style, ref, onMouseDown: onFocus
    },
    el("div", { className: "titlebar", onPointerDown: startDrag, onDoubleClick: onMax },
      el("div", { className: "traffic", onPointerDown: (e) => e.stopPropagation() },
        el("button", { className: "tl red", onClick: onClose, title: "Fechar" }, el("span", null, "×")),
        el("button", { className: "tl yellow", onClick: onMin, title: "Minimizar" }, el("span", null, "–")),
        el("button", { className: "tl green", onClick: onMax, title: "Maximizar" }, el("span", null, "+"))
      ),
      el("div", { className: "tb-title" }, app.title)
    ),
    el("div", { className: "win-body" },
      el(Comp, { setTheme, toggleTheme, onToast, open: openApp })
    )
  );
}

/* ---------------- DOCK ---------------- */
function Dock({ running, onOpen }) {
  return el("div", { className: "dock-wrap" },
    el("div", { className: "dock" },
      APPS.map((a) =>
        a.sep
          ? el("div", { className: "dock-sep", key: a.id })
          : el("button", { className: "dock-item" + (running.has(a.id) ? " running" : ""), key: a.id, onClick: () => onOpen(a.id) },
              el("div", { className: "dock-tip" }, a.title),
              el("div", { className: "dock-icon " + a.grad }, el(Icon, { name: a.ic })),
              el("div", { className: "dock-dot" })
            )
      )
    )
  );
}

/* ---------------- MENU BAR ---------------- */
function MenuBar({ activeTitle, theme, onToggleTheme }) {
  const [clock, setClock] = uS("");
  uE(() => {
    const upd = () => {
      const d = new Date();
      const dias = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"];
      const t = d.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
      setClock(`${dias[d.getDay()]} ${d.getDate()}/${d.getMonth() + 1}  ${t}`);
    };
    upd(); const i = setInterval(upd, 10000); return () => clearInterval(i);
  }, []);
  return el("div", { className: "menubar" },
    el("span", { className: "mb-logo" }, el(LogoMark)),
    el("span", { className: "mb-app" }, activeTitle || "Finder"),
    el("div", { className: "mb-right" },
      el("button", { className: "mb-icon-btn", onClick: onToggleTheme, title: "Alternar tema" },
        el(Icon, { name: theme === "dark" ? "sun" : "moon", width: 15, height: 15 })),
      el("span", { className: "mb-icon-btn" }, el(Icon, { name: "wifi", width: 15, height: 15 })),
      el("span", { className: "mb-icon-btn" }, el(Icon, { name: "battery", width: 17, height: 17 })),
      el("span", { className: "mb-clock" }, clock)
    )
  );
}

/* ---------------- DESKTOP ICONS ---------------- */
function DeskIcons({ onOpen }) {
  return el("div", { className: "desk-icons" },
    el("button", { className: "desk-icon", onDoubleClick: () => onOpen("cv"), onClick: () => onOpen("cv") },
      el("div", { className: "di-glyph", style: { background: "linear-gradient(160deg,#fff,#e7e2dd)" } },
        el(Icon, { name: "cv", width: 26, height: 26, stroke: "#c25e3f" })),
      el("div", { className: "di-label" }, "CV.pdf")
    ),
    el("button", { className: "desk-icon", onDoubleClick: () => onOpen("term"), onClick: () => onOpen("term") },
      el("div", { className: "di-glyph ic-grad-term" }, el(Icon, { name: "term", width: 26, height: 26 })),
      el("div", { className: "di-label" }, "Terminal")
    )
  );
}

/* ---------------- MOBILE: status bar ---------------- */
function MobileStatus({ theme, onToggleTheme }) {
  const [clock, setClock] = uS("");
  uE(() => {
    const upd = () => setClock(new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }));
    upd(); const i = setInterval(upd, 10000); return () => clearInterval(i);
  }, []);
  return el("div", { className: "m-status" },
    el("span", { className: "m-clock" }, clock),
    el("div", { className: "m-status-right" },
      onToggleTheme && el("button", { className: "m-sb-btn", onClick: onToggleTheme, title: "Alternar tema" },
        el(Icon, { name: theme === "dark" ? "sun" : "moon", width: 15, height: 15 })),
      el(Icon, { name: "wifi", width: 16, height: 16 }),
      el(Icon, { name: "battery", width: 21, height: 21 })
    )
  );
}

/* ---------------- MOBILE: springboard / home ---------------- */
function MobileHome({ onOpen, theme, onToggleTheme }) {
  const id = window.VP_DATA.identidade;
  return el("div", { className: "m-home" },
    el(MobileStatus, { theme, onToggleTheme }),
    el("div", { className: "m-hero" },
      el("div", { className: "m-avatar" }, "VP"),
      el("div", { className: "m-hero-name" }, id.nome),
      el("div", { className: "m-hero-role" }, id.cargo),
      el("div", { className: "m-hero-status" }, el("i", null), id.disponibilidade)
    ),
    el("div", { className: "m-grid" },
      APPS.filter((a) => !a.sep).map((a) =>
        el("button", { className: "m-app-icon", key: a.id, onClick: () => onOpen(a.id) },
          el("div", { className: "m-icon " + a.grad }, el(Icon, { name: a.ic, width: 28, height: 28 })),
          el("div", { className: "m-icon-label" }, a.title)
        )
      )
    ),
    el("div", { className: "m-dock-row" },
      el("div", { className: "m-dock" },
        FAVS.map((fid) => {
          const a = APP_MAP[fid];
          return el("button", { className: "m-dock-icon " + a.grad, key: fid, onClick: () => onOpen(fid), title: a.title },
            el(Icon, { name: a.ic, width: 26, height: 26 }));
        })
      )
    ),
    el("div", { className: "m-home-indicator" })
  );
}

/* ---------------- MOBILE: fullscreen app ---------------- */
function MobileApp({ appId, onClose, closing, setTheme, toggleTheme, onToast, openApp }) {
  const app = APP_MAP[appId];
  const Comp = app.comp();
  return el("div", { className: "m-app" + (closing ? " closing" : "") },
    el("div", { className: "m-app-bar" },
      el("button", { className: "m-back", onClick: onClose },
        el("span", { className: "m-chev" }, "‹"), "Início"),
      el("div", { className: "m-app-title" },
        el("span", { className: "m-title-dot " + app.grad }), app.title),
      el("div", { className: "m-bar-sp" })
    ),
    el("div", { className: "m-app-body" },
      el(Comp, { setTheme, toggleTheme, onToast, open: openApp })
    )
  );
}

/* ---------------- OS ROOT ---------------- */
function OS() {
  const [booted, setBooted] = uS(sessionStorage.getItem("vp_booted") === "1");
  const [tw, setTweak] = window.useTweaks(TWEAK_DEFAULTS);
  const theme = tw.theme;
  const isMobile = useIsMobile();
  const [wins, setWins] = uS([]);
  const [mApp, setMApp] = uS(null);
  const [mClosing, setMClosing] = uS(false);
  const [welcome, setWelcome] = uS(false);
  const [toast, setToast] = uS(null);
  const zc = uR(20);

  // aplica os tweaks ao documento (CSS vars + atributos de tema/wallpaper/dock)
  uE(() => {
    const r = document.documentElement;
    r.setAttribute("data-theme", tw.theme);
    r.setAttribute("data-wall", tw.wallpaper);
    r.setAttribute("data-dock-mag", tw.dockMag ? "on" : "off");
    r.style.setProperty("--accent", tw.accent);
    r.style.setProperty("--accent-2", darken(tw.accent, 0.16));
    r.style.setProperty("--accent-soft", rgba(tw.accent, 0.14));
    r.style.setProperty("--accent-ring", rgba(tw.accent, 0.45));
    r.style.setProperty("--wall-glow", rgba(tw.accent, tw.theme === "dark" ? 0.3 : 0.28));
    r.style.setProperty("--glass-blur", tw.glassBlur + "px");
    r.style.setProperty("--radius-win", tw.winRadius + "px");
  }, [tw.theme, tw.accent, tw.wallpaper, tw.glassBlur, tw.winRadius, tw.dockMag]);

  const setTheme = (t) => setTweak("theme", t === "dark" ? "dark" : "light");
  const toggleTheme = () => setTweak("theme", tw.theme === "dark" ? "light" : "dark");

  // se a sessão já passou pelo boot, abre "Sobre mim" para não deixar o desktop vazio (somente desktop)
  uE(() => { if (booted && !isMobile) { const t = setTimeout(() => openApp("about"), 350); return () => clearTimeout(t); } }, []);

  const showToast = (txt) => { setToast(txt); setTimeout(() => setToast(null), 1600); };

  const finishBoot = () => {
    setBooted(true); sessionStorage.setItem("vp_booted", "1");
    setWelcome(true);
    if (!isMobile) setTimeout(() => openApp("about"), 600);
    setTimeout(() => setWelcome(false), 4200);
  };

  const focusWin = (id) => setWins((ws) => { const z = ++zc.current; return ws.map((w) => (w.id === id ? { ...w, z, minimized: false } : w)); });

  const openApp = useCallback((appId) => {
    setWins((ws) => {
      const existing = ws.find((w) => w.appId === appId);
      if (existing) { const z = ++zc.current; return ws.map((w) => (w.appId === appId ? { ...w, z, minimized: false, closing: false } : w)); }
      const app = APP_MAP[appId];
      const count = ws.length;
      const vw = window.innerWidth, vh = window.innerHeight;
      const cx = Math.max(20, (vw - app.w) / 2 + ((count % 5) - 2) * 34);
      const cy = Math.max(44, (vh - app.h) / 2 + ((count % 5) - 2) * 28);
      const z = ++zc.current;
      return [...ws, { id: appId + "-" + Date.now(), appId, x: cx, y: cy, w: app.w, h: app.h, z, minimized: false, maximized: false }];
    });
  }, []);

  // mobile: um app por vez, em tela cheia
  const openMobile = useCallback((appId) => {
    if (!APP_MAP[appId]) return;
    setMClosing(false); setMApp(appId);
  }, []);
  const closeMobile = () => {
    setMClosing(true);
    setTimeout(() => { setMApp(null); setMClosing(false); }, 300);
  };
  const openHandler = isMobile ? openMobile : openApp;

  const closeWin = (id) => {
    setWins((ws) => ws.map((w) => (w.id === id ? { ...w, closing: true } : w)));
    setTimeout(() => setWins((ws) => ws.filter((w) => w.id !== id)), 180);
  };
  const minWin = (id) => {
    setWins((ws) => ws.map((w) => (w.id === id ? { ...w, minimizing: true } : w)));
    setTimeout(() => setWins((ws) => ws.map((w) => (w.id === id ? { ...w, minimized: true, minimizing: false } : w))), 320);
  };
  const maxWin = (id) => setWins((ws) => ws.map((w) => (w.id === id ? { ...w, maximized: !w.maximized } : w)));
  const dragWin = (id, x, y) => setWins((ws) => ws.map((w) => (w.id === id ? { ...w, x, y } : w)));

  const visible = wins.filter((w) => !w.minimized);
  const running = new Set(wins.map((w) => w.appId));
  const top = visible.reduce((a, b) => (a && a.z > b.z ? a : b), null);
  const activeTitle = top ? APP_MAP[top.appId].title : "Finder";

  return el(React.Fragment, null,
    !booted && el(Boot, { onDone: finishBoot }),
    el("div", { className: "os" + (isMobile ? " mobile" : "") },
      isMobile
        ? el(React.Fragment, null,
            el(MobileHome, { onOpen: openMobile, theme, onToggleTheme: toggleTheme }),
            mApp && el(MobileApp, {
              key: mApp, appId: mApp, closing: mClosing, onClose: closeMobile,
              setTheme, toggleTheme, onToast: showToast, openApp: openMobile
            }),
            welcome && el("div", { className: "welcome" + (welcome ? "" : " out") },
              el("span", { className: "w-emoji" }, "👋"),
              el("div", { className: "w-txt" }, el("b", null, "Olá, eu sou o Vitor."), " ", el("span", null, "Toque em um app para explorar."))
            ),
            toast && el("div", { className: "copied-toast" }, toast)
          )
        : el(React.Fragment, null,
            el(MenuBar, { activeTitle, theme, onToggleTheme: toggleTheme }),
            el(DeskIcons, { onOpen: openApp }),
            welcome && el("div", { className: "welcome" + (welcome ? "" : " out") },
              el("span", { className: "w-emoji" }, "👋"),
              el("div", { className: "w-txt" }, el("b", null, "Olá, eu sou o Vitor."), " ", el("span", null, "Explore meu currículo pelo dock abaixo."))
            ),
            wins.map((w) => !w.minimized && el(Win, {
              key: w.id, w,
              onClose: () => closeWin(w.id), onMin: () => minWin(w.id), onMax: () => maxWin(w.id),
              onFocus: () => focusWin(w.id), onDrag: dragWin,
              setTheme, toggleTheme, onToast: showToast, openApp
            })),
            toast && el("div", { className: "copied-toast" }, toast),
            el(Dock, { running, onOpen: openApp })
          ),
      el(window.TweaksPanel, { title: "Tweaks" },
        el(window.TweakSection, { label: "Aparência" }),
        el(window.TweakColor, { label: "Cor de destaque", value: tw.accent, options: ACCENTS, onChange: (v) => setTweak("accent", v) }),
        el(window.TweakRadio, { label: "Tema", value: tw.theme, options: [{ value: "light", label: "Claro" }, { value: "dark", label: "Escuro" }], onChange: (v) => setTweak("theme", v) }),
        el(window.TweakSelect, { label: "Papel de parede", value: tw.wallpaper, options: WALLS, onChange: (v) => setTweak("wallpaper", v) }),
        el(window.TweakSection, { label: "Janelas & dock" }),
        el(window.TweakSlider, { label: "Desfoque do vidro", value: tw.glassBlur, min: 0, max: 50, step: 1, unit: "px", onChange: (v) => setTweak("glassBlur", v) }),
        el(window.TweakSlider, { label: "Cantos da janela", value: tw.winRadius, min: 0, max: 24, step: 1, unit: "px", onChange: (v) => setTweak("winRadius", v) }),
        el(window.TweakToggle, { label: "Ampliação do dock", value: tw.dockMag, onChange: (v) => setTweak("dockMag", v) }),
        el(window.TweakSection, { label: "Sistema" }),
        el(window.TweakButton, { label: "Reiniciar com boot", onClick: () => { sessionStorage.removeItem("vp_booted"); location.reload(); } })
      )
    )
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(el(OS));
