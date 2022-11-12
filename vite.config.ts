import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  mode: 'development',

  plugins: [vue()],

  root: './',
  base: '/',

  resolve: {
    alias: {
      '@': './src',
    },
  },

  server: {
    host: 'localhost',
    port: 3000,
    hmr: true,
    open: '/',
  },
})
