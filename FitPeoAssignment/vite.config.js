import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
   base: process.env.VITE_BASE_PATH || '/fit-peo-assignment',
  plugins: [react()],
  optimizeDeps: {
    include: ['react-apexcharts', 'apexcharts']
  }
})
