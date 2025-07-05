import { aliases } from "../../config/path-aliases.js";

export const jestAliases = Object.entries(aliases).reduce(
  (acc, [key, value]) => {
    const jestKey = key.replace("@", "^@?");
    const jestValue = typeof value === "string" ? value : value;
    acc[jestKey] = jestValue;
    return acc;
  },
  {},
);
