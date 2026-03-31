export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  images: string[];
  tags: string[];
  details: {
    overview: string;
    role: string;
    year: string;
    tools: string[];
  };
  links?: {
    label: string;
    url: string;
  }[];
}

export const PROJECTS: Project[] = [
  {
    slug: "jobb-v4",
    title: "Jobb 4.0",
    description:
      "Gestão de produtoras audiovisuais.",
    image: "/projetos/jobb-v4.webp",
    images: [
      "/projetos/jobb/jobb-v4-home.webp",
      "/projetos/jobb/jobb-v4-funcionalidades.webp",
    ],
    tags: ["SaaS", "Web App"],
    details: {
      overview:
        "Trabalhei no redesign completo do site do sistema Jobb, estavamos com a versão anterior a uns três anos sem mexer e com o lançamento do Jobb 4.0, a empresa sentiu a necessidade de atualizar o site. O projeto sofreu uma reestruturação da arquitetura de informação para seguir uma metodologia usada em sites de SaaS que leva o usuário a uma navegação guiada desde o interesse passando pela dor até a solução finalizando na conversão.\n\n• Hero (Apresenta o que o SaaS oferece)\n• Problema (A dor que o usuário enfrenta)\n• Solução (Como o sistema vai resolver o problema)\n• Benefícios (Algumas funcionalidades)\n• Prova social (Depoimentos e clientes)\n• CTA (Onde o usuário é convidado a um teste ou conversa)",
      role: "UX/UI Designer / Frontend",
      year: "2026",
      tools: ["Figma", "Photoshop", "Next.js", "Tailwind CSS", "AI"],
    },
  },
  {
    slug: "meets",
    title: "Meets CRM",
    description:
      "CRM inteligente para gestão de relacionamento com clientes e automação de vendas.",
    image: "/projetos/meets.webp",
    images: [
      "/projetos/meets/meets-home.webp",
      "/projetos/meets/lead-meets.webp",
      "/projetos/meets/meets-bot.webp",
      "/projetos/meets/meets-integracoes.webp",
      "/projetos/meets/meets-whats.webp",
    ],
    tags: ["CRM", "Web App"],
    details: {
      overview:
        "Trabalhei durante 5 anos na meets CRM onde atuei na criação dos sites, no web app, na criação de novas soluções e suporte ao marketing da empresa. O site da meets foi criado com foco em uma comunicação clara e objetiva. Com uma copywriting curta e direta e um design com apelo visual guiamos o usuário a uma jornada entendimento sobre a ferramenta e consequentemente de conversão. \n\nNas imagens abaixo segue os sites da meets bot e Lead meets.",
      role: "UX/UI Designer",
      year: "2023",
      tools: ["Figma", "Photoshop", "Next.js", "CSS"],
    },
    links: [
      { label: "Meets CRM", url: "https://meets.com.br/" },
      { label: "Meets Bot", url: "https://meets.com.br/meets-bot" },
      { label: "Lead Meets", url: "https://www.leadmeets.com/" },
    ],
  },
  {
    slug: "meets-ia",
    title: "Meets IA",
    description:
      "Inteligência artificial aplicada ao CRM para insights e automação avançada.",
    image: "/projetos/meets-ia.webp",
    images: [
      "/projetos/meets-ia/meets-ia-page.webp",
    ],
    tags: ["CRM", "Web App"],
    details: {
      overview:
        "Com o surgimento das IAs generativas, a Meets viu a necessidade de se atualizar e oferecer recursos de IA para seus clientes. Com essa nova feacture surgiu a necessidade de criar uma página para apresentar a ferramenta aos clientes. Atuei no design visual e na implementação do projeto.",
      role: "Product Designer",
      year: "2024",
      tools: ["Figma", "Photoshop", "Next.js", "CSS"],
    },
    links: [
      { label: "Meets IA", url: "https://meets.com.br/meets-ia" }
    ],
  },
  {
    slug: "mba-economia",
    title: "MBA Economia",
    description:
      "Plataforma educacional para cursos de MBA em economia e finanças.",
    image: "/projetos/mba-economia.webp",
    images: [
      "/projetos/mba/mba-economia-page-01.webp",
      "/projetos/mba/mba-economia-page-02.webp",
    ],
    tags: ["Educação"],
    details: {
      overview:
        "Proposta de landing page para o MBA em Economia Circular e Inovação da FESPSP. O design precisava transmitir credibilidade acadêmica com modernidade. A arquitetura da informação estava confusa e o design não passava credibilidade, então fiz uma pesquisa com outros MBAs e criei uma nova arquitetura de informação e um novo design.",
      role: "UX/UI Designer",
      year: "2023",
      tools: ["Figma", "Photoshop"],
    },
  },
];
