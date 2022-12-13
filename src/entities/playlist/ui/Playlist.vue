<template>
  <v-card :title="name">
    <template #text>
      <PlaylistTracks :tracks="tracks" />
    </template>
  </v-card>
</template>

<script lang="ts" setup>
import { PlaylistModel } from '../model/playlist.model';
import PlaylistTracks from './PlaylistTracks.vue';

defineProps<{
  name: PlaylistModel['name'];
  tracks: PlaylistModel['tracks'];
}>();
</script>
