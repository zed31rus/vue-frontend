// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import tsConfigPath from 'vite-tsconfig-paths';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ["./app/main.css"],

  devServer: {
    host: '0.0.0.0'
  },

  vite: {
    plugins: [
      tsConfigPath(),
      tailwindcss(),
    ],
    server: {
      allowedHosts: true
    }
  },

  routeRules: {
    "/soundpad": {
      ssr: false
    }
  },

  modules: ["reka-ui", 'motion-v/nuxt', '@pinia/nuxt', "@vueuse/nuxt"]
})