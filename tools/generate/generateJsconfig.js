import fs from "node:fs";
import path from "node:path";
import { aliases } from "../../path-aliases.js";

const rootDir = process.cwd();

const relativePath = (absPath) =>
  path.relative(rootDir, absPath).replace(/\\/g, "/");

const jsconfig = {
  compilerOptions: {
    baseUrl: ".",
    paths: Object.fromEntries(
      Object.entries(aliases).map(([key, absPath]) => [
        key,
        [relativePath(absPath)],
      ])
    ),
  },
  include: ["app"],
};

export function generateJsconfig() {
  try {
    fs.writeFileSync("jsconfig.json", JSON.stringify(jsconfig, null, 2));
    console.log("✅ jsconfig.json updated.");
  } catch (err) {
    console.warn("⚠️ Failed to generate jsconfig.json:", err.message);
  }
}
