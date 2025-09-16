import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en", "pt"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [tailwind()],
  // Variables de entorno públicas (prefijo PUBLIC_)
  env: {
    schema: {
      PUBLIC_GITHUB_TOKEN: {
        context: "client",
        access: "public",
        type: "string",
        optional: true,
      },
      PUBLIC_GITHUB_USERNAME: {
        context: "client",
        access: "public",
        type: "string",
        optional: true,
      },
    },
  },
});
