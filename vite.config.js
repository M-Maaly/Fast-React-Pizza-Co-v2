import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint({
      failOnError: false, // 👈 ده يخلي errors ما توقفش السيرفر
      // failOnWarning: false, // حتى التحذيرات
    }),
  ],
  base: '/Fast-React-Pizza-Co-v2',
});
