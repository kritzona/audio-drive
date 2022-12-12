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
      value="upload-track-page"
    />
  </v-list>
</template>

<script lang="ts" setup></script>
