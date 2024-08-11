// ts-chech

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import * as tsParser from '@typescript-eslint/parser'

export {tseslint}

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser
    }
  }
)
