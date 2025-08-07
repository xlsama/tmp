import tailwindcss from "@tailwindcss/vite";
import { definePreset } from "@primeuix/themes";
import Aura from "@primeuix/themes/aura";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Nuxt App",
    },
  },
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
    options: {
      theme: {
        preset: definePreset(Aura, {
          semantic: {
            primary: {
              50: "#f2f7f5",
              100: "#c2dad1",
              200: "#91bcad",
              300: "#619f89",
              400: "#308164",
              500: "#006440",
              600: "#005536",
              700: "#00462d",
              800: "#003723",
              900: "#00281a",
              950: "#001910",
            },
          },
        }),
      },
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  imports: {
    presets: [{ from: "dayjs", imports: [{ name: "default", as: "dayjs" }] }],
  },
});
