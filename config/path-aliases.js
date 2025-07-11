import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const root = path.resolve(__dirname, "..");
const frontend = path.resolve(root, "frontend");

export const aliases = {
  "@frontend": frontend,
  "@assets": path.join(frontend, "assets"),
  "@scripts": path.join(frontend, "scripts"),
  "@asserts": path.join(frontend, "scripts/asserts"),
  "@features": path.join(frontend, "scripts/features"),
  "@services": path.join(frontend, "scripts/services"),
  "@ui": path.join(frontend, "scripts/ui"),
  "@utils": path.join(frontend, "scripts/utils"),
  "@app": path.join(frontend, "scripts/app.js"),
  "@html": path.join(frontend, "index.html"),
};
