import {defineConfig} from 'vite'
import {qwikVite} from '@builder.io/qwik/optimizer'
import {qwikCity} from '@builder.io/qwik-city/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [qwikCity(), qwikVite(), tsconfigPaths()],
  optimizeDeps: {
    include: [],
    // Put problematic deps that break bundling here, mostly those with binaries.
    // For example ['better-sqlite3'] if you use that in server functions.
    exclude: []
  },

  server: {
    headers: {
      // Don't cache the server response in dev mode
      'Cache-Control': 'public, max-age=0'
    }
  },
  preview: {
    headers: {
      // Do cache the server response in preview (non-adapter production build)
      'Cache-Control': 'public, max-age=600'
    }
  }
})
