"use client"

import { createContext, useContext, useEffect, useState } from "react"

export type Language = "pt" | "en"

const translations = {
  pt: {
    nav: { about: "Sobre", stack: "Stack", experience: "Experiência", work: "Atuação", agent: "Agente", contact: "Contato", resume: "CV", language: "EN", languageLabel: "Mudar idioma para inglês" },
    hero: {
      eyebrow: "Tecnologia · soluções · inovação",
      role: "Tech Lead & Desenvolvedor",
      speciality: "Back-end",
      description: "Construo APIs, microsserviços e sistemas financeiros escaláveis. Gosto de transformar problemas complexos em soluções seguras, simples de manter e que ajudam times a evoluir.",
      contact: "Vamos conversar",
      resume: "Ver currículo",
      location: "Natal/RN",
      photoAlt: "João Souza usando óculos e blazer escuro",
      photoRole: "Backend · liderança técnica",
      stackLabel: "Stack principal",
    },
    about: {
      heading: "Sobre mim",
      paragraphs: [
        "Sou desenvolvedor back-end e Tech Lead. Trabalho na construção de soluções escaláveis, seguras e conectadas ao que o negócio precisa.",
        "Minha rotina mistura desenvolvimento com liderança técnica: participo de decisões de arquitetura, faço code reviews, ajudo o time a destravar problemas e busco melhorar performance, segurança e manutenção dos sistemas.",
        "Hoje, minha principal experiência está em Golang, PHP, Node.js, PostgreSQL, AWS e integrações bancárias.",
      ],
      highlights: [
        { title: "Engenharia de software", text: "Código limpo, APIs bem definidas e decisões técnicas que duram." },
        { title: "Arquitetura na prática", text: "Microsserviços, integrações e sistemas financeiros com foco em escala." },
        { title: "Segurança e qualidade", text: "Boas práticas, revisão de código e atenção a riscos desde o desenho." },
      ],
    },
    skills: {
      heading: "Stack & ferramentas",
      description: "As tecnologias que uso para tirar ideias do papel, integrar sistemas e entregar software com responsabilidade.",
      categories: [
        { title: "Back-end", description: "Construção de serviços confiáveis", skills: ["Golang", "PHP", "Node.js", "APIs REST", "JWT", "Microsserviços"] },
        { title: "Dados", description: "Persistência e performance", skills: ["PostgreSQL", "MySQL", "MariaDB"] },
        { title: "Front-end", description: "Interfaces que conversam com o produto", skills: ["React.js", "Next.js", "TypeScript"] },
        { title: "Cloud & DevOps", description: "Entrega com consistência", skills: ["Docker", "Linux", "AWS", "Git Flow"] },
        { title: "Engenharia", description: "Decisões que sustentam o time", skills: ["Code review", "Arquitetura", "Documentação técnica"] },
        { title: "Qualidade", description: "Segurança no detalhe", skills: ["Segurança de APIs", "Performance", "Automação"] },
      ],
    },
    experience: {
      heading: "Experiência",
      date: "abr/2023 — atual",
      company: "Beyond Tecnologia",
      role: "Tech Lead · Desenvolvedor Back-end",
      summary: "Uma trajetória de evolução contínua, saindo do estágio até a liderança técnica e contribuindo diretamente para sistemas que precisam ser seguros, estáveis e escaláveis.",
      evolution: "Evolução de carreira",
      progression: ["Estágio", "Técnico", "Júnior I", "Júnior II", "Júnior III", "Pleno I", "Sênior"],
      responsibilities: [
        "Liderança técnica no desenvolvimento e manutenção de sistemas financeiros.",
        "Desenvolvimento de APIs e microsserviços com Golang, PHP e PostgreSQL.",
        "Autenticação JWT, integrações bancárias e automações internas.",
        "Code reviews, definição de boas práticas e apoio técnico ao time.",
        "Refatoração de queries e melhorias de segurança contra SQL Injection.",
      ],
      callToAction: "Quer conversar sobre um desafio?",
      education: "Formação acadêmica",
      courses: "Formações complementares",
      degree: "Análise e Desenvolvimento de Sistemas",
      degreeInfo: "UNIASSELVI · cursando · 2025 — 2028",
      bachelor: "Bacharelado em Ciências e Tecnologia",
      bachelorInfo: "UFRN · incompleto · 2019 — 2024",
      courseNote: "Cursos concluídos pela Alura entre 2023 e 2024.",
    },
    projects: {
      heading: "Onde eu gero valor",
      description: "Mais do que uma lista de tecnologias, gosto de mostrar o tipo de problema que sei resolver.",
      contact: "Fale comigo",
      areas: [
        { title: "Sistemas financeiros", text: "Backends e integrações para operações que exigem consistência, segurança e cuidado com cada transação." },
        { title: "Arquitetura de serviços", text: "Microsserviços e automações internas que deixam o produto mais preparado para crescer com o time." },
        { title: "Integrações inteligentes", text: "Conexão entre sistemas e processos, com foco em reduzir trabalho manual e criar fluxos mais confiáveis." },
      ],
    },
    chat: {
      heading: "Agente",
      badge: "Assistente com contexto do portfólio",
      title: "Uma forma mais direta de me apresentar.",
      description: "Quer saber como eu penso, quais tecnologias uso ou em que tipo de desafio posso contribuir? Pergunte por aqui.",
      suggestions: "Sugestões para testar",
      starterPrompts: ["Quem é o João como profissional?", "Quais tecnologias ele domina?", "Como ele pode ajudar meu projeto?"],
      note: "As respostas usam uma LLM online com um arquivo de contexto sobre João. Assim, o chat fica pessoal, consistente e fácil de atualizar.",
      panel: "Chat do portfólio",
      panelTitle: "Pergunte qualquer coisa sobre mim.",
      welcome: "Oi! Eu sou o assistente virtual do João. Pode perguntar sobre experiência, stack, atuação, disponibilidade ou como ele pode ajudar no seu contexto.",
      thinking: "Pensando na melhor resposta...",
      placeholder: "Ex.: Como o João trabalha com APIs e sistemas financeiros?",
      inputHint: "Enter envia. Shift + Enter quebra linha.",
      send: "Enviar",
      unavailable: "O chat ficou indisponível agora. Tente novamente em instantes.",
      staticNotice: "Esta versão estática do GitHub Pages não executa o chat. Acesse a versão oficial na Vercel para conversar com o agente.",
      officialSite: "Abrir versão completa na Vercel",
    },
    contact: {
      next: "Próximo passo",
      heading: "Vamos construir algo sólido juntos?",
      description: "Se você tem um desafio de produto, backend ou integração, vou gostar de entender o contexto e conversar sobre os próximos passos.",
      email: "Enviar email",
      resume: "Baixar currículo",
      phone: "Telefone",
    },
    footer: { rights: "Todos os direitos reservados.", madeWith: "Feito com" },
  },
  en: {
    nav: { about: "About", stack: "Stack", experience: "Experience", work: "Expertise", agent: "Agent", contact: "Contact", resume: "Resume", language: "PT", languageLabel: "Switch language to Portuguese" },
    hero: {
      eyebrow: "Technology · solutions · innovation",
      role: "Tech Lead & Back-end",
      speciality: "Developer",
      description: "I build scalable APIs, microservices, and financial systems. I enjoy turning complex problems into secure, maintainable solutions that help teams grow.",
      contact: "Let’s talk",
      resume: "View resume",
      location: "Natal, Brazil",
      photoAlt: "João Souza wearing glasses and a dark blazer",
      photoRole: "Back-end · technical leadership",
      stackLabel: "Core stack",
    },
    about: {
      heading: "About me",
      paragraphs: [
        "I am a back-end developer and Tech Lead. I build scalable, secure solutions that stay connected to business needs.",
        "My work combines development and technical leadership: I contribute to architecture decisions, review code, help the team unblock problems, and improve system performance, security, and maintainability.",
        "Today, my main experience is with Golang, PHP, Node.js, PostgreSQL, AWS, and banking integrations.",
      ],
      highlights: [
        { title: "Software engineering", text: "Clean code, well-defined APIs, and technical decisions made to last." },
        { title: "Practical architecture", text: "Microservices, integrations, and financial systems built with scale in mind." },
        { title: "Security and quality", text: "Best practices, code review, and attention to risk from the very start." },
      ],
    },
    skills: {
      heading: "Stack & tools",
      description: "The technologies I use to turn ideas into reliable software, integrate systems, and ship responsibly.",
      categories: [
        { title: "Back-end", description: "Building reliable services", skills: ["Golang", "PHP", "Node.js", "REST APIs", "JWT", "Microservices"] },
        { title: "Data", description: "Persistence and performance", skills: ["PostgreSQL", "MySQL", "MariaDB"] },
        { title: "Front-end", description: "Interfaces that work with the product", skills: ["React.js", "Next.js", "TypeScript"] },
        { title: "Cloud & DevOps", description: "Consistent delivery", skills: ["Docker", "Linux", "AWS", "Git Flow"] },
        { title: "Engineering", description: "Decisions that support the team", skills: ["Code review", "Architecture", "Technical documentation"] },
        { title: "Quality", description: "Security in the details", skills: ["API security", "Performance", "Automation"] },
      ],
    },
    experience: {
      heading: "Experience",
      date: "Apr 2023 — present",
      company: "Beyond Tecnologia",
      role: "Tech Lead · Back-end Developer",
      summary: "A path of continuous growth, from internship to technical leadership, contributing directly to systems that need to be secure, stable, and scalable.",
      evolution: "Career progression",
      progression: ["Intern", "Technician", "Junior I", "Junior II", "Junior III", "Mid-level I", "Senior"],
      responsibilities: [
        "Technical leadership for the development and maintenance of financial systems.",
        "Development of APIs and microservices using Golang, PHP, and PostgreSQL.",
        "JWT authentication, banking integrations, and internal automations.",
        "Code reviews, definition of best practices, and technical support for the team.",
        "Query refactoring and security improvements against SQL injection.",
      ],
      callToAction: "Want to discuss a challenge?",
      education: "Education",
      courses: "Additional training",
      degree: "Associate Degree in Systems Analysis and Development",
      degreeInfo: "UNIASSELVI · in progress · 2025 — 2028",
      bachelor: "Bachelor’s Degree in Science and Technology",
      bachelorInfo: "UFRN · incomplete · 2019 — 2024",
      courseNote: "Courses completed through Alura between 2023 and 2024.",
    },
    projects: {
      heading: "Where I create value",
      description: "More than a list of technologies, I like to show the kind of problems I can solve.",
      contact: "Get in touch",
      areas: [
        { title: "Financial systems", text: "Back-ends and integrations for operations that require consistency, security, and care with every transaction." },
        { title: "Service architecture", text: "Microservices and internal automations that make products ready to grow with the team." },
        { title: "Smart integrations", text: "Connecting systems and processes to reduce manual work and create more reliable workflows." },
      ],
    },
    chat: {
      heading: "Agent",
      badge: "Portfolio-aware assistant",
      title: "A more direct way to get to know me.",
      description: "Want to know how I think, which technologies I use, or the kind of challenge I can help with? Ask here.",
      suggestions: "Try asking",
      starterPrompts: ["Who is João as a professional?", "Which technologies does he work with?", "How can he help with my project?"],
      note: "Answers use an online LLM with a context file about João. This makes the chat personal, consistent, and easy to keep up to date.",
      panel: "Portfolio chat",
      panelTitle: "Ask me anything about myself.",
      welcome: "Hi! I’m João’s virtual assistant. You can ask about his experience, stack, expertise, availability, or how he can help in your context.",
      thinking: "Thinking of the best answer...",
      placeholder: "E.g.: How does João work with APIs and financial systems?",
      inputHint: "Enter sends. Shift + Enter adds a line break.",
      send: "Send",
      unavailable: "The chat is unavailable right now. Please try again shortly.",
      staticNotice: "This GitHub Pages static version cannot run the chat. Open the official Vercel version to talk with the agent.",
      officialSite: "Open the full Vercel version",
    },
    contact: {
      next: "Next step",
      heading: "Let’s build something solid together?",
      description: "If you have a product, back-end, or integration challenge, I’d be glad to understand the context and discuss the next steps.",
      email: "Send email",
      resume: "Download resume",
      phone: "Phone",
    },
    footer: { rights: "All rights reserved.", madeWith: "Built with" },
  },
} as const

type Copy = (typeof translations)[Language]

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  copy: Copy
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt")

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("portfolio-language")
    const nextLanguage: Language = savedLanguage === "en" ? "en" : "pt"
    setLanguageState(nextLanguage)
    document.documentElement.lang = nextLanguage === "pt" ? "pt-BR" : "en"
  }, [])

  function setLanguage(nextLanguage: Language) {
    setLanguageState(nextLanguage)
    window.localStorage.setItem("portfolio-language", nextLanguage)
    document.documentElement.lang = nextLanguage === "pt" ? "pt-BR" : "en"
  }

  return <LanguageContext.Provider value={{ language, setLanguage, copy: translations[language] }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }

  return context
}
