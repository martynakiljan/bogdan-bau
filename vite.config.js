import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/bogdan-bau/', 
  plugins: [react()],
})
