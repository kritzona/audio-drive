<template>
  <v-card :title="name">
    <template #text>
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
  </v-card>
</template>

<script lang="ts" setup>
import { PlaylistModel } from '@/models/playlist.model';
import PlaylistTrack from './PlaylistTrack.vue';

defineProps<{
  name: PlaylistModel['name'];
  tracks: PlaylistModel['tracks'];
}>();
</script>
