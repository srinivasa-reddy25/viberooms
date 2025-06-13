import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Vite configuration
 * Configures React plugin and development server settings
 */
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Makes server accessible from all network interfaces
    port: 3000,       // Specifies a custom port
    open: true,       // Automatically opens browser when server starts
  },
});
