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
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

  moduleNameMapper: {
    ...jestAliases,
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },

  // Для покрытия кода
  collectCoverageFrom: [
    "scripts/**/*.{js,jsx}",
    "!scripts/test-utils/**",
    "!**/node_modules/**",
  ],
};
