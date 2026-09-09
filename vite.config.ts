import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    target: 'es2020',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('pdf-lib')) return 'pdf'
          if (id.includes('pdfjs-dist')) return 'pdfjs'
          if (id.includes('jszip')) return 'zip'
        }
      }
    }
  }
})
