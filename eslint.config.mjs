import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ['*.dev.js'],
  },
  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
      globals: {
        es2022: true,
        browser: true,
        node: true,
      },
    },
    plugins: { '@typescript-eslint': tseslint.plugin },
    files: ['src/*.ts'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',
      'no-debugger': 0,
      '@typescript-eslint/no-var-requires': 0,
    },
  },
]
