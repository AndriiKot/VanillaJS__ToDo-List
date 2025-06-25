import { defineConfig } from "vite";
import path from "node:path";

export default defineConfig({
  root: "app",
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "app"),
      "@scripts": path.resolve(__dirname, "app/scripts"),
      "@ui": path.resolve(__dirname, "app/scripts/ui"),
      "@asserts": path.resolve(__dirname, "app/scripts/asserts"),
      "@handlers": path.resolve(__dirname, "app/scripts/handlers"),
      "@tests": path.resolve(__dirname, "app/tests"),
      "@test-utils": path.resolve(__dirname, "app/tests/test-utils"),
      "@utils": path.resolve(__dirname, "app/scripts/utils.js"),
      "@selectors": path.resolve(__dirname, "app/scripts/selectors.js"),
      "@html": path.resolve(__dirname, "app/index.html"),
      "@assets": path.resolve(__dirname, "app/assets"),
      "@constants": path.resolve(__dirname, "app/scripts/constants"),
      "@VALID_HTML_TAGS": path.resolve(__dirname, "app/scripts/constants/VALID_HTML_TAGS.js"),
    },
  },
});
