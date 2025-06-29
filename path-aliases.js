import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const frontend = path.resolve(__dirname, "frontend");

export const aliases = {
  "@frontend": frontend,
  "@assets": path.join(frontend, "assets"),
  "@scripts": path.join(frontend, "scripts"),
  "@asserts": path.join(frontend, "scripts/asserts"),
  "@features": path.join(frontend, "scripts/features"),
  "@ui": path.join(frontend, "scripts/ui"),
  "@utils": path.join(frontend, "scripts/utils"),
  "@app": path.join(frontend, "scripts/app.js"),
  "@html": path.join(frontend, "index.html"),
};
