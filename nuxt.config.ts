import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/image",
    "@primevue/nuxt-module",
  ],
  primevue: {
    importTheme: { from: "~/theme.js" },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
