import eslintConfig, {tseslint} from '@kaleidoscalp/eslint-config'
import qwik from 'eslint-plugin-qwik'

export default tseslint.config(...eslintConfig, {
  files: ['**/*.{ts,tsx}'],
  plugins: {qwik},
  languageOptions: {
    parserOptions: {
      project: 'tsconfig.json'
    }
  },
  rules: {
    'qwik/use-method-usage': 'error',
    'qwik/valid-lexical-scope': 'error',
    'qwik/loader-location': 'error',
    'qwik/no-react-props': 'error',
    'qwik/jsx-no-script-url': 'error',
    'qwik/jsx-key': 'error',
    'qwik/unused-server': 'error',
    'qwik/jsx-a': 'error',
    'qwik/no-use-visible-task': 'error'
  }
})
