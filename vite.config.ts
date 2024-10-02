import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import mdx from '@mdx-js/rollup'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [mdx({ providerImportSource: '@mdx-js/react' }), TanStackRouterVite(), react()],
})
