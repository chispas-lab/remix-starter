import { defineConfig } from 'vite'
import { installGlobals } from '@remix-run/node'
import react from '@vitejs/plugin-react'
import { vitePlugin as remix } from '@remix-run/dev'
import tsconfigPaths from 'vite-tsconfig-paths'

installGlobals()

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    process.env.VITEST
      ? react()
      : remix({
          appDirectory: 'app',
          ignoredRouteFiles: ['**/.*'],
          future: {},
          serverModuleFormat: 'esm',
        }),
  ],
  test: {
    clearMocks: true,
    environment: 'happy-dom',
    globals: false,
    passWithNoTests: true,
    setupFiles: ['./tests/setup-test-env.ts'],
    watch: false,
  },
})
