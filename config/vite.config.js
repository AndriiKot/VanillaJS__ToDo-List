import { defineConfig } from "vite";
import { aliases } from "./path-aliases.js";

export default defineConfig({
  base: './',
  root: "frontend",
  resolve: {
    alias: aliases,
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


