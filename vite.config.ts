import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  mode: 'development',

  plugins: [vue(), eslint()],

  root: './',
  base: '/',

  resolve: {
    alias: {
      '@': '/src',
    },
  },

  server: {
    host: 'localhost',
    port: 3000,
    hmr: true,
    open: '/',
  },
});
