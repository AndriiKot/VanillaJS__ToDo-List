import { setGitHooks } from "./git/setGitHooks.js";
import { generateJsconfig } from "./generate/generateJsconfig.js";

function prepare() {
  setGitHooks();
  generateJsconfig();
}

prepare();
