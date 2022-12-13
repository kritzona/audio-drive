<template>
  <v-card :title="name">
    <template #text>
      <PlaylistTracks :tracks="tracks" />
    </template>
  </v-card>
</template>

<script lang="ts" setup>
import { PlaylistModel } from '@/entities/playlist';
import PlaylistTracks from './PlaylistTracks.vue';

defineProps<{
  name: PlaylistModel['name'];
  tracks: PlaylistModel['tracks'];
}>();
</script>
