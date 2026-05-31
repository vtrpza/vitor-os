/* global React, Icon */
// Vitor Pouza OS — app windows (parte 1)
const { createElement: e, useState } = React;
const D = window.VP_DATA;

/* ---------------- SOBRE MIM ---------------- */
function AppAbout() {
  const id = D.identidade;
  return e("div", { className: "app" },
    e("div", { className: "about-hero" },
      e("image-slot", { id: "vp-photo", shape: "rounded", radius: "28", style: { width: "132px", height: "132px", boxShadow: "var(--shadow-soft)" }, placeholder: "foto 1:1" }),
      e("div", null,
        e("div", { className: "eyebrow" }, "perfil"),
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
        e("div", { className: "kv" }, e("span", { className: "k" }, "Localização"), e("span", { className: "v" }, id.local)),
        e("div", { className: "kv" }, e("span", { className: "k" }, "Modelo"), e("span", { className: "v" }, id.modelo)),
        e("div", { className: "kv" }, e("span", { className: "k" }, "Disponibilidade"), e("span", { className: "v" }, id.disponibilidade)),
        e("div", { className: "kv" }, e("span", { className: "k" }, "Idiomas"), e("span", { className: "v" }, "PT nativo · EN fluente")),
        e("div", { className: "kv" }, e("span", { className: "k" }, "GitHub"), e("span", { className: "v" }, e("a", { href: id.githubUrl, target: "_blank", rel: "noreferrer" }, "@vtrpza"))),
        e("div", { className: "kv" }, e("span", { className: "k" }, "LinkedIn"), e("span", { className: "v" }, e("a", { href: id.linkedinUrl, target: "_blank", rel: "noreferrer" }, "/vitor-pouza")))
      )
    )
  );
}

/* ---------------- EXPERIÊNCIA ---------------- */
function AppExperience() {
  return e("div", { className: "app" },
    e("div", { className: "app-pad", style: { paddingBottom: 6 } },
      e("div", { className: "eyebrow" }, "trajetória"),
      e("h1", null, "Experiência profissional")
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
            e("h2", null, x.cargo, x.atual && e("span", { className: "badge-now" }, "atual")),
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
function AppSkills() {
  return e("div", { className: "app" },
    e("div", { className: "app-pad", style: { paddingBottom: 4 } },
      e("div", { className: "eyebrow" }, "stack técnica"),
      e("h1", null, "Competências"),
      e("p", { style: { marginTop: 8, maxWidth: 520 } }, "Conhecimento ponto a ponto do fluxo de desenvolvimento — da UI ao CI/CD, da API ao monitoramento em produção.")
    ),
    e("div", { className: "skills-grid" },
      D.skills.map((g, i) =>
        e("div", { className: "skill-card", key: i },
          e("div", { className: "sc-head" },
            e("span", { className: "sc-dot" }),
            e("h3", null, g.grupo)
          ),
          e("div", { className: "skill-tags" },
            g.itens.map((t) => e("span", { key: t, className: "chip" }, t))
          )
        )
      )
    )
  );
}

/* ---------------- PROJETOS ---------------- */
function AppProjects() {
  return e("div", { className: "app" },
    e("div", { className: "app-pad", style: { paddingBottom: 2 } },
      e("div", { className: "eyebrow" }, "portfólio"),
      e("h1", null, "Produtos no ar"),
      e("p", { style: { marginTop: 8, maxWidth: 520 } }, "Projetos em produção, entregues do zero ao deploy. Arraste um screenshot sobre cada janela para ilustrar.")
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
            e("div", { className: "proj-tags" }, p.tags.map((t) => e("span", { key: t, className: "chip" }, t))),
            e("span", { className: "proj-visit" }, "Visitar site ", e(Icon, { name: "external" }))
          )
        )
      )
    )
  );
}

/* ---------------- CONQUISTAS ---------------- */
function AppWins() {
  return e("div", { className: "app" },
    e("div", { className: "app-pad", style: { paddingBottom: 2 } },
      e("div", { className: "eyebrow" }, "impacto"),
      e("h1", null, "Conquistas & métricas")
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
function AppContact({ onToast }) {
  const id = D.identidade;
  const rows = [
    { k: "Email", v: id.email, ic: "mail", grad: "ic-grad-mail", href: "mailto:" + id.email, copy: id.email },
    { k: "Telefone / WhatsApp", v: id.telefone, ic: "phone", grad: "ic-grad-skills", href: "tel:" + id.telefone.replace(/\s/g, ""), copy: id.telefone },
    { k: "GitHub", v: "@vtrpza", ic: "github", grad: "ic-grad-term", href: id.githubUrl },
    { k: "LinkedIn", v: "/vitor-pouza", ic: "linkedin", grad: "ic-grad-exp", href: id.linkedinUrl },
    { k: "Localização", v: id.local + " · Remoto", ic: "pin", grad: "ic-grad-about" },
  ];
  const click = (r) => {
    if (r.copy && navigator.clipboard) { navigator.clipboard.writeText(r.copy).catch(() => {}); onToast && onToast("Copiado: " + r.copy); }
    if (r.href) window.open(r.href, r.href.startsWith("http") ? "_blank" : "_self");
  };
  return e("div", { className: "app" },
    e("div", { className: "contact" },
      e("div", { className: "eyebrow" }, "vamos conversar"),
      e("h1", null, "Contato"),
      e("p", { style: { marginTop: 8, maxWidth: 460 } }, "Disponível para PJ remoto, início imediato. Clique para copiar ou abrir."),
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
function AppCV() {
  return e("div", { className: "app cv-app" },
    e("div", { className: "cv-sheet" },
      e("div", { className: "cv-stripe" }),
      e("div", { className: "cv-badge" }, "VP"),
      e("div", { className: "cv-lines" }, [0, 1, 2, 3, 4].map((i) => e("i", { key: i })))
    ),
    e("div", { className: "eyebrow" }, "documento"),
    e("h1", { style: { marginTop: 4 } }, "Currículo · PDF"),
    e("p", { style: { maxWidth: 320, marginTop: 8 } }, "Versão completa para download, pronta para enviar a recrutadores."),
    e("div", { style: { display: "flex", gap: 10, marginTop: 18 } },
      e("a", { className: "btn", href: "uploads/Vitor_Pouza_CV.pdf", download: "Vitor_Pouza_CV.pdf" }, e(Icon, { name: "download" }), "Baixar CV"),
      e("a", { className: "btn ghost", href: "uploads/Vitor_Pouza_CV.pdf", target: "_blank", rel: "noreferrer" }, e(Icon, { name: "external" }), "Abrir")
    )
  );
}

Object.assign(window, { AppAbout, AppExperience, AppSkills, AppProjects, AppWins, AppContact, AppCV });
