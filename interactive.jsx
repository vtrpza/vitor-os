/* global React, Icon */
// Vitor Pouza OS — apps interativos: Música + Terminal
const { createElement: m, useState: useS, useRef, useEffect: useE } = React;

/* =================== TOCADOR DE MÚSICA =================== */
function AppMusic({ lang = "pt" }) {
  const DD = lang === "en" ? window.VP_DATA_EN : window.VP_DATA;
  const [idx, setIdx] = useS(0);
  const [playing, setPlaying] = useS(false);
  const [prog, setProg] = useS(0);
  const audioRef = useRef(null);
  const track = DD.playlist[idx];

  // gentle ambient pad via WebAudio (easter egg)
  const ensureAudio = () => {
    if (audioRef.current) return audioRef.current;
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return null;
    const ctx = new Ctx();
    const master = ctx.createGain();
    master.gain.value = 0.0;
    master.connect(ctx.destination);
    const freqs = [196, 246.94, 293.66, 392]; // Gmaj-ish pad
    const oscs = freqs.map((f, i) => {
      const o = ctx.createOscillator();
      o.type = i % 2 ? "sine" : "triangle";
      o.frequency.value = f;
      const g = ctx.createGain();
      g.gain.value = 0.16 / freqs.length;
      const lfo = ctx.createOscillator();
      lfo.frequency.value = 0.1 + i * 0.05;
      const lfoGain = ctx.createGain();
      lfoGain.gain.value = 2;
      lfo.connect(lfoGain); lfoGain.connect(o.frequency);
      o.connect(g); g.connect(master);
      o.start(); lfo.start();
      return o;
    });
    audioRef.current = { ctx, master };
    return audioRef.current;
  };

  const toggle = () => {
    const a = ensureAudio();
    const targetGain = playing ? 0.0 : 0.5;
    const ramp = () => {
      const t = a.ctx.currentTime;
      a.master.gain.cancelScheduledValues(t);
      a.master.gain.setValueAtTime(a.master.gain.value, t);
      a.master.gain.linearRampToValueAtTime(targetGain, t + 0.4);
    };
    if (a) {
      if (a.ctx.state === "suspended") a.ctx.resume().then(ramp);
      else ramp();
    }
    setPlaying((p) => !p);
  };

  useE(() => {
    if (!playing) return;
    const t = setInterval(() => setProg((p) => (p >= 100 ? 0 : p + 0.4)), 200);
    return () => clearInterval(t);
  }, [playing]);

  useE(() => () => { if (audioRef.current) try { audioRef.current.ctx.close(); } catch (x) {} }, []);

  const pick = (i) => { setIdx(i); setProg(0); };
  const fmt = (pct) => {
    const total = 222; const s = Math.floor((pct / 100) * total);
    return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");
  };

  return m("div", { className: "app music" },
    m("div", { className: "music-top" },
      m("div", { className: "album" + (playing ? " spin" : "") },
        m("div", { className: "album-disc" })
      ),
      m("div", { className: "now-meta" },
        m("div", { style: { display: "flex", justifyContent: "center", marginBottom: 6 } }, m("span", { className: "easter-tag" }, "easter egg")),
        m("div", { className: "nm-track" }, track.faixa),
        m("div", { className: "nm-artist" }, track.artista)
      ),
      m("div", { className: "visualizer" + (playing ? " on" : "") },
        Array.from({ length: 13 }).map((_, i) => m("i", { key: i }))
      )
    ),
    m("div", { className: "progress-wrap" },
      m("div", { className: "progress-bar" }, m("i", { style: { width: prog + "%" } })),
      m("div", { className: "progress-time" }, m("span", null, fmt(prog)), m("span", null, track.dur))
    ),
    m("div", { className: "player-ctrls" },
      m("button", { onClick: () => pick((idx - 1 + DD.playlist.length) % DD.playlist.length) }, m(Icon, { name: "prev" })),
      m("button", { className: "pc-play", onClick: toggle }, m(Icon, { name: playing ? "pause" : "play" })),
      m("button", { onClick: () => pick((idx + 1) % DD.playlist.length) }, m(Icon, { name: "next" }))
    ),
    m("div", { className: "playlist" },
      DD.playlist.map((t, i) =>
        m("div", { className: "pl-row" + (i === idx ? " active" : ""), key: i, onClick: () => pick(i) },
          m("div", { className: "pl-i" }, i === idx && playing ? "♪" : i + 1),
          m("div", null,
            m("div", { className: "pl-name" }, t.faixa),
            m("div", { className: "pl-artist" }, t.artista)
          ),
          m("div", { className: "pl-dur" }, t.dur)
        )
      )
    )
  );
}

/* =================== TERMINAL =================== */
const ASCII = [
  " _   _____ ",
  "| | / / _ \\",
  "| |/ / ___/   vitor@pouza-os",
  "|___/_/       ~~~~~~~~~~~~~~~",
].join("\n");

const TERM_MSG = {
  pt: {
    welcome: "Bem-vindo ao <span class='hl'>Vitor Pouza OS</span>. Digite <span class='hl'>help</span> para ver os comandos.",
    help: [
      "Comandos disponíveis:",
      "  <span class='hl'>sobre</span>        perfil e resumo",
      "  <span class='hl'>experiencia</span>  histórico profissional",
      "  <span class='hl'>skills</span>       stack técnica",
      "  <span class='hl'>projetos</span>     produtos no ar",
      "  <span class='hl'>contato</span>      como me encontrar",
      "  <span class='hl'>cv</span>           baixar currículo",
      "  <span class='hl'>open</span> &lt;app&gt;   abrir janela (ex: open projetos)",
      "  <span class='hl'>theme</span> dark|light   trocar tema",
      "  <span class='hl'>neofetch</span>     resumo do sistema",
      "  <span class='hl'>whoami</span> · <span class='hl'>ls</span> · <span class='hl'>clear</span> · <span class='hl'>sudo</span>",
    ].join("\n"),
    ls: "sobre  experiencia  skills  projetos  conquistas  contato  cv  musica",
    cvOpen: "<span class='ok'>✓</span> abrindo currículo em PDF...",
    openOk: (app) => "<span class='ok'>✓</span> abrindo <span class='hl'>" + app + "</span>...",
    openErr: "app não encontrado. tente: open projetos",
    themeSet: (t) => "<span class='ok'>✓</span> tema → " + t,
    themeToggled: "<span class='ok'>✓</span> tema alternado",
    uptime: "8 anos de carreira",
    status: "<span class='ok'>disponível — início imediato</span>",
    sudo: "Permissão negada: o Vitor já tem autonomia total de execução. 😎",
    exit: "não dá pra sair de uma carreira de 8 anos. tente 'help'.",
    notFound: (c) => "comando não encontrado: <span class='hl'>" + c + "</span>. digite <span class='hl'>help</span>.",
  },
  en: {
    welcome: "Welcome to <span class='hl'>Vitor Pouza OS</span>. Type <span class='hl'>help</span> to see available commands.",
    help: [
      "Available commands:",
      "  <span class='hl'>about</span>        profile and summary",
      "  <span class='hl'>experience</span>   professional history",
      "  <span class='hl'>skills</span>       tech stack",
      "  <span class='hl'>projects</span>     live products",
      "  <span class='hl'>contact</span>      how to find me",
      "  <span class='hl'>cv</span>           download resume",
      "  <span class='hl'>open</span> &lt;app&gt;   open window (e.g.: open projects)",
      "  <span class='hl'>theme</span> dark|light   switch theme",
      "  <span class='hl'>neofetch</span>     system summary",
      "  <span class='hl'>whoami</span> · <span class='hl'>ls</span> · <span class='hl'>clear</span> · <span class='hl'>sudo</span>",
    ].join("\n"),
    ls: "about  experience  skills  projects  achievements  contact  cv  music",
    cvOpen: "<span class='ok'>✓</span> opening resume PDF...",
    openOk: (app) => "<span class='ok'>✓</span> opening <span class='hl'>" + app + "</span>...",
    openErr: "app not found. try: open projects",
    themeSet: (t) => "<span class='ok'>✓</span> theme → " + t,
    themeToggled: "<span class='ok'>✓</span> theme toggled",
    uptime: "8 years of career",
    status: "<span class='ok'>available — immediate start</span>",
    sudo: "Permission denied: Vitor already has full execution autonomy. 😎",
    exit: "can't exit an 8-year career. try 'help'.",
    notFound: (c) => "command not found: <span class='hl'>" + c + "</span>. type <span class='hl'>help</span>.",
  }
};

function termRespond(raw, ctx) {
  const cmd = raw.trim();
  const [c, ...args] = cmd.split(/\s+/);
  const lang = ctx.lang || "pt";
  const D = lang === "en" ? window.VP_DATA_EN : window.VP_DATA;
  const id = D.identidade;
  const lc = (c || "").toLowerCase();
  const M = TERM_MSG[lang];
  const out = (html, cls) => ({ html, cls: cls || "term-out" });
  switch (lc) {
    case "": return null;
    case "help": case "ajuda": case "?":
      return out(M.help);
    case "sobre": case "about":
      return out(`<span class='hl'>${id.nome}</span> — ${id.cargo}\n${D.resumoCurto}`);
    case "whoami": return out("vitor — " + id.cargo + " · " + id.modelo);
    case "experiencia": case "experience": case "exp":
      return out(D.experiencia.map((x) => `<span class='hl'>${x.periodo}</span>  ${x.cargo} @ ${x.empresa}`).join("\n"));
    case "skills": case "stack":
      return out(D.skills.map((g) => `<span class='hl'>${g.grupo}:</span> ${g.itens.join(", ")}`).join("\n"));
    case "projetos": case "projects":
      return out(D.projetos.map((p) => `<span class='hl'>${p.nome}</span> — ${p.tagline}\n  <a href='${p.url}' target='_blank'>${p.url}</a>`).join("\n"));
    case "contato": case "contact":
      return out(`email:    <a href='mailto:${id.email}'>${id.email}</a>\ntelefone: ${id.telefone}\ngithub:   <a href='${id.githubUrl}' target='_blank'>${id.github}</a>\nlinkedin: <a href='${id.linkedinUrl}' target='_blank'>${id.linkedin}</a>`);
    case "cv": case "curriculo": case "resume":
      ctx.open && ctx.open("cv");
      return out(M.cvOpen);
    case "ls":
      return out(M.ls);
    case "open": case "abrir": {
      const map = { sobre: "about", about: "about", experiencia: "exp", experience: "exp", exp: "exp", skills: "skills", projetos: "proj", projects: "proj", conquistas: "wins", achievements: "wins", contato: "contact", contact: "contact", cv: "cv", musica: "music", music: "music", terminal: "term" };
      const target = map[(args[0] || "").toLowerCase()];
      if (target) { ctx.open && ctx.open(target); return out(M.openOk(args[0])); }
      return out(M.openErr);
    }
    case "theme": case "tema": {
      const t = (args[0] || "").toLowerCase();
      if (t === "dark" || t === "light") { ctx.setTheme && ctx.setTheme(t); return out(M.themeSet(t)); }
      ctx.toggleTheme && ctx.toggleTheme(); return out(M.themeToggled);
    }
    case "neofetch":
      return out(
        `<span class='ascii'>${ASCII}</span>\n\n` +
        `<span class='hl'>OS</span>        Vitor Pouza OS 1.0\n` +
        `<span class='hl'>Host</span>      ${id.cargo}\n` +
        `<span class='hl'>Uptime</span>    ${M.uptime}\n` +
        `<span class='hl'>Shell</span>     React · Next.js · TypeScript\n` +
        `<span class='hl'>Stack</span>     Node.js · Python · AWS\n` +
        `<span class='hl'>Local</span>     ${id.local} · ${id.modelo}\n` +
        `<span class='hl'>Status</span>    ${M.status}`
      );
    case "sudo":
      return out(M.sudo);
    case "clear": case "cls": return { clear: true };
    case "exit": case "quit": return out(M.exit);
    default:
      return out(M.notFound(c));
  }
}

function AppTerminal(props) {
  const lang = props.lang || "pt";
  const boot = [
    { html: "<span class='ascii'>" + ASCII + "</span>", cls: "term-out" },
    { html: TERM_MSG[lang].welcome, cls: "term-out" },
  ];
  const [lines, setLines] = useS(boot);
  const [val, setVal] = useS("");
  const [hist, setHist] = useS([]);
  const [hi, setHi] = useS(-1);
  const bodyRef = useRef(null);
  const inRef = useRef(null);

  useE(() => { if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight; }, [lines]);
  useE(() => { const t = setTimeout(() => inRef.current && inRef.current.focus(), 200); return () => clearTimeout(t); }, []);

  const submit = () => {
    const cmd = val;
    const promptLine = { prompt: true, html: cmd };
    const res = termRespond(cmd, props);
    if (res && res.clear) { setLines([]); setVal(""); return; }
    const next = [...lines, promptLine];
    if (res) next.push(res);
    setLines(next);
    if (cmd.trim()) setHist((h) => [...h, cmd]);
    setHi(-1);
    setVal("");
  };

  const onKey = (ev) => {
    if (ev.key === "Enter") submit();
    else if (ev.key === "ArrowUp") {
      ev.preventDefault();
      const ni = hi < 0 ? hist.length - 1 : Math.max(0, hi - 1);
      if (hist[ni] !== undefined) { setHi(ni); setVal(hist[ni]); }
    } else if (ev.key === "ArrowDown") {
      ev.preventDefault();
      const ni = hi + 1;
      if (ni >= hist.length) { setHi(-1); setVal(""); } else { setHi(ni); setVal(hist[ni]); }
    }
  };

  return m("div", { className: "terminal", onClick: () => inRef.current && inRef.current.focus() },
    m("div", { className: "term-body", ref: bodyRef },
      lines.map((l, i) =>
        l.prompt
          ? m("div", { className: "term-line", key: i },
              m("span", { className: "prompt" }, "vitor@pouza-os"),
              m("span", { className: "u-path" }, " ~ "),
              m("span", null, "$ " + l.html))
          : m("div", { className: "term-line term-out", key: i, dangerouslySetInnerHTML: { __html: l.html } })
      )
    ),
    m("div", { className: "term-input-row" },
      m("span", { className: "prompt" }, "vitor@pouza-os"),
      m("span", { className: "u-path" }, "~"),
      m("span", { style: { color: "#e8e2dc" } }, "$"),
      m("input", { className: "term-input", ref: inRef, value: val, spellCheck: false, autoComplete: "off",
        onChange: (ev) => setVal(ev.target.value), onKeyDown: onKey })
    )
  );
}

Object.assign(window, { AppMusic, AppTerminal });
