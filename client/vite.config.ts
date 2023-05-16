import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import "dotenv/config"

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
     usePolling: true,
    },
    host: true, // Here
    strictPort: true,
    port: Number(process.env.PORT),
  }
})
