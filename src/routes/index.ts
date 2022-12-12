import { RouteRecordRaw } from 'vue-router';
import { Routes } from '@/constants/routes.constants';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: Routes.MAIN_PAGE,
    component: import('@/pages/main/MainPage.vue'),
  },
  {
    path: `/${Routes.UPLOAD_AUDIO_TRACK_PAGE}`,
    name: Routes.UPLOAD_AUDIO_TRACK_PAGE,
    component: import('@/pages/main/UploadAudioTrackPage.vue'),
    meta: {
      title: 'Загрузка аудио-трека',
      icon: 'mdi-upload',
    },
  },
];

export default routes;
