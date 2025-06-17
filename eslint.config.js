const js = require("@eslint/js");
const globals = require("globals");
const { defineConfig } = require("eslint/config");

module.exports = defineConfig([
  {
    files: ["**/*.{js,cjs,mjs}"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "commonjs",
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    plugins: {
      js,
    },
    rules: Object.assign({}, js.configs.recommended.rules, {
      "arrow-parens": "off",
      "max-len": "off",
      "comma-dangle": "off",
      "quote-props": "off",
      "operator-linebreak": "off",
      semi: "off",
      quotes: "off",
      indent: "off",
      "no-mixed-spaces-and-tabs": "off",
      "no-multiple-empty-lines": "off",
      "padded-blocks": "off",
    }),
  },
]);
