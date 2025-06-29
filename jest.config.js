import { jestAliases } from "./tools/jest/generateAliases.js";

export default {
  roots: ["<rootDir>/frontend"],
  testEnvironment: "jest-environment-jsdom",
  moduleFileExtensions: ["js", "json"],

  moduleNameMapper: {
    ...jestAliases,
  },
  collectCoverage: false,
  collectCoverageFrom: [
    "frontend/**/*.js",
    "!frontend/**/index.js",
    "!frontend/tests/**",
    "!frontend/assets/**",
  ],
  coverageDirectory: "coverage",
};
