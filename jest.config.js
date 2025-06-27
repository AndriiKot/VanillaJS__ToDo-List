import { aliases } from "./path-aliases.js";

const jestAliases = Object.entries(aliases).reduce((acc, [key, value]) => {
  const jestKey = key.replace("@", "^@?");
  const jestValue = typeof value === "string" ? value : value;
  acc[jestKey] = jestValue;
  return acc;
}, {});

export default {
  roots: ["<rootDir>/app"],
  testEnvironment: "jest-environment-jsdom",
  moduleFileExtensions: ["js", "json"],

  moduleNameMapper: {
    ...jestAliases,
  },

  collectCoverageFrom: [
    "scripts/**/*.{js}",
    "!scripts/test-utils/**",
    "!**/node_modules/**",
  ],
};
