<template>
  <v-container class="playlists">
    <v-row>
      <v-col v-for="playlist in userPlaylistStore.items" :key="playlist.id">
        <Playlist :name="playlist.name" :tracks="playlist.tracks" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { useUserPlaylistStore } from '@/stores/user-playlist/user-playlist.store';
import { onMounted } from 'vue';
import Playlist from '@/components/Playlist/Playlist.vue';

/** Хранилище списка плейлистов пользователя */
const userPlaylistStore = useUserPlaylistStore();

/** Загрузка плейлистов */
onMounted(() => {
  userPlaylistStore.fetchAll();
});
</script>
