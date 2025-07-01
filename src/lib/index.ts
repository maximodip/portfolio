import Tailwind from "@/icons/Tailwind.astro";
import React from "@/icons/React.astro";
import MySql from "@/icons/MySql.astro";
import Express from "@/icons/Express.astro";
import Boostrap from "@/icons/Bootstrap.astro";
import Astro from "@/icons/AstroIcon.astro";
import JavascriptIcon from "@/icons/JavascriptIcon.astro";
import Nextjs from "@/icons/Nextjs.astro";
import Prisma from "@/icons/Prisma.astro";
import Shadcn from "@/icons/Shadcn.astro";

export const navItems = [
  {
    title: "Studies",
    label: "studies",
    url: "/#studies",
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

export const TAGS = {
  SHADCN: {
    name: "Shadcn",
    class:
      "dark:bg-[#23272f] dark:text-white duration-200 border border-[#1f1f1f]",
    icon: Shadcn,
  },
  PRISMA: {
    name: "Prisma",
    class:
      "dark:bg-[#23272f] dark:text-white duration-200 border border-[#1f1f1f]",
    icon: Prisma,
  },
  NEXTJS: {
    name: "Next.js",
    class:
      "dark:bg-[#000000] dark:text-white duration-200 border border-[#1f1f1f]",
    icon: Nextjs,
  },
  JAVASCRIPT: {
    name: "JavaScript",
    class:
      "dark:bg-[#23272f] dark:text-white duration-200 border border-[#1f1f1f]",
    icon: JavascriptIcon,
  },
  ASTRO: {
    name: "Astro",
    class:
      "dark:bg-[#23272f] dark:text-white duration-200 border border-[#1f1f1f]",
    icon: Astro,
  },
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
