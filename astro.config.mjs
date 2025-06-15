// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://netronk.com",
  integrations: [sitemap(), react()],
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    imageService: true,
    includeFiles: ["./public/fonts/MontRegular.woff2"],
  }),
  experimental: {
    svg: true,
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
    ssr: {
      noExternal: ["smartypants"],
    },
  },
});
