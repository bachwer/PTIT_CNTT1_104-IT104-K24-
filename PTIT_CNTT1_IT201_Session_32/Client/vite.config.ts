import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  optimizeDeps: {
    exclude: [
      'fsevents',
      'lightningcss',
      '@tailwindcss/oxide'
    ]
  },
  ssr: {
    noExternal: ['@tailwindcss/oxide']
  }
})