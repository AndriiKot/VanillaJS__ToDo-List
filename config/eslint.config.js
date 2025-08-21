import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ignores: ["node_modules/", "coverage/", "dist/", ".git/"],
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.jest,
        ...globals.browser,
      },
    },
    plugins: {
      js,
    },
    rules: {
      ...js.configs.recommended.rules,
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
    },
  },
  {
    files: ["**/*.test.js"],
    languageOptions: {
      ecmaVersion: 2022, 
      sourceType: "module",
    },
    rules: {
      "no-await-in-loop": "off",
      "require-await": "off",
    },
  },
];
