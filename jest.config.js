import { jestAliases } from "./tools/jest/generateAliases.js";

export default {
  roots: ["<rootDir>/frontend"],
  testEnvironment: "jest-environment-jsdom",
  moduleFileExtensions: ["js", "json"],

  moduleNameMapper: {
    ...jestAliases,
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "frontend/**/*.js",
    "!frontend/**/index.js",
    "!frontend/tests/**",
  ],
  coverageDirectory: "coverage",
};
