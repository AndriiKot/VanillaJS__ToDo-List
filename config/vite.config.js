import { defineConfig } from "vite";
import { aliases } from "./path-aliases.js";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  base: './',
  root: "frontend",
  resolve: {
    alias: aliases,
  },
  css: {
    postcss: path.resolve(__dirname, "postcss.config.js"),
  },
  build: {
    outDir: '../dist',           
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    open: true,
  }, 
});
