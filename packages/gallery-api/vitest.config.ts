import {loadEnv} from 'vite'
import {defineConfig} from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(({mode}) => ({
  test: {
    clearMocks: true,
    coverage: {
      all: true,
      exclude: ['dist'],
      include: ['src'],
      reporter: ['html', 'lcov']
    },
    exclude: ['dist', 'node_modules'],
    env: loadEnv(mode, process.cwd(), '')
  },
  plugins: [tsconfigPaths()]
}))
