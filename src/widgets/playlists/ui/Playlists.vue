<template>
  <v-container class="playlists">
    <v-row>
      <v-col
        v-for="playlist in userPlaylistStore.items"
        :key="playlist.id"
        :lg="4"
      >
        <Playlist
          :id="playlist.id"
          :name="playlist.name"
          :tracks="playlist.tracks"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { useUserPlaylistStore } from '@/widgets/playlists';
import { onMounted } from 'vue';
import { Playlist } from '@/features/playlist';

/** Хранилище списка плейлистов пользователя */
const userPlaylistStore = useUserPlaylistStore();

/** Загрузка плейлистов */
onMounted(() => {
  userPlaylistStore.fetchAll();
});
</script>
