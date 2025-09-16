import { TAGS } from "@/lib/index";
import type { GitHubProjectConfig } from "@/lib/github";

// Configuración de proyectos de GitHub que quieres mostrar
// Solo necesitas agregar aquí los repositorios que quieres que aparezcan en tu portfolio
export const GITHUB_PROJECTS_CONFIG: GitHubProjectConfig[] = [
  {
    repoName: "unit-converter",
    title: "Unit Converter",
    descriptionKey: "UNIT_CONVERTER_DESCRIPTION", // Usa la traducción existente
    image: "/projects/unit-converter.png",
    tags: [TAGS.REACT, TAGS.TAILWIND, TAGS.SHADCN],
    featured: true,
    order: 1,
  },
  {
    repoName: "marcelo-muebles",
    title: "Marcelo Muebles",
    descriptionKey: "MUEBLES_DESCRIPTION",
    image: "/projects/marcelo-muebles.jpg",
    tags: [TAGS.ASTRO, TAGS.TAILWIND, TAGS.JAVASCRIPT],
    featured: true,
    order: 2,
    link: "https://marcelomuebles.vercel.app/",
  },
  {
    repoName: "prisma-farmacia",
    title: "Cuentas Farmacia",
    descriptionKey: "CUENTAS_FARMACIA_DESCRIPTION",
    image: "/projects/cuentas-sisa.png",
    tags: [TAGS.NEXTJS, TAGS.PRISMA, TAGS.SHADCN, TAGS.MYSQL],
    featured: true,
    order: 3,
  },
  {
    repoName: "maximize-ia",
    title: "Maximize IA",
    descriptionKey: "MAXIMIZE_IA_DESCRIPTION",
    image: "/projects/maximizeia.png",
    tags: [TAGS.REACT, TAGS.NEXTJS, TAGS.TAILWIND],
    featured: true,
    order: 4,
    link: "https://maximizeia.com",
  },
  {
    repoName: "bc-propiedades",
    title: "BC Propiedades",
    descriptionKey: "BC_PROPIEDADES_DESCRIPTION",
    image: "/projects/bc-inmobiliaria.png",
    tags: [TAGS.NEXTJS, TAGS.TAILWIND, TAGS.JAVASCRIPT],
    featured: true,
    order: 5,
    link: "https://b-c-propiedades-p8lm167v8-maximo-dips-projects.vercel.app/",
  },
  // Comentados porque daban 404 (no existen o son privados)
  // {
  //   repoName: "hugodanielcabral/proyectoprogramacion3",
  //   title: "Stock App",
  //   descriptionKey: "STOCK_APP_DESCRIPTION",
  //   tags: [TAGS.REACT, TAGS.EXPRESS, TAGS.BOOSTRAP, TAGS.MYSQL],
  //   order: 4,
  // },
  // {
  //   repoName: "hugodanielcabral/dog360",
  //   title: "Dog 360",
  //   descriptionKey: "DOG_BREEDS_DESCRIPTION",
  //   image: "/projects/dog360.webp",
  //   tags: [TAGS.REACT, TAGS.EXPRESS, TAGS.TAILWIND, TAGS.MYSQL],
  //   order: 5,
  // },
];

// Tu nombre de usuario de GitHub principal
export const DEFAULT_GITHUB_USERNAME = "maximodip";

// Configuración adicional
export const GITHUB_CONFIG = {
  // Mostrar solo proyectos destacados por defecto
  showOnlyFeatured: false,

  // Número máximo de proyectos a mostrar
  maxProjects: 10,

  // Ordenar por fecha de actualización si no hay orden específico
  sortByUpdatedDate: true,

  // Fallback a proyectos estáticos si falla la API de GitHub
  fallbackToStatic: true,

  // Cachear datos de GitHub por tiempo (en minutos)
  cacheTime: 60,
};
