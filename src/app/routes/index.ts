import { RouteRecordRaw } from 'vue-router';
import { Routes } from '@/shared/constants';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: Routes.MAIN_PAGE,
    component: () => import('@/pages/main/MainPage.vue'),
    beforeEnter: (_to, _from, next) => {
      next({ name: Routes.ALL_PLAYLIST_PAGE });
    },
  },
  {
    path: `/${Routes.UPLOAD_AUDIO_TRACK_PAGE}`,
    name: Routes.UPLOAD_AUDIO_TRACK_PAGE,
    component: () =>
      import('@/pages/upload-audio-track/UploadAudioTrackPage.vue'),
    meta: {
      title: 'Загрузка аудио-трека',
      icon: 'mdi-upload',
    },
  },
  {
    path: `/${Routes.ALL_PLAYLIST_PAGE}`,
    name: Routes.ALL_PLAYLIST_PAGE,
    component: () => import('@/pages/all-playlist/AllPlaylistPage.vue'),
    meta: {
      title: 'Все плейлисты',
      icon: 'mdi-playlist-music',
    },
  },
  {
    path: `/${Routes.ADD_PLAYLIST_PAGE}`,
    name: Routes.ADD_PLAYLIST_PAGE,
    component: () => import('@/pages/add-playlist/AddPlaylistPage.vue'),
    meta: {
      title: 'Добавление нового плейлиста',
      icon: 'mdi-playlist-plus',
    },
  },
];

export default routes;
