<template>
  <v-list density="compact" nav>
    <v-list-item
      prepend-icon="mdi-playlist-music"
      title="Все плейлисты"
      value="all-playlist-page"
    />

    <v-list-item
      prepend-icon="mdi-playlist-plus"
      title="Добавить новый плейлист"
      value="add-playlist-page"
    />

    <v-list-item
      prepend-icon="mdi-upload"
      title="Загрузить аудио-трек"
      :to="Routes.UPLOAD_AUDIO_TRACK_PAGE"
    />
  </v-list>
</template>

<script lang="ts" setup>
import { Routes } from '@/constants/routes.constants';
</script>
