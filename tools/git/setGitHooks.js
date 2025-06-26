import { execSync } from "node:child_process";

export function setGitHooks() {
  try {
    console.log("🔧 Setting git hooks path...");
    execSync("git config core.hooksPath .git-hooks", { stdio: "inherit" });
  } catch (err) {
    console.warn("⚠️ Failed to set Git hooks:", err.message);
  }
}
