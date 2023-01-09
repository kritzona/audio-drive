<template>
  <v-card :title="playlistStore.name ?? 'Плейлист не выбран'" flat>
    <template #text>
      <PlaylistTracks
        :tracks="playlistStore.tracks"
        @select="handleTrackSelect"
      />
    </template>
  </v-card>
</template>

<script lang="ts" setup>
import { useAudioStore } from '@/entities/audio';
import { usePlaylistStore } from '../model/playlist.store';
import { computed } from 'vue';
import { PlaylistModel } from '../model/playlist.model';
import PlaylistTracks from './PlaylistTracks.vue';

const audioStore = useAudioStore();
const playlistStore = usePlaylistStore();

const playlist = computed<PlaylistModel>(() => ({
  id: playlistStore.id ?? '0',
  name: playlistStore.name ?? '',
  tracks: playlistStore.tracks,
}));

const handleTrackSelect = (id: string) => {
  playlistStore.setup(playlist.value, id);
  audioStore.setup(playlistStore.currentTrack, true);
};
</script>
