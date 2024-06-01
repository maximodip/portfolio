import SpainFlag from "@/components/flags/Spain.astro";
import UnitedStatesFlag from "@/components/flags/UnitedStates.astro";
import BrasilFlag from "@/components/flags/Brasil.astro";

export const LANGUAGES: Record<
  string,
  { code: string; name: string; flag: typeof SpainFlag }
> = {
  es: {
    code: "es",
    name: "Español",
    flag: SpainFlag,
  },
  en: {
    code: "en",
    name: "English",
    flag: UnitedStatesFlag,
  },
  pt: {
    code: "pt",
    name: "Português",
    flag: BrasilFlag,
  },
};

export const defaultLang = "es";
export const showDefaultLang = false;

export const ui = {
  es: {
    "nav.studies": "Estudios",
    "nav.projects": "Proyectos",
    "nav.about": "Sobre mí",
    "nav.contact": "Contacto",
  },
  en: {
    "nav.studies": "Studies",
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.contact": "Contact",
  },
  pt: {
    "nav.studies": "Estudos",
    "nav.projects": "Projetos",
    "nav.about": "Sobre mim",
    "nav.contact": "Contato",
  },
} as const;

export const routes = {
  es: {},
  en: {},
  pt: {},
};
