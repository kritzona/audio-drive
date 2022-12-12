import { createRouter, createWebHistory } from 'vue-router';
import routes from '@/app/routes';

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
