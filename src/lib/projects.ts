import { TAGS } from "@/lib/index";
import type { I18nTranslations } from "@/i18n/types";

export interface Project {
  title: string;
  description: string;
  github: string;
  image?: string;
  tags: Array<(typeof TAGS)[keyof typeof TAGS]>;
  link?: string;
}

export interface ProjectData {
  title: string;
  descriptionKey: keyof I18nTranslations["PROJECTS"];
  github: string;
  image?: string;
  tags: Array<(typeof TAGS)[keyof typeof TAGS]>;
  link?: string;
}

const PROJECTS_DATA: ProjectData[] = [
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
    link: "https://marcelo-muebles-maximo-dips-projects.vercel.app/",
  },
  {
    title: "Cuentas Farmacia",
    descriptionKey: "CUENTAS_FARMACIA_DESCRIPTION",
    github: "https://github.com/maximodip/prisma-farmacia",
    image: "/projects/cuentas-sisa.png",
    tags: [TAGS.NEXTJS, TAGS.PRISMA, TAGS.SHADCN, TAGS.MYSQL],
  },
  {
    title: "Stock App",
    descriptionKey: "STOCK_APP_DESCRIPTION",
    github: "https://github.com/hugodanielcabral/proyectoprogramacion3",
    tags: [TAGS.REACT, TAGS.EXPRESS, TAGS.BOOSTRAP, TAGS.MYSQL],
  },
  {
    title: "Dog 360",
    descriptionKey: "DOG_BREEDS_DESCRIPTION",
    github: "https://github.com/hugodanielcabral/dog360",
    image: "/projects/dog360.webp",
    tags: [TAGS.REACT, TAGS.EXPRESS, TAGS.TAILWIND, TAGS.MYSQL],
  },
];

export const getTranslatedProjects = (i18n: I18nTranslations): Project[] => {
  return PROJECTS_DATA.map((project) => {
    const { descriptionKey, ...rest } = project;
    return {
      ...rest,
      description: i18n.PROJECTS[descriptionKey] || descriptionKey,
    };
  });
};
