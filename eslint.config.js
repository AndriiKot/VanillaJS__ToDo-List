import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,cjs,mjs}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    plugins: {
      js,
    },
    rules: {
      ...js.configs.recommended.rules,
      'arrow-parens': 'off',
      'max-len': 'off',
      'comma-dangle': 'off',
      'quote-props': 'off',
      'operator-linebreak': 'off',
      semi: 'off',
      quotes: 'off',
      indent: 'off',
      'no-mixed-spaces-and-tabs': 'off',
      'no-multiple-empty-lines': 'off',
      'padded-blocks': 'off',
    },
  },
]);
