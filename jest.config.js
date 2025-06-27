import { jestAliases } from "./tools/jest/generateAliases.js";

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
