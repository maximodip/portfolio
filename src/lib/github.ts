import type { TAGS } from "@/lib/index";

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  created_at: string;
  updated_at: string;
  pushed_at: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
}

export interface GitHubProjectConfig {
  repoName: string;
  title?: string; // Si no se proporciona, usa el nombre del repo
  descriptionKey?: string; // Clave para i18n, si no se proporciona usa la descripción del repo
  customDescription?: string; // Descripción personalizada en lugar de la del repo
  image?: string;
  tags: Array<(typeof TAGS)[keyof typeof TAGS]>;
  featured?: boolean; // Para destacar ciertos proyectos
  order?: number; // Para ordenar los proyectos
  link?: string; // Link al proyecto
}

export class GitHubService {
  private baseUrl = "https://api.github.com";
  private token: string | undefined;
  private username: string | undefined;

  constructor() {
    // Variables de entorno públicas con prefijo PUBLIC_
    this.token = import.meta.env.PUBLIC_GITHUB_TOKEN;
    this.username = import.meta.env.PUBLIC_GITHUB_USERNAME;

    // Debug log para verificar configuración
    if (this.token && this.username) {
      console.log(`✅ GitHub API configurado para usuario: ${this.username}`);
    } else {
      console.log("⚠️ GitHub API no configurado - usando datos estáticos");
      if (!this.token) console.log("   - Falta PUBLIC_GITHUB_TOKEN");
      if (!this.username) console.log("   - Falta PUBLIC_GITHUB_USERNAME");
    }
  }

  private async makeRequest(endpoint: string): Promise<any> {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "Portfolio-App",
    };

    if (this.token) {
      headers["Authorization"] = `Bearer ${this.token}`;
    }

    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, { headers });

      if (!response.ok) {
        console.warn(
          `GitHub API request failed: ${response.status} ${response.statusText}`,
        );
        return null;
      }

      return await response.json();
    } catch (error) {
      console.error("Error making GitHub API request:", error);
      return null;
    }
  }

  async getRepository(owner: string, repo: string): Promise<GitHubRepo | null> {
    return await this.makeRequest(`/repos/${owner}/${repo}`);
  }

  async getUserRepositories(username?: string): Promise<GitHubRepo[]> {
    const user = username || this.username;
    if (!user) {
      console.warn("No GitHub username provided");
      return [];
    }

    const repos = await this.makeRequest(
      `/users/${user}/repos?sort=updated&per_page=100`,
    );
    return repos || [];
  }

  async getRepositoryLanguages(
    owner: string,
    repo: string,
  ): Promise<Record<string, number> | null> {
    return await this.makeRequest(`/repos/${owner}/${repo}/languages`);
  }

  async getRepositoryReadme(
    owner: string,
    repo: string,
  ): Promise<string | null> {
    const readme = await this.makeRequest(`/repos/${owner}/${repo}/readme`);
    if (!readme?.content) return null;

    try {
      // El contenido viene en base64
      return atob(readme.content.replace(/\n/g, ""));
    } catch (error) {
      console.error("Error decoding README:", error);
      return null;
    }
  }

  // Método para obtener información extendida de un repositorio
  async getRepositoryDetails(owner: string, repo: string) {
    const [repoData, languages, readme] = await Promise.all([
      this.getRepository(owner, repo),
      this.getRepositoryLanguages(owner, repo),
      this.getRepositoryReadme(owner, repo),
    ]);

    return {
      repository: repoData,
      languages,
      readme,
    };
  }
}

// Función helper para extraer el owner y repo de una URL de GitHub
export const parseGitHubUrl = (
  url: string,
): { owner: string; repo: string } | null => {
  const match = url.match(/github\.com\/([^\/]+)\/([^\/]+)/);
  if (!match) return null;

  return {
    owner: match[1],
    repo: match[2].replace(/\.git$/, ""), // Remover .git si existe
  };
};

// Función para mapear lenguajes de GitHub a nuestros tags
// Esta función debe ser llamada con TAGS importado externamente para evitar importaciones circulares
export const mapLanguageToTags = (
  language: string | null,
  topics: string[] = [],
  TAGS: any,
): Array<any> => {
  const tags: Array<any> = [];

  // Mapeo basado en el lenguaje principal
  switch (language?.toLowerCase()) {
    case "javascript":
      if (TAGS.JAVASCRIPT) tags.push(TAGS.JAVASCRIPT);
      break;
    case "typescript":
      if (TAGS.JAVASCRIPT) tags.push(TAGS.JAVASCRIPT); // Asumimos que tienes un tag para JS/TS
      break;
    case "python":
      // Si tienes un tag para Python, agrégalo aquí
      break;
  }

  // Mapeo basado en topics
  topics.forEach((topic) => {
    switch (topic.toLowerCase()) {
      case "react":
      case "reactjs":
        if (TAGS.REACT) tags.push(TAGS.REACT);
        break;
      case "nextjs":
      case "next":
        if (TAGS.NEXTJS) tags.push(TAGS.NEXTJS);
        break;
      case "astro":
        if (TAGS.ASTRO) tags.push(TAGS.ASTRO);
        break;
      case "tailwindcss":
      case "tailwind":
        if (TAGS.TAILWIND) tags.push(TAGS.TAILWIND);
        break;
      case "prisma":
        if (TAGS.PRISMA) tags.push(TAGS.PRISMA);
        break;
      case "mysql":
        if (TAGS.MYSQL) tags.push(TAGS.MYSQL);
        break;
      case "express":
        if (TAGS.EXPRESS) tags.push(TAGS.EXPRESS);
        break;
      case "bootstrap":
        if (TAGS.BOOSTRAP) tags.push(TAGS.BOOSTRAP);
        break;
    }
  });

  // Si no encontramos tags específicos, agregar uno genérico basado en el lenguaje
  if (tags.length === 0 && language && TAGS.JAVASCRIPT) {
    tags.push(TAGS.JAVASCRIPT); // Tag por defecto
  }

  return tags;
};
