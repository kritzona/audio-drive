import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslint from 'vite-plugin-eslint';
import vuetify from 'vite-plugin-vuetify';

export default defineConfig({
  mode: 'development',

  plugins: [
    vue(),
    eslint(),
    vuetify({
      styles: {
        configFile: './src/app/assets/styles/settings.scss',
      },
    }),
  ],

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
