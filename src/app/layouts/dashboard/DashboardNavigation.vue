<template>
  <v-list density="compact" nav>
    <v-list-item
      prepend-icon="mdi-playlist-music"
      title="Все плейлисты"
      :to="Routes.ALL_PLAYLIST_PAGE"
    />

    <v-list-item
      prepend-icon="mdi-playlist-plus"
      title="Добавить новый плейлист"
      :to="Routes.ADD_PLAYLIST_PAGE"
    />

    <v-list-item
      prepend-icon="mdi-upload"
      title="Загрузить аудио-трек"
      :to="Routes.UPLOAD_AUDIO_TRACK_PAGE"
    />
  </v-list>
</template>

<script lang="ts" setup>
import { Routes } from '@/shared/constants/routes.constants';
</script>
