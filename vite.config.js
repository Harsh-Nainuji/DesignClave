// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/', // Use '/' for Vercel deployments
  build: {
    outDir: 'dist', // ✅ Vercel requires 'dist'
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    open: false
  }
})