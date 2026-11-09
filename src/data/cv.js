/**
 * Steven Rueda Lopez // Slise.Dev
 * Master Curriculum Vitae Data Store
 * Source: main_steven_rueda.tex & GitHub Verified
 */

export const personalData = {
  name: "Steven",
  lastName: "Rueda Lopez",
  fullName: "Steven Rueda Lopez",
  alias: "Slise.Dev",
  githubHandle: "TheStevenDog",
  location: "Medellín, Colombia",
  phone: "+57 301 541 7816",
  email: "steven2902rueda2902@gmail.com",
  roles: [
    "Junior Full Stack & AI Developer",
    "Ingeniero de Software",
    "Automatización Asistida por IA",
    "Desarrollador Mobile & Web"
  ],
  bioSummary: "Ingeniero de Software con experiencia en entornos de producción real. Especializado en desarrollo Full Stack y automatización de flujos asistida por IA. Con enfoque en la optimización de sistemas críticos, integración de pasarelas de pago y mejora de la eficiencia operativa mediante soluciones de código inteligentes.",
  socials: {
    github: "https://github.com/TheStevenDog",
    linkedin: "https://www.linkedin.com/in/steven-rueda-lopez-a53a141ab/",
    email: "mailto:steven2902rueda2902@gmail.com",
    twitter: "https://x.com/DogThestev67110",
    instagram: "https://www.instagram.com/slise_yt/"
  },
  languages: [
    { language: "Español", level: "Nativo", percentage: 100 },
    { language: "Inglés", level: "Intermedio (B1)", percentage: 65 }
  ]
};

export const technicalSkills = {
  languages: {
    title: "Lenguajes de Programación",
    icon: "code",
    items: ["Python", "TypeScript", "JavaScript (ES6+)", "PHP", "SQL (MySQL)"],
    metrics: [
      { name: "Python (IA & Scripts)", value: 92 },
      { name: "TypeScript & JavaScript", value: 88 },
      { name: "PHP & MySQL (Backend)", value: 82 }
    ]
  },
  aiAndData: {
    title: "Inteligencia Artificial & Datos",
    icon: "cpu",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Automatización con Scripts de IA",
      "Estructuras de Datos Complejas (Árboles Binarios)",
      "Google Colab",
      "Software Predictivo"
    ],
    metrics: [
      { name: "Modelado ML & Predictivo", value: 90 },
      { name: "Scripts de IA para Producción", value: 92 },
      { name: "Optimización de Carga con IA", value: 85 }
    ]
  },
  webAndBackend: {
    title: "Desarrollo Web & Backend",
    icon: "server",
    items: [
      "Desarrollo Full Stack",
      "APIs REST Seguras",
      "Arquitectura de Software",
      "Refactorización",
      "Pasarelas de Pago",
      "Optimización de Consultas SQL"
    ],
    metrics: [
      { name: "Arquitectura API REST", value: 88 },
      { name: "Pasarelas de Pago Seguras", value: 85 },
      { name: "Refactorización & Rendimiento", value: 84 }
    ]
  },
  toolsAndDevops: {
    title: "Herramientas, Mobile & DevOps",
    icon: "tools",
    items: [
      "Google Play Store Deploy",
      "Git & GitHub",
      "Linux & Terminal Shell",
      "Metodologías Ágiles (Scrum)",
      "Optimización Web (UI/UX, Performance)",
      "Astro & Componentes Modulares"
    ],
    metrics: [
      { name: "Despliegue Mobile (Play Store)", value: 86 },
      { name: "Control de Versiones & CI/CD", value: 88 },
      { name: "Entornos Linux & Infraestructura", value: 80 }
    ]
  }
};

export const workExperience = [
  {
    period: "Feb 2026 — 15 Oct 2026",
    role: "Lead Full Stack Developer & Digital Strategist",
    company: "Empresa / Consultoría",
    location: "Illinois, EE.UU. (Remoto)",
    achievements: [
      "Desarrollo y Despliegue Mobile: Diseñé, desarrollé y publiqué de manera integral la aplicación móvil oficial de la compañía en Google Play Store, ampliando el alcance digital del negocio.",
      "Optimización Web & Performance: Rediseñé y optimicé las páginas web corporativas, mejorando la velocidad de carga, la usabilidad visual (UI/UX) y el rendimiento general de la infraestructura.",
      "Gestión de Infraestructura y Datos: Administré la infraestructura tecnológica corporativa, asegurando la alta disponibilidad de las plataformas web y estructurando la gestión de bases de datos internas.",
      "Estrategia Digital & Captación: Dirigí las campañas de marketing digital y publicidad pagada, logrando un incremento significativo en la atracción y conversión de clientes."
    ]
  },
  {
    period: "Sep 2025 — Ene 2026",
    role: "Full Stack Web Developer",
    company: "Empresa de Software / Servicios Web",
    location: "Medellín, Colombia",
    achievements: [
      "Mantenimiento en Producción: Mantenimiento continuo y evolución del sistema web core en entornos de producción real de alta exigencia.",
      "Integraciones Seguras: Integración de pasarelas de pago seguras y APIs REST de terceros para transacciones confiables.",
      "Optimización con IA: Desarrollo de scripts en Python con IA para optimización de procesamiento de imágenes y reducción de carga en servidores.",
      "Backend & Base de Datos: Refactorización de lógica de backend en PHP y consultas MySQL para mejorar tiempos de respuesta y rendimiento general.",
      "Automatización de Procesos: Automatización de flujos y procesos de desarrollo internos, reduciendo significativamente los tiempos de entrega."
    ]
  }
];

export const education = [
  {
    period: "2023 — Presente (Cursando)",
    title: "Ingeniería de Software",
    institution: "Tecnológico de Antioquia",
    location: "Medellín, Colombia",
    details: [
      "Enfoque en ciclo de vida del software (SDLC), arquitecturas escalables, patrones de diseño y optimización de bases de datos relacionales.",
      "Finalista destacado en competencias y hackathons nacionales de innovación tecnológica e Inteligencia Artificial."
    ]
  },
  {
    period: "Nov 2024 — Dic 2024",
    title: "Especialización en Inteligencia Artificial (Advanced)",
    institution: "MinTic / Talento Tech",
    location: "Colombia",
    details: [
      "Diseño de modelos de IA desde fundamentos matemáticos hasta entornos de producción (Google Colab).",
      "Estructuras de datos complejas (árboles binarios) y algoritmos de Machine Learning desarrollados desde cero.",
      "Desarrollo de software predictivo basado en datos para análisis y prevención de desastres y accidentes urbanos."
    ]
  }
];

export const certifications = [
  {
    date: "Dic 2024",
    title: "Top 3 Competencia Nacional de Desarrollo con IA",
    issuer: "Hackathon / Competencia MinTic & Talent Week",
    highlight: true,
    description: "Reconocimiento nacional de podio al desarrollar en tiempo récord una plataforma con IA cartográfica personalizada para GROW DATA."
  },
  {
    date: "Ene 2025",
    title: "Inteligencia Artificial y Productividad",
    issuer: "Google",
    highlight: false,
    description: "Certificación oficial sobre integración de herramientas de IA aplicada, pipelines automatizados y productividad técnica."
  },
  {
    date: "Dic 2024",
    title: "Inteligencia Artificial (Advanced)",
    issuer: "MinTic Colombia",
    highlight: false,
    description: "Acreditación avanzada en modelado matemático, algoritmos de Machine Learning no lineales y software predictivo."
  }
];
