import { TAGS } from "@/lib/index";

const PROJECTS_DATA = [
  {
    title: "Unit Converter",
    descriptionKey: "PROJECTS.UNIT_CONVERTER_DESCRIPTION",
    github: "https://github.com/maximodip/unit-converter",
    image: "/projects/unit-converter.png",
    tags: [TAGS.REACT, TAGS.TAILWIND, TAGS.SHADCN],
    link: "https://unit-converter-sable-nine.vercel.app/",
  },
  {
    title: "Marcelo Muebles",
    descriptionKey: "PROJECTS.MUEBLES_DESCRIPTION",
    github: "https://github.com/maximodip/marcelo-muebles",
    image: "/projects/marcelo-muebles.jpg",
    tags: [TAGS.ASTRO, TAGS.TAILWIND, TAGS.JAVASCRIPT],
    link: "https://marcelo-muebles-maximo-dips-projects.vercel.app/",
  },
  {
    title: "Cuentas Farmacia",
    descriptionKey: "PROJECTS.CUENTAS_FARMACIA_DESCRIPTION",
    github: "https://github.com/maximodip/prisma-farmacia",
    image: "/projects/cuentas-sisa.png",
    tags: [TAGS.NEXTJS, TAGS.PRISMA, TAGS.SHADCN, TAGS.MYSQL],
  },
  {
    title: "Stock App",
    descriptionKey: "PROJECTS.STOCK_APP_DESCRIPTION",
    github: "https://github.com/hugodanielcabral/proyectoprogramacion3",
    tags: [TAGS.REACT, TAGS.EXPRESS, TAGS.BOOSTRAP, TAGS.MYSQL],
  },
  {
    title: "Dog 360",
    descriptionKey: "PROJECTS.DOG_BREEDS_DESCRIPTION",
    github: "https://github.com/hugodanielcabral/dog360",
    image: "/projects/dog360.webp",
    tags: [TAGS.REACT, TAGS.EXPRESS, TAGS.TAILWIND, TAGS.MYSQL],
  },
];

export const getTranslatedProjects = (t: (key: string) => string) => {
  return PROJECTS_DATA.map((project) => {
    const { descriptionKey, ...rest } = project;
    return {
      ...rest,
      description: t(descriptionKey),
    };
  });
};
