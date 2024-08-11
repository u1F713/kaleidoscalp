import eslintConfig, {tseslint} from '@kaleidoscalp/eslint-config'
import solid from 'eslint-plugin-solid/configs/typescript.js'

export default tseslint.config(...eslintConfig, {
  files: ['**/*.{ts,tsx}'],
  ...solid,
  languageOptions: {
    parserOptions: {
      project: 'tsconfig.json'
    }
  }
})
