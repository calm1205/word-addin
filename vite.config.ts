import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import fs from "fs";
import { pathToFileURL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 9999,
    https: {
      key: fs.readFileSync("./src/ssl/localhost.key"),
      cert: fs.readFileSync("./src/ssl/localhost.crt"),
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": `${pathToFileURL("./src").pathname}`,
    },
  },
});
