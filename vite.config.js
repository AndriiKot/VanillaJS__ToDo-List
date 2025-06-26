import { defineConfig } from "vite";
import { aliases } from "./path-aliases.js";

export default defineConfig({
  root: "app",
  resolve: {
    alias: aliases,
  },
});
