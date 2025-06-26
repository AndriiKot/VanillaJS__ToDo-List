export default {
  roots: ["<rootDir>/app"],
  testEnvironment: "jest-environment-jsdom",
  moduleFileExtensions: ["js", "json"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

  moduleNameMapper: {
    "^@app/(.*)$": "<rootDir>/app/$1",
    "^@scripts/(.*)$": "<rootDir>/app/scripts/$1",

    "^@ui$": "<rootDir>/app/scripts/ui/index.js",
    "^@ui/(.*)$": "<rootDir>/app/scripts/ui/$1",

    "^@asserts$": "<rootDir>/app/scripts/asserts/index.js",
    "^@handlers$": "<rootDir>/app/scripts/handlers/index.js",
    "^@constants/(.*)$": "<rootDir>/app/scripts/constants/$1",

    "^@tests/(.*)$": "<rootDir>/app/tests/$1",
    "^@test-utils/(.*)$": "<rootDir>/app/tests/test-utils/$1",

    "^@utils$": "<rootDir>/app/scripts/utils.js",
    "^@task$": "<rootDir>/app/scripts/task.js",
    "^@main$": "<rootDir>/app/scripts/main.js",
    "^@selectors$": "<rootDir>/app/scripts/selectors.js",
    "^@html$": "<rootDir>/app/index.html",
    "^@assets/(.*)$": "<rootDir>/app/assets/$1",

    "^@VALID_HTML_TAGS$": "<rootDir>/app/scripts/constants/VALID_HTML_TAGS.js"
  }
};
