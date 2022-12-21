<template>
  <v-list lines="two">
    <PlaylistTrack
      v-for="track in tracks"
      :key="track.id"
      :name="track.name"
      :author="track.author"
      :cover="track.cover"
    />
  </v-list>
</template>

<script lang="ts" setup>
import { PlaylistModel } from '../model/playlist.model';
import PlaylistTrack from './PlaylistTrack.vue';

defineProps<{
  tracks: PlaylistModel['tracks'];
}>();
</script>
