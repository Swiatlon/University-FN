// DUE SOME OLD PACKAGES WE DONT HAVE TYPES FOR IT
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import eslint from '@eslint/js';
import eslintCommentsPlugin from 'eslint-plugin-eslint-comments';
import importPlugin from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import securityPlugin from 'eslint-plugin-security';
import sonarjsPlugin from 'eslint-plugin-sonarjs';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import tseslint from 'typescript-eslint';

export default tseslint.config(eslint.configs.recommended, tseslint.configs.strict, tseslint.configs.stylistic, {
  languageOptions: {
    parserOptions: {
      projectService: true,
      tsconfigRootDir: './tsconfig.json',
    },
  },
  plugins: {
    react: reactPlugin,
    'jsx-a11y': jsxA11yPlugin,
    security: securityPlugin,
    sonarjs: sonarjsPlugin,
    'unused-imports': unusedImportsPlugin,
    'eslint-comments': eslintCommentsPlugin,
    'react-hooks': reactHooksPlugin,
    prettier: prettierPlugin,
    import: importPlugin,
  },
  rules: {
    'import/order': [
      'error',
      {
        groups: [
          'external', // External modules (e.g., lodash, axios)
          'builtin', // Node.js built-in modules (e.g., fs, path)
          'internal', // Internal project modules
          'parent', // Parent imports (e.g., ../utils)
          'sibling', // Sibling imports (e.g., ./Component)
          'index', // Index imports (e.g., ./, ../index)
          'object', // Imports that assign variables from an object
          'type', // TypeScript type imports
        ],
        pathGroups: [
          {
            pattern: 'react*',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@mui/**',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'assets/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'Components/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '**/*.scss',
            group: 'type',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'never',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/no-empty-object-type': 'off',
    'react/no-multi-comp': 'off',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'max-lines': ['error', { max: 500, skipBlankLines: true }],
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'react/prop-types': 'off',
    'capitalized-comments': ['off'],
    'max-params': 'off',
    '@typescript-eslint/max-params': 'off',
    'react/function-component-definition': ['off'],
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    'no-warning-comments': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-invalid-void-type': 'off',
    'no-console': ['warn', { allow: ['warn'] }],
    '@typescript-eslint/no-use-before-define': 'off',
    'import/no-unresolved': 'off',
    'react/jsx-sort-props': 'off',
    'no-underscore-dangle': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-no-bind': 'off',
    'no-magic-numbers': 'off',
    'no-undefined': 'off',
    '@typescript-eslint/no-magic-numbers': 'off',
    'id-length': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'unused-imports/no-unused-imports': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'max-statements': 'off',
    'eslint-comments/no-unused-disable': 'error',
    'sonarjs/cognitive-complexity': ['error', 15],
    'sonarjs/no-duplicate-string': 'error',
    'prettier/prettier': ['error', { endOfLine: 'auto', printWidth: 120 }],
    '@typescript-eslint/naming-convention': ['off'],
    'react/jsx-no-literals': 'off',
    'react/forbid-component-props': ['off'],
    'react/jsx-max-depth': 'off',
    'max-lines-per-function': ['off'],
    'one-var': ['off'],
    'sort-imports': 'off',
    'sort-keys': 'off',
    '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'explicit' }],
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/require-await': 'error',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: false }],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/member-ordering': 'error',
    'no-unused-expressions': 'off',
    'prefer-object-spread': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'error',
    '@typescript-eslint/no-unsafe-call': 'error',
    '@typescript-eslint/no-unsafe-member-access': 'error',
    '@typescript-eslint/no-unsafe-return': 'error',
    '@typescript-eslint/consistent-type-exports': 'error',
    'no-extra-boolean-cast': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    'import/no-duplicates': 'error',
    'no-ternary': 'off',
    '@typescript-eslint/no-unused-expressions': ['error'],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': ['off'],
    'func-style': 'off',
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    'react/prefer-read-only-props': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignores: ['node_modules/', 'dist/', 'vite.config.ts'],
});
