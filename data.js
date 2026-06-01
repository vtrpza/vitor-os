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

// ── English translation ────────────────────────────────────────────────────
window.VP_DATA_EN = {
  identidade: {
    nome: "Vitor Pouza",
    cargo: "Senior Software Engineer",
    stack: ["React", "Next.js", "TypeScript", "Node.js"],
    local: "São Paulo, SP",
    modelo: "100% Remote · Freelance",
    disponibilidade: "Immediate availability",
    telefone: "+55 11 94183-0089",
    email: "vhnpouza@gmail.com",
    github: "github.com/vtrpza",
    githubUrl: "https://github.com/vtrpza",
    linkedin: "linkedin.com/in/vitor-pouza-91a275163",
    linkedinUrl: "https://www.linkedin.com/in/vitor-pouza-91a275163",
    idiomas: [
      { lingua: "Portuguese", nivel: "Native" },
      { lingua: "English", nivel: "Fluent — technical & conversational" }
    ]
  },

  resumo: "Senior Software Engineer with 8 years of technical career, including 6 years of corporate experience at tech companies (Jellyfish → GFT → act digital), growing from junior to senior in React, Next.js and TypeScript. Last 2 years as an independent consultant, architecting and delivering complete products from scratch: fullstack MVPs, design systems, micro-frontends and deployment infrastructure. End-to-end understanding of the development flow — from UI to CI/CD, from API to production monitoring. Product mindset built through practice: feature prioritization, technical trade-offs, and delivery with impact metrics. Returning to the market as a remote freelancer, bringing technical maturity and full execution autonomy.",

  resumoCurto: "8 years building software products — from UI to CI/CD, from API to monitoring. Now, an independent consultant delivering fullstack MVPs, design systems and micro-frontends from zero to production.",

  conquistas: [
    {
      icone: "architecture",
      titulo: "Marketplace architecture from scratch",
      texto: "Built the frontend architecture for an e-commerce marketplace, enabling different teams to work in parallel without breaking each other's product.",
      metrica: "Micro-frontends"
    },
    {
      icone: "design",
      titulo: "Unified Design System",
      texto: "Created a UI component system that standardized the visual experience across all company products, accelerating delivery of new screens.",
      metrica: "1 source of truth"
    },
    {
      icone: "ship",
      titulo: "End-to-end delivery, solo",
      texto: "Delivered complete projects: from the first line of code to production deployment, including infrastructure and monitoring.",
      metrica: "0 → production"
    },
    {
      icone: "speed",
      titulo: "Critical performance optimized",
      texto: "Optimized critical pages to load in under 2 seconds, directly improving the end-user experience.",
      metrica: "< 2s LCP"
    },
    {
      icone: "data",
      titulo: "Real-time data pipelines",
      texto: "Developed Python data processing pipelines that enabled real-time analytics capabilities.",
      metrica: "Real-time"
    }
  ],

  experiencia: [
    {
      cargo: "Senior Fullstack Freelancer",
      empresa: "Global Projects",
      periodo: "Feb 2024 — Present",
      local: "100% Remote",
      atual: true,
      bullets: [
        "Independent consultant delivering complete products: from conception to deployment, with full technical decision autonomy.",
        "Fullstack MVPs, design systems, micro-frontends and deployment infrastructure — delivered from scratch."
      ]
    },
    {
      cargo: "Fullstack Engineer",
      empresa: "act digital",
      periodo: "Jan 2023 — Feb 2024",
      local: "Remote / São Paulo",
      atual: false,
      bullets: [
        "Fullstack engineer on critical business projects, integrating React/Next.js frontend with APIs and deployment infrastructure."
      ]
    },
    {
      cargo: "Front-End Developer (Mid-level)",
      empresa: "GFT Technologies",
      periodo: "Feb 2020 — Dec 2022",
      local: "Hybrid São Paulo",
      atual: false,
      bullets: [
        "Grew from React to Next.js, delivering SSR applications with performance optimization in a corporate environment."
      ]
    },
    {
      cargo: "Junior Front-End Developer",
      empresa: "Jellyfish (ex-Reamp)",
      periodo: "2018 — 2020",
      local: "Startup São Paulo",
      atual: false,
      bullets: [
        "First professional experience with React, building BI dashboards in pure React (pre-hooks), learning solid foundations of componentization and state management."
      ]
    }
  ],

  skills: [
    { grupo: "Frontend", itens: ["React", "Next.js", "TypeScript", "JavaScript", "Vite", "HTML5/CSS3", "Tailwind CSS", "shadcn/ui"] },
    { grupo: "State & APIs", itens: ["TanStack Query", "Redux", "GraphQL", "Apollo", "REST"] },
    { grupo: "Backend", itens: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Supabase"] },
    { grupo: "Architecture", itens: ["Micro-frontends", "Design System", "Storybook", "Monorepo", "Web Performance", "Core Web Vitals"] },
    { grupo: "DevOps", itens: ["GitHub Actions", "Docker", "AWS (Lambda, S3, CloudFront)"] },
    { grupo: "Testing", itens: ["Jest", "Cypress", "Playwright"] }
  ],

  projetos: [
    {
      nome: "BacenJus",
      url: "https://bacenjus.com.br",
      dominio: "bacenjus.com.br",
      tagline: "Legal-financial platform",
      descricao: "Web system for automating legal workflows integrated with Brazil's Central Bank. Reactive frontend, authentication and tracking dashboards.",
      tags: ["Next.js", "TypeScript", "Dashboard"],
      cor: "#3B6FD4"
    },
    {
      nome: "VR Advogados",
      url: "https://vradvogados.com.br",
      dominio: "vradvogados.com.br",
      tagline: "Law firm institutional site",
      descricao: "Digital presence for a law firm — high-performance institutional website, optimized for SEO and Core Web Vitals.",
      tags: ["Next.js", "SEO", "Performance"],
      cor: "#1F8A5B"
    },
    {
      nome: "Escaly Content",
      url: "https://content.escaly.com.br",
      dominio: "content.escaly.com.br",
      tagline: "Content platform",
      descricao: "Content generation and management product. Fullstack architecture with APIs, state management and UI based on a custom design system.",
      tags: ["React", "Fullstack", "Design System"],
      cor: "#D97757"
    },
    {
      nome: "PosAI",
      url: "https://posai.com.br",
      dominio: "posai.com.br",
      tagline: "AI product",
      descricao: "Applied artificial intelligence application. Integration with models, data pipelines and real-time reactive interface.",
      tags: ["AI", "Python", "Real-time"],
      cor: "#7C5CFF"
    }
  ],

  metricas: [
    { valor: "8", sufixo: "yrs", label: "technical career" },
    { valor: "6", sufixo: "yrs", label: "corporate experience" },
    { valor: "4", sufixo: "", label: "live products" },
    { valor: "< 2", sufixo: "s", label: "LCP on critical pages" }
  ],

  playlist: [
    { faixa: "Deep Focus", artista: "Coding Mode", dur: "3:42" },
    { faixa: "Late Night Deploy", artista: "Lo-Fi CI/CD", dur: "4:18" },
    { faixa: "Green Build", artista: "Pipeline Sounds", dur: "2:55" },
    { faixa: "Ship It", artista: "Production Vibes", dur: "3:30" }
  ]
};
