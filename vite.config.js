import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // This makes the server accessible from all network interfaces
    port: 3000,       // You can specify a port (default is 5173)
    open: true,       // Automatically open the app in the browser
  },
})
