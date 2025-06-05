import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './admin-panel/', // Указываем подкаталог
  server: {
    host: '0.0.0.0',
    port: 3002,
  },
  build: {
    outDir: 'dist', // Убедимся, что выходная папка — dist
  },
});