import Tailwind from "@/icons/Tailwind.astro";
import React from "@/icons/React.astro";
import MySql from "@/icons/MySql.astro";
import Express from "@/icons/Express.astro";
import Boostrap from "@/icons/Bootstrap.astro";

export const navItems = [
  {
    title: "Experience",
    label: "experience",
    url: "/#experience",
  },
  {
    title: "Projects",
    label: "projects",
    url: "/#projects",
  },
  {
    title: "About",
    label: "about",
    url: "/#about",
  },
  {
    title: "Contact",
    label: "contact",
    url: "mailto:maximodipaparicio@gmail.com",
  },
];

const TAGS = {
  TAILWIND: {
    name: "Tailwind",
    class:
      "dark:bg-[#003159] dark:text-white duration-200 border border-[#1f1f1f]",
    icon: Tailwind,
  },
  REACT: {
    name: "React",
    class:
      "dark:bg-[#23272f] dark:text-white duration-200 border border-[#1f1f1f]",
    icon: React,
  },
  MYSQL: {
    name: "MySql",
    class:
      "dark:bg-[#23272f] dark:text-white duration-200 border border-[#1f1f1f]",
    icon: MySql,
  },
  EXPRESS: {
    name: "Express",
    class:
      "dark:bg-[#23272f] dark:text-white duration-200 border border-[#1f1f1f]",
    icon: Express,
  },
  BOOSTRAP: {
    name: "Boostrap",
    class:
      "dark:bg-[#23272f] dark:text-white duration-200 border border-[#1f1f1f]",
    icon: Boostrap,
  },
};

export const PROJECTS = [
  {
    title: "Stock App",
    description:
      "My application offers a seamless and user-friendly experience, empowering users with the ability to add, edit, and delete various product types across different categories, all in one centralized platform.",
    github: "https://github.com/hugodanielcabral/proyectoprogramacion3",
    tags: [TAGS.REACT, TAGS.EXPRESS, TAGS.BOOSTRAP, TAGS.MYSQL],
  },
  {
    title: "Dog 360",
    description:
      "Tailored to meet the unique needs of veterinary practices, our application seamlessly integrates appointment scheduling, detailed dog profiles, and user roles for a comprehensive and efficient solution.",
    github: "https://github.com/hugodanielcabral/dog360",
    image: "/projects/dog360.webp",
    tags: [TAGS.REACT, TAGS.EXPRESS, TAGS.TAILWIND, TAGS.MYSQL],
  },
];
