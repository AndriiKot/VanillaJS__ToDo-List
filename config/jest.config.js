import { jestAliases } from "../tools/jest/generateAliases.js";

export default {
  rootDir: "../",
  roots: ["<rootDir>/frontend"],
  testEnvironment: "jest-environment-jsdom",
  moduleFileExtensions: ["js", "json"],

  moduleNameMapper: {
    ...jestAliases,
  },
  collectCoverageFrom: [
    "**/*.js",
    "!**/index.js",
    "!assets/**",
  ],
  coverageDirectory: "<rootDir>/coverage",
};
