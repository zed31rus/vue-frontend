// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ["./app/main.css"],

  devServer: {
    host: '0.0.0.0'
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
    server: {
      allowedHosts: true
    }
  },

  modules: ["reka-ui", 'motion-v/nuxt', '@pinia/nuxt']
})