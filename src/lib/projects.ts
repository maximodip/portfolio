import { TAGS } from "@/lib/index";
import type { I18nTranslations } from "@/i18n/types";
import { GitHubService, parseGitHubUrl, type GitHubRepo } from "@/lib/github";
import {
  GITHUB_PROJECTS_CONFIG,
  DEFAULT_GITHUB_USERNAME,
  GITHUB_CONFIG,
  type GitHubProjectConfig,
} from "@/lib/github-projects-config";

export interface Project {
  title: string;
  description: string;
  github: string;
  image?: string;
  tags: Array<(typeof TAGS)[keyof typeof TAGS]>;
  link?: string;
  featured?: boolean;
  order?: number;
  // Datos adicionales de GitHub
  githubData?: {
    stars: number;
    forks: number;
    language: string | null;
    topics: string[];
    updatedAt: string;
  };
}

export interface ProjectData {
  title: string;
  descriptionKey: keyof I18nTranslations["PROJECTS"];
  github: string;
  image?: string;
  tags: Array<(typeof TAGS)[keyof typeof TAGS]>;
  link?: string;
}

// Proyectos estáticos como fallback
const STATIC_PROJECTS_DATA: ProjectData[] = [
  {
    title: "Unit Converter",
    descriptionKey: "UNIT_CONVERTER_DESCRIPTION",
    github: "https://github.com/maximodip/unit-converter",
    image: "/projects/unit-converter.png",
    tags: [TAGS.REACT, TAGS.TAILWIND, TAGS.SHADCN],
    link: "https://unit-converter-sable-nine.vercel.app/",
  },
  {
    title: "Marcelo Muebles",
    descriptionKey: "MUEBLES_DESCRIPTION",
    github: "https://github.com/maximodip/marcelo-muebles",
    image: "/projects/marcelo-muebles.jpg",
    tags: [TAGS.ASTRO, TAGS.TAILWIND, TAGS.JAVASCRIPT],
    link: "https://marcelomuebles.vercel.app/",
  },
  {
    title: "Cuentas Farmacia",
    descriptionKey: "CUENTAS_FARMACIA_DESCRIPTION",
    github: "https://github.com/maximodip/prisma-farmacia",
    image: "/projects/cuentas-sisa.png",
    tags: [TAGS.NEXTJS, TAGS.PRISMA, TAGS.SHADCN, TAGS.MYSQL],
  },
  {
    title: "Maximize IA",
    descriptionKey: "MAXIMIZE_IA_DESCRIPTION",
    github: "https://github.com/maximodip/maximize-ia",
    image: "/projects/maximizeia.png",
    tags: [TAGS.REACT, TAGS.NEXTJS, TAGS.TAILWIND],
    link: "https://maximizeia.com",
  },
  {
    title: "BC Propiedades",
    descriptionKey: "BC_PROPIEDADES_DESCRIPTION",
    github: "https://github.com/maximodip/bc-propiedades",
    image: "/projects/bc-inmobiliaria.png",
    tags: [TAGS.NEXTJS, TAGS.TAILWIND, TAGS.JAVASCRIPT],
    link: "https://b-c-propiedades-p8lm167v8-maximo-dips-projects.vercel.app/",
  },
];

// Función para obtener proyectos desde GitHub
const getProjectsFromGitHub = async (
  i18n: I18nTranslations,
): Promise<Project[]> => {
  const githubService = new GitHubService();
  const projects: Project[] = [];

  try {
    // Procesar cada proyecto configurado
    for (const config of GITHUB_PROJECTS_CONFIG) {
      const { owner, repo } = parseRepoName(config.repoName);

      try {
        // Obtener datos del repositorio
        const repoData = await githubService.getRepository(owner, repo);

        if (repoData) {
          const project = await createProjectFromGitHub(repoData, config, i18n);
          projects.push(project);
        } else {
          // Si no se puede obtener de GitHub, usar configuración estática
          console.warn(
            `Could not fetch GitHub data for ${config.repoName}, using static config`,
          );
          const staticProject = createProjectFromConfig(config, i18n);
          projects.push(staticProject);
        }
      } catch (error) {
        console.error(`Error fetching project ${config.repoName}:`, error);
        // Fallback a configuración estática
        const staticProject = createProjectFromConfig(config, i18n);
        projects.push(staticProject);
      }
    }

    // Ordenar proyectos
    return sortProjects(projects);
  } catch (error) {
    console.error("Error fetching GitHub projects:", error);

    // Fallback completo a proyectos estáticos
    if (GITHUB_CONFIG.fallbackToStatic) {
      return getStaticProjects(i18n);
    }

    return [];
  }
};

// Función helper para parsear nombre del repo
const parseRepoName = (repoName: string): { owner: string; repo: string } => {
  if (repoName.includes("/")) {
    const [owner, repo] = repoName.split("/");
    return { owner, repo };
  }
  return { owner: DEFAULT_GITHUB_USERNAME, repo: repoName };
};

// Crear proyecto desde datos de GitHub
const createProjectFromGitHub = async (
  repoData: GitHubRepo,
  config: GitHubProjectConfig,
  i18n: I18nTranslations,
): Promise<Project> => {
  const title = config.title || repoData.name;
  const description = config.descriptionKey
    ? i18n.PROJECTS[config.descriptionKey] || config.descriptionKey
    : config.customDescription ||
      repoData.description ||
      "No description available";

  return {
    title,
    description,
    github: repoData.html_url,
    image: config.image,
    tags: config.tags,
    link: config.link || repoData.homepage || undefined,
    featured: config.featured,
    order: config.order,
    githubData: {
      stars: repoData.stargazers_count,
      forks: repoData.forks_count,
      language: repoData.language,
      topics: repoData.topics || [],
      updatedAt: repoData.updated_at,
    },
  };
};

// Crear proyecto desde configuración (fallback)
const createProjectFromConfig = (
  config: GitHubProjectConfig,
  i18n: I18nTranslations,
): Project => {
  const { owner, repo } = parseRepoName(config.repoName);
  const title = config.title || repo;
  const description = config.descriptionKey
    ? i18n.PROJECTS[config.descriptionKey] || config.descriptionKey
    : config.customDescription || "No description available";

  return {
    title,
    description,
    github: `https://github.com/${owner}/${repo}`,
    image: config.image,
    tags: config.tags,
    link: config.link,
    featured: config.featured,
    order: config.order,
  };
};

// Función para ordenar proyectos
const sortProjects = (projects: Project[]): Project[] => {
  return projects.sort((a, b) => {
    // Primero por orden específico
    if (a.order !== undefined && b.order !== undefined) {
      return a.order - b.order;
    }
    if (a.order !== undefined) return -1;
    if (b.order !== undefined) return 1;

    // Luego por destacados
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;

    // Finalmente por fecha de actualización si está disponible
    if (GITHUB_CONFIG.sortByUpdatedDate && a.githubData && b.githubData) {
      return (
        new Date(b.githubData.updatedAt).getTime() -
        new Date(a.githubData.updatedAt).getTime()
      );
    }

    return 0;
  });
};

// Función para obtener proyectos estáticos (fallback)
const getStaticProjects = (i18n: I18nTranslations): Project[] => {
  return STATIC_PROJECTS_DATA.map((project) => {
    const { descriptionKey, ...rest } = project;
    return {
      ...rest,
      description: i18n.PROJECTS[descriptionKey] || descriptionKey,
    };
  });
};

// Función principal para obtener proyectos traducidos
export const getTranslatedProjects = async (
  i18n: I18nTranslations,
): Promise<Project[]> => {
  try {
    // Intentar obtener desde GitHub
    const githubProjects = await getProjectsFromGitHub(i18n);

    // Filtrar si solo se quieren destacados
    let projects = GITHUB_CONFIG.showOnlyFeatured
      ? githubProjects.filter((p) => p.featured)
      : githubProjects;

    // Limitar número de proyectos
    if (GITHUB_CONFIG.maxProjects > 0) {
      projects = projects.slice(0, GITHUB_CONFIG.maxProjects);
    }

    return projects;
  } catch (error) {
    console.error("Error getting translated projects:", error);
    // Fallback final a proyectos estáticos
    return getStaticProjects(i18n);
  }
};

// Función síncrona como fallback (mantiene compatibilidad)
export const getTranslatedProjectsSync = (
  i18n: I18nTranslations,
): Project[] => {
  return getStaticProjects(i18n);
};
