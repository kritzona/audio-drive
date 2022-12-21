<template>
  <v-list lines="two">
    <AudioTrack
      v-for="track in tracks"
      :id="track.id"
      :key="track.id"
      :name="track.name"
      :author="track.author"
      :cover="track.cover"
      @click="() => $emit('select', track.id)"
    />
  </v-list>
</template>

<script lang="ts" setup>
import { PlaylistModel } from '../model/playlist.model';
import { AudioTrack } from '@/entities/audio';

defineProps<{
  tracks: PlaylistModel['tracks'];
}>();

defineEmits<{
  (e: 'select', id: string): void;
}>();
</script>
