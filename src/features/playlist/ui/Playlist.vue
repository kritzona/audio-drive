<template>
  <v-card :title="name">
    <template #text>
      <PlaylistTracks :tracks="tracks" @select="handleTrackSelect" />
    </template>
  </v-card>
</template>

<script lang="ts" setup>
import { PlaylistModel } from '../model/playlist.model';
import { usePlaylistStore } from '../model/playlist.store';
import PlaylistTracks from './PlaylistTracks.vue';
import { computed } from 'vue';

const props = defineProps<{
  id: PlaylistModel['id'];
  name: PlaylistModel['name'];
  tracks: PlaylistModel['tracks'];
}>();

const playlistStore = usePlaylistStore();

const playlist = computed(() => ({
  id: props.id,
  name: props.name,
  tracks: props.tracks,
}));

const handleTrackSelect = (id: string) => {
  playlistStore.setup(playlist.value, id);
};
</script>
