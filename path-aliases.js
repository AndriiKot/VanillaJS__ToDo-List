import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const root = path.resolve(__dirname, "app");

export const aliases = {
  "@app": root,
  "@scripts": path.join(root, "scripts"),
  "@ui": path.join(root, "scripts/ui"),
  "@asserts": path.join(root, "scripts/asserts"),
  "@handlers": path.join(root, "scripts/handlers"),
  "@tests": path.join(root, "tests"),
  "@test-utils": path.join(root, "tests/test-utils"),
  "@utils": path.join(root, "scripts/utils.js"),
  "@main": path.join(root, "scripts/main.js"),
  "@task": path.join(root, "scripts/task.js"),
  "@selectors": path.join(root, "scripts/selectors.js"),
  "@html": path.join(root, "index.html"),
  "@assets": path.join(root, "assets"),
//   "@constants": path.join(root, "scripts/constants"),
  "@VALID_HTML_TAGS": path.join(root, "scripts/constants/VALID_HTML_TAGS.js"),
};
