import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import globals from 'globals'

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ['node_modules/', 'dist/', 'build/'],
  },
  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2025,
      },
    },
    plugins: { '@typescript-eslint': tseslint.plugin },
    files: ['src/**/*.ts'],
    rules: {
      'no-debugger': 'off',
      'no-extra-boolean-cast': 'off',
      //
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
]
