// Vitor Pouza OS — dados do currículo (PT-BR)
window.VP_DATA = {
  identidade: {
    nome: "Vitor Pouza",
    cargo: "Engenheiro de Software Sênior",
    stack: ["React", "Next.js", "TypeScript", "Node.js"],
    local: "São Paulo, SP",
    modelo: "100% Remoto · PJ",
    disponibilidade: "Início imediato",
    telefone: "+55 11 94183-0089",
    email: "vhnpouza@gmail.com",
    github: "github.com/vtrpza",
    githubUrl: "https://github.com/vtrpza",
    linkedin: "linkedin.com/in/vitor-pouza-91a275163",
    linkedinUrl: "https://www.linkedin.com/in/vitor-pouza-91a275163",
    idiomas: [
      { lingua: "Português", nivel: "Nativo" },
      { lingua: "Inglês", nivel: "Fluente — técnico e conversação" }
    ]
  },

  resumo: "Engenheiro de Software Sênior com 8 anos de carreira técnica, incluindo 6 anos de vivência corporativa em empresas de tecnologia (Jellyfish → GFT → act digital), evoluindo de júnior a sênior em React, Next.js e TypeScript. Últimos 2 anos como consultor independente, arquitetando e entregando produtos completos do zero: MVPs fullstack, design systems, micro-frontends e infraestrutura de deploy. Conhecimento ponto a ponto do fluxo de desenvolvimento — da UI ao CI/CD, da API ao monitoramento em produção. Visão de produto formada na prática: priorização de features, trade-offs técnicos, e entregas com métricas de impacto. Retorno ao mercado como PJ remoto, trazendo maturidade técnica e autonomia completa de execução.",

  resumoCurto: "8 anos construindo produtos de software — da UI ao CI/CD, da API ao monitoramento. Hoje, consultor independente entregando MVPs fullstack, design systems e micro-frontends do zero ao deploy.",

  conquistas: [
    {
      icone: "architecture",
      titulo: "Arquitetura de marketplace do zero",
      texto: "Construí a arquitetura de frontend para um marketplace e-commerce, permitindo que times diferentes trabalhassem em paralelo sem quebrar o produto um do outro.",
      metrica: "Micro-frontends"
    },
    {
      icone: "design",
      titulo: "Design System unificado",
      texto: "Criei um sistema de componentes de interface que padronizou a experiência visual em todos os produtos da empresa, acelerando a entrega de novas telas.",
      metrica: "1 fonte de verdade"
    },
    {
      icone: "ship",
      titulo: "Entrega ponta a ponta, sozinho",
      texto: "Entreguei projetos completos: da primeira linha de código ao deploy em produção, incluindo infraestrutura e monitoramento.",
      metrica: "0 → produção"
    },
    {
      icone: "speed",
      titulo: "Performance crítica otimizada",
      texto: "Otimizei páginas críticas para carregarem em menos de 2 segundos, melhorando diretamente a experiência do usuário final.",
      metrica: "< 2s LCP"
    },
    {
      icone: "data",
      titulo: "Pipelines de dados em tempo real",
      texto: "Desenvolvi pipelines de processamento de dados em Python que habilitaram funcionalidades de análise em tempo real.",
      metrica: "Real-time"
    }
  ],

  experiencia: [
    {
      cargo: "Freelancer Fullstack Sênior",
      empresa: "Projetos Globais",
      periodo: "Fev 2024 — Atual",
      local: "100% Remoto",
      atual: true,
      bullets: [
        "Consultor independente entregando produtos completos: da concepção ao deploy, com autonomia total de decisões técnicas.",
        "MVPs fullstack, design systems, micro-frontends e infraestrutura de deploy — entregues do zero."
      ]
    },
    {
      cargo: "Fullstack Engineer",
      empresa: "act digital",
      periodo: "Jan 2023 — Fev 2024",
      local: "Remoto / São Paulo",
      atual: false,
      bullets: [
        "Fullstack engineer em projetos críticos de negócio, integrando frontend React/Next.js com APIs e infraestrutura de deploy."
      ]
    },
    {
      cargo: "Front-End Developer (Pleno)",
      empresa: "GFT Technologies",
      periodo: "Fev 2020 — Dez 2022",
      local: "Híbrido São Paulo",
      atual: false,
      bullets: [
        "Evoluí de React para Next.js, entregando aplicações com SSR e otimização de performance em ambiente corporativo."
      ]
    },
    {
      cargo: "Junior Front-End Developer",
      empresa: "Jellyfish (ex-Reamp)",
      periodo: "2018 — 2020",
      local: "Startup São Paulo",
      atual: false,
      bullets: [
        "Primeira experiência profissional com React, construindo dashboards de BI em React puro (pré-hooks), aprendendo fundamentos sólidos de componentização e estado."
      ]
    }
  ],

  skills: [
    { grupo: "Frontend", itens: ["React", "Next.js", "TypeScript", "JavaScript", "Vite", "HTML5/CSS3", "Tailwind CSS", "shadcn/ui"] },
    { grupo: "Estado & APIs", itens: ["TanStack Query", "Redux", "GraphQL", "Apollo", "REST"] },
    { grupo: "Backend", itens: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Supabase"] },
    { grupo: "Arquitetura", itens: ["Micro-frontends", "Design System", "Storybook", "Monorepo", "Performance Web", "Core Web Vitals"] },
    { grupo: "DevOps", itens: ["GitHub Actions", "Docker", "AWS (Lambda, S3, CloudFront)"] },
    { grupo: "Testes", itens: ["Jest", "Cypress", "Playwright"] }
  ],

  projetos: [
    {
      nome: "BacenJus",
      url: "https://bacenjus.com.br",
      dominio: "bacenjus.com.br",
      tagline: "Plataforma jurídico-financeira",
      descricao: "Sistema web para automação de fluxos jurídicos integrados ao Banco Central. Frontend reativo, autenticação e dashboards de acompanhamento.",
      tags: ["Next.js", "TypeScript", "Dashboard"],
      cor: "#3B6FD4"
    },
    {
      nome: "VR Advogados",
      url: "https://vradvogados.com.br",
      dominio: "vradvogados.com.br",
      tagline: "Site institucional de advocacia",
      descricao: "Presença digital de escritório de advocacia — site institucional performático, otimizado para SEO e Core Web Vitals.",
      tags: ["Next.js", "SEO", "Performance"],
      cor: "#1F8A5B"
    },
    {
      nome: "Escaly Content",
      url: "https://content.escaly.com.br",
      dominio: "content.escaly.com.br",
      tagline: "Plataforma de conteúdo",
      descricao: "Produto de geração e gestão de conteúdo. Arquitetura fullstack com APIs, gestão de estado e UI baseada em design system próprio.",
      tags: ["React", "Fullstack", "Design System"],
      cor: "#D97757"
    },
    {
      nome: "PosAI",
      url: "https://posai.com.br",
      dominio: "posai.com.br",
      tagline: "Produto com IA",
      descricao: "Aplicação de inteligência artificial aplicada. Integração com modelos, pipelines de dados e interface reativa em tempo real.",
      tags: ["IA", "Python", "Real-time"],
      cor: "#7C5CFF"
    }
  ],

  metricas: [
    { valor: "8", sufixo: "anos", label: "de carreira técnica" },
    { valor: "6", sufixo: "anos", label: "de vivência corporativa" },
    { valor: "4", sufixo: "", label: "produtos no ar" },
    { valor: "< 2", sufixo: "s", label: "LCP em páginas críticas" }
  ],

  playlist: [
    { faixa: "Deep Focus", artista: "Coding Mode", dur: "3:42" },
    { faixa: "Late Night Deploy", artista: "Lo-Fi CI/CD", dur: "4:18" },
    { faixa: "Green Build", artista: "Pipeline Sounds", dur: "2:55" },
    { faixa: "Ship It", artista: "Production Vibes", dur: "3:30" }
  ]
};
