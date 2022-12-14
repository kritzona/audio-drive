import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],

  test: {
    globals: true,
    environment: 'jsdom',
    deps: {
      inline: ['vuetify'],
    },
    coverage: {
      provider: 'c8',
    },
  },

  root: './',

  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
