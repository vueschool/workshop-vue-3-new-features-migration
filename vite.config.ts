import { fileURLToPath, URL } from "node:url";
import Pages from "vite-plugin-pages";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages({
      dirs: [
        { dir: "src/pages", baseRoute: "" },
        { dir: "src/completed/pages", baseRoute: "solutions" },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
