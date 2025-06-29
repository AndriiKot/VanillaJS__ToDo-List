import { setGitHooks } from "./git/setGitHooks.js";
import { generateJsConfig } from "./generateJsConfig.js";

function prepare() {
  setGitHooks();
  generateJsConfig();
}

prepare();
