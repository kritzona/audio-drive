import { RouteRecordRaw } from 'vue-router';
import { Routes } from '@/constants/routes.constants';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: Routes.MAIN_PAGE,
    component: import('@/pages/main/MainPage.vue'),
  },
];

export default routes;
