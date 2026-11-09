/**
 * Steven Rueda Lopez // Slise.Dev
 * GitHub Projects Data Store
 * Source: github.com/TheStevenDog
 */

export const projects = [
  {
    id: "onway",
    title: "OnWay — Smart Route & Map System",
    category: "ai",
    badge: "TOP 3 NACIONAL // GROW DATA",
    description: "Sistema cartográfico y de cálculo de rutas adaptativo con Inteligencia Artificial para flotas comerciales y conductores. Galardonado entre los 3 mejores proyectos en la competencia nacional Talent Week.",
    tags: ["Python", "Machine Learning", "APIs de Mapas", "Geocodificación", "Talent Week"],
    github: "https://github.com/TheStevenDog/OnWay",
    featured: true,
    stats: { stars: 1, award: "Top 3 Hackathon IA" }
  },
  {
    id: "trustcert",
    title: "TrustCert — Verificación en Monad Blockchain",
    category: "web3",
    badge: "MONAD HACKATHON 2026",
    description: "Plataforma de certificación y validación de títulos académicos sobre Monad Blockchain. Hasheo criptográfico local SHA-256 e inmutabilidad garantizada por Smart Contracts sin intermediarios.",
    tags: ["TypeScript", "Monad Blockchain", "Smart Contracts", "SHA-256", "Web3 Security"],
    github: "https://github.com/TheStevenDog/TrustCert",
    featured: true,
    stats: { network: "Monad EVM", status: "Active" }
  },
  {
    id: "ticketlab",
    title: "TicketLab — Reporte Técnico Campus TdeA",
    category: "mobile",
    badge: "PROYECTO DE AULA // TdeA",
    description: "Aplicación móvil para reportar, priorizar y gestionar incidentes y fallas técnicas en aulas, laboratorios de cómputo y equipos del campus universitario, con tablero administrativo en tiempo real.",
    tags: ["Desarrollo Móvil", "React Native", "JavaScript", "Gestión de Tickets", "REST API"],
    github: "https://github.com/TheStevenDog/TicketLab-Proyecto-de-aula",
    featured: true,
    stats: { platform: "Android / Mobile", team: "TdeA" }
  },
  {
    id: "library-app",
    title: "Library App — Offline-First Mobile Architecture",
    category: "mobile",
    badge: "OFFLINE-FIRST // EXPO + SQLITE",
    description: "Aplicación móvil de gestión bibliotecaria construida con Expo y React Native bajo arquitectura Offline-First con base de datos local SQLite y API REST de sincronización en TypeScript.",
    tags: ["Expo", "React Native", "TypeScript", "SQLite Local", "REST API"],
    github: "https://github.com/TheStevenDog/Library-app-Guia2",
    apiGithub: "https://github.com/TheStevenDog/Library-api-Guia1",
    featured: true,
    stats: { architecture: "Offline-First", db: "SQLite" }
  },
  {
    id: "gamevault",
    title: "GameVault — Catálogo Móvil Gamer",
    category: "mobile",
    badge: "REACT NATIVE CLI",
    description: "Tienda y catálogo interactivo de videojuegos para dispositivos móviles con componentes nativos, navegación fluida y arquitectura modular desarrollada con React Native CLI.",
    tags: ["React Native CLI", "JavaScript", "Mobile UI/UX", "Gaming Store"],
    github: "https://github.com/TheStevenDog/GameVault",
    featured: false,
    stats: { framework: "React Native CLI", type: "Catalog" }
  },
  {
    id: "svd-script",
    title: "SVD-Script — Compresión de Imágenes con IA",
    category: "ai",
    badge: "AUTOMATIZACIÓN EN PRODUCCIÓN",
    description: "Pipeline y motor automatizado en Python y PowerShell para optimización y compresión inteligente de imágenes en servidores, reduciendo drásticamente la carga y el ancho de banda.",
    tags: ["Python", "PowerShell", "Optimización de Carga", "Image Processing", "Automation"],
    github: "https://github.com/TheStevenDog/SVD-Script-PY",
    featured: true,
    stats: { perf: "Optimización Servidores", lang: "Python" }
  },
  {
    id: "landing-apex",
    title: "LandingPageApex — Apex Solutions Web",
    category: "web",
    badge: "ALTA PERFORMANCE",
    description: "Landing page corporativa moderna para Apex Solutions diseñada con altos estándares de usabilidad visual (UI/UX), CSS3 Grid y arquitectura web optimizada para conversión.",
    tags: ["JavaScript Moderno", "CSS3 Grid", "Performance", "Apex Solutions"],
    github: "https://github.com/TheStevenDog/LandingPageApex",
    featured: false,
    stats: { focus: "UI/UX & Performance", client: "Apex Solutions" }
  }
];

export const projectCategories = [
  { id: "all", name: "TODOS", filter: "*" },
  { id: "ai", name: "IA & AUTOMATIZACIÓN", filter: ".filter-ai" },
  { id: "mobile", name: "APPS MÓVILES", filter: ".filter-mobile" },
  { id: "web3", name: "BLOCKCHAIN & WEB3", filter: ".filter-web3" },
  { id: "web", name: "WEB & BACKEND", filter: ".filter-web" }
];
