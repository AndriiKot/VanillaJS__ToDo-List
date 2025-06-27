import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const root = path.resolve(__dirname, "app");

export const aliases = {
  "@app": root,
  "@scripts": path.join(root, "scripts"),
  "@components": path.join(root, "scripts/components"),
  "@config": path.join(root, "scripts/config"),
  "@ui": path.join(root, "scripts/ui"),
  "@asserts": path.join(root, "scripts/asserts"),
  "@handlers": path.join(root, "scripts/handlers"),
  "@tests": path.join(root, "tests"),
  "@test-utils": path.join(root, "tests/test-utils"),
  "@utils": path.join(root, "scripts/utils/"),
  "@main": path.join(root, "scripts/main.js"),
  "@task": path.join(root, "scripts/core/"),
  "@selectors": path.join(root, "scripts/core/"),
  "@html": path.join(root, "index.html"),
  "@assets": path.join(root, "assets"),
  "@VALID_HTML_TAGS": path.join(root, "scripts/config/"),
};
