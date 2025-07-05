import { defineConfig } from "vite";
import { aliases } from "./config/path-aliases.js";

export default defineConfig({
  root: "frontend",
  resolve: {
    alias: aliases,
  },
});
