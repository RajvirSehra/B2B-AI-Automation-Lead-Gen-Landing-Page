import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    port: 3001,      // Shifted from 3000 to 3001
    strictPort: false, // If 3001 is busy, it will now automatically try 3002
    host: true       // Allows access via local IP (192.168...)
  }
});