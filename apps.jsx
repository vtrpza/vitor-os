/* global React, Icon */
// Vitor Pouza OS — app windows
const { createElement: e, useState } = React;

const UI = {
  pt: {
    about: { eyebrow: "perfil", location: "Localização", model: "Modelo", availability: "Disponibilidade", languages: "Idiomas", langVal: "PT nativo · EN fluente" },
    exp:     { eyebrow: "trajetória", h1: "Experiência profissional", badge: "atual" },
    skills:  { eyebrow: "stack técnica", h1: "Competências", desc: "Conhecimento ponto a ponto do fluxo de desenvolvimento — da UI ao CI/CD, da API ao monitoramento em produção." },
    proj:    { eyebrow: "portfólio", h1: "Produtos no ar", desc: "Projetos em produção, entregues do zero ao deploy. Arraste um screenshot sobre cada janela para ilustrar.", visit: "Visitar site" },
    wins:    { eyebrow: "impacto", h1: "Conquistas & métricas" },
    contact: { eyebrow: "vamos conversar", h1: "Contato", desc: "Disponível para PJ remoto, início imediato. Clique para copiar ou abrir.", phone: "Telefone / WhatsApp", location: "Localização", remote: "Remoto", copied: "Copiado: " },
    cv:      { eyebrow: "documento", h1: "Currículo · PDF", desc: "Versão completa para download, pronta para enviar a recrutadores.", download: "Baixar CV", open: "Abrir" },
  },
  en: {
    about: { eyebrow: "profile", location: "Location", model: "Work model", availability: "Availability", languages: "Languages", langVal: "Native PT · Fluent EN" },
    exp:     { eyebrow: "career path", h1: "Professional experience", badge: "current" },
    skills:  { eyebrow: "tech stack", h1: "Skills", desc: "End-to-end understanding of the development flow — from UI to CI/CD, from API to production monitoring." },
    proj:    { eyebrow: "portfolio", h1: "Live products", desc: "Production projects, delivered from zero to deploy. Drag a screenshot onto each window to illustrate.", visit: "Visit site" },
    wins:    { eyebrow: "impact", h1: "Achievements & metrics" },
    contact: { eyebrow: "let's talk", h1: "Contact", desc: "Available for remote freelance, immediate start. Click to copy or open.", phone: "Phone / WhatsApp", location: "Location", remote: "Remote", copied: "Copied: " },
    cv:      { eyebrow: "document", h1: "Resume · PDF", desc: "Full version for download, ready to send to recruiters.", download: "Download CV", open: "Open" },
  }
};

/* ---------------- SOBRE MIM ---------------- */
function AppAbout({ lang = "pt" }) {
  const D = lang === "en" ? window.VP_DATA_EN : window.VP_DATA;
  const t = UI[lang].about;
  const id = D.identidade;
  return e("div", { className: "app" },
    e("div", { className: "about-hero" },
      e("image-slot", { id: "vp-photo", shape: "rounded", radius: "28", style: { width: "132px", height: "132px", boxShadow: "var(--shadow-soft)" }, placeholder: "foto 1:1" }),
      e("div", null,
        e("div", { className: "eyebrow" }, t.eyebrow),
        e("h1", null, id.nome),
        e("div", { className: "about-role" }, id.cargo),
        e("div", { className: "about-meta" },
          id.stack.map((s) => e("span", { key: s, className: "chip" }, s))
        )
      )
    ),
    e("div", { className: "about-body" },
      e("p", null, D.resumo),
      e("div", { className: "kv-grid" },
        e("div", { className: "kv" }, e("span", { className: "k" }, t.location), e("span", { className: "v" }, id.local)),
        e("div", { className: "kv" }, e("span", { className: "k" }, t.model), e("span", { className: "v" }, id.modelo)),
        e("div", { className: "kv" }, e("span", { className: "k" }, t.availability), e("span", { className: "v" }, id.disponibilidade)),
        e("div", { className: "kv" }, e("span", { className: "k" }, t.languages), e("span", { className: "v" }, t.langVal)),
        e("div", { className: "kv" }, e("span", { className: "k" }, "GitHub"), e("span", { className: "v" }, e("a", { href: id.githubUrl, target: "_blank", rel: "noreferrer" }, "@vtrpza"))),
        e("div", { className: "kv" }, e("span", { className: "k" }, "LinkedIn"), e("span", { className: "v" }, e("a", { href: id.linkedinUrl, target: "_blank", rel: "noreferrer" }, "/vitor-pouza")))
      )
    )
  );
}

/* ---------------- EXPERIÊNCIA ---------------- */
function AppExperience({ lang = "pt" }) {
  const D = lang === "en" ? window.VP_DATA_EN : window.VP_DATA;
  const t = UI[lang].exp;
  return e("div", { className: "app" },
    e("div", { className: "app-pad", style: { paddingBottom: 6 } },
      e("div", { className: "eyebrow" }, t.eyebrow),
      e("h1", null, t.h1)
    ),
    e("div", { className: "timeline" },
      D.experiencia.map((x, i) =>
        e("div", { className: "tl-row" + (x.atual ? " now" : ""), key: i },
          e("div", { className: "tl-rail" },
            e("div", { className: "tl-node" }),
            e("div", { className: "tl-line" })
          ),
          e("div", { className: "tl-card" },
            e("div", { className: "tl-period" }, x.periodo),
            e("h2", null, x.cargo, x.atual && e("span", { className: "badge-now" }, t.badge)),
            e("div", { className: "tl-co" }, x.empresa, e("span", { className: "dot" }, "·"), x.local),
            e("ul", { className: "tl-bullets" },
              x.bullets.map((b, j) => e("li", { key: j }, e("span", null, b)))
            )
          )
        )
      )
    )
  );
}

/* ---------------- SKILLS ---------------- */
function AppSkills({ lang = "pt" }) {
  const D = lang === "en" ? window.VP_DATA_EN : window.VP_DATA;
  const t = UI[lang].skills;
  return e("div", { className: "app" },
    e("div", { className: "app-pad", style: { paddingBottom: 4 } },
      e("div", { className: "eyebrow" }, t.eyebrow),
      e("h1", null, t.h1),
      e("p", { style: { marginTop: 8, maxWidth: 520 } }, t.desc)
    ),
    e("div", { className: "skills-grid" },
      D.skills.map((g, i) =>
        e("div", { className: "skill-card", key: i },
          e("div", { className: "sc-head" },
            e("span", { className: "sc-dot" }),
            e("h3", null, g.grupo)
          ),
          e("div", { className: "skill-tags" },
            g.itens.map((ti) => e("span", { key: ti, className: "chip" }, ti))
          )
        )
      )
    )
  );
}

/* ---------------- PROJETOS ---------------- */
function AppProjects({ lang = "pt" }) {
  const D = lang === "en" ? window.VP_DATA_EN : window.VP_DATA;
  const t = UI[lang].proj;
  return e("div", { className: "app" },
    e("div", { className: "app-pad", style: { paddingBottom: 2 } },
      e("div", { className: "eyebrow" }, t.eyebrow),
      e("h1", null, t.h1),
      e("p", { style: { marginTop: 8, maxWidth: 520 } }, t.desc)
    ),
    e("div", { className: "proj-grid" },
      D.projetos.map((p, i) =>
        e("a", { className: "proj-card", key: i, href: p.url, target: "_blank", rel: "noreferrer" },
          e("div", { className: "proj-shot" },
            e("div", { className: "proj-bar" },
              e("div", { className: "pb-dots" },
                e("i", { style: { background: "#ff5f57" } }),
                e("i", { style: { background: "#febc2e" } }),
                e("i", { style: { background: "#28c840" } })
              ),
              e("div", { className: "pb-url" }, p.url)
            ),
            e("image-slot", { id: "proj-" + i, shape: "rect", placeholder: "screenshot — " + p.dominio })
          ),
          e("div", { className: "proj-meta" },
            e("div", { className: "pm-top" },
              e("h2", null, p.nome)
            ),
            e("div", { className: "proj-tagline" }, p.tagline),
            e("p", null, p.descricao),
            e("div", { className: "proj-tags" }, p.tags.map((tag) => e("span", { key: tag, className: "chip" }, tag))),
            e("span", { className: "proj-visit" }, t.visit + " ", e(Icon, { name: "external" }))
          )
        )
      )
    )
  );
}

/* ---------------- CONQUISTAS ---------------- */
function AppWins({ lang = "pt" }) {
  const D = lang === "en" ? window.VP_DATA_EN : window.VP_DATA;
  const t = UI[lang].wins;
  return e("div", { className: "app" },
    e("div", { className: "app-pad", style: { paddingBottom: 2 } },
      e("div", { className: "eyebrow" }, t.eyebrow),
      e("h1", null, t.h1)
    ),
    e("div", { className: "wins" },
      e("div", { className: "metrics-row" },
        D.metricas.map((m, i) =>
          e("div", { className: "metric", key: i },
            e("div", { className: "m-val" }, m.valor, m.sufixo && e("span", { className: "suf" }, m.sufixo)),
            e("div", { className: "m-label" }, m.label)
          )
        )
      ),
      e("div", { className: "win-list" },
        D.conquistas.map((c, i) =>
          e("div", { className: "win-item", key: i },
            e("div", { className: "win-ic" }, e(Icon, { name: c.icone })),
            e("div", null,
              e("h3", null, c.titulo),
              e("p", null, c.texto)
            ),
            e("div", { className: "win-metric" }, c.metrica)
          )
        )
      )
    )
  );
}

/* ---------------- CONTATO ---------------- */
function AppContact({ lang = "pt", onToast }) {
  const D = lang === "en" ? window.VP_DATA_EN : window.VP_DATA;
  const t = UI[lang].contact;
  const id = D.identidade;
  const rows = [
    { k: "Email", v: id.email, ic: "mail", grad: "ic-grad-mail", href: "mailto:" + id.email, copy: id.email },
    { k: t.phone, v: id.telefone, ic: "phone", grad: "ic-grad-skills", href: "tel:" + id.telefone.replace(/\s/g, ""), copy: id.telefone },
    { k: "GitHub", v: "@vtrpza", ic: "github", grad: "ic-grad-term", href: id.githubUrl },
    { k: "LinkedIn", v: "/vitor-pouza", ic: "linkedin", grad: "ic-grad-exp", href: id.linkedinUrl },
    { k: t.location, v: id.local + " · " + t.remote, ic: "pin", grad: "ic-grad-about" },
  ];
  const click = (r) => {
    if (r.copy && navigator.clipboard) { navigator.clipboard.writeText(r.copy).catch(() => {}); onToast && onToast(t.copied + r.copy); }
    if (r.href) window.open(r.href, r.href.startsWith("http") ? "_blank" : "_self");
  };
  return e("div", { className: "app" },
    e("div", { className: "contact" },
      e("div", { className: "eyebrow" }, t.eyebrow),
      e("h1", null, t.h1),
      e("p", { style: { marginTop: 8, maxWidth: 460 } }, t.desc),
      e("div", { className: "contact-grid" },
        rows.map((r, i) =>
          e("div", { className: "contact-row", key: i, onClick: () => click(r) },
            e("div", { className: "cr-ic " + r.grad }, e(Icon, { name: r.ic })),
            e("div", null,
              e("div", { className: "cr-k" }, r.k),
              e("div", { className: "cr-v" }, r.v)
            ),
            e("div", { className: "cr-go" }, r.copy ? e(Icon, { name: "copy", width: 16, height: 16 }) : "↗")
          )
        )
      )
    )
  );
}

/* ---------------- CV / DOWNLOAD ---------------- */
function AppCV({ lang = "pt" }) {
  const t = UI[lang].cv;
  return e("div", { className: "app cv-app" },
    e("div", { className: "cv-sheet" },
      e("div", { className: "cv-stripe" }),
      e("div", { className: "cv-badge" }, "VP"),
      e("div", { className: "cv-lines" }, [0, 1, 2, 3, 4].map((i) => e("i", { key: i })))
    ),
    e("div", { className: "eyebrow" }, t.eyebrow),
    e("h1", { style: { marginTop: 4 } }, t.h1),
    e("p", { style: { maxWidth: 320, marginTop: 8 } }, t.desc),
    e("div", { style: { display: "flex", gap: 10, marginTop: 18 } },
      e("a", { className: "btn", href: "uploads/Vitor_Pouza_CV.pdf", download: "Vitor_Pouza_CV.pdf" }, e(Icon, { name: "download" }), t.download),
      e("a", { className: "btn ghost", href: "uploads/Vitor_Pouza_CV.pdf", target: "_blank", rel: "noreferrer" }, e(Icon, { name: "external" }), t.open)
    )
  );
}

Object.assign(window, { AppAbout, AppExperience, AppSkills, AppProjects, AppWins, AppContact, AppCV });
