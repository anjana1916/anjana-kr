import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/anjana-kr/', // ← Add this line (crucial for GH Pages)
  build: {
    outDir: 'dist', // ← Ensure this matches your build folder
  }
})
