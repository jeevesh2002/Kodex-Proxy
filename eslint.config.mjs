import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    ignores: ['coverage/**'],
  },
  {
    files: ['**/*.js'],
    linterOptions: {
      reportUnusedDisableDirectives: false,
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
        ...globals.mocha,
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      'no-useless-escape': 'off',
    },
  },
];
