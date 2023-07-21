import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  performance: {
    chunkSizeWarningLimit: 2097152, // 2 MB in bytes
  },
})
