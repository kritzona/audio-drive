import { defineStore } from 'pinia';
import { Stores } from '@/constants/stores.constants';
import { ref } from 'vue';
import { AudioModel } from '@/models/audio.model';

export const usePlaylistStore = defineStore(Stores.PLAYLIST, () => {
  const name = ref<string | null>(null);
  const tracks = ref<AudioModel[]>([]);
  const currentTrackIndex = ref<number>(0);

  const prev = (): AudioModel | null => {
    try {
      const prevTrackIndex = currentTrackIndex.value - 1;
      const prevTrack = tracks.value[prevTrackIndex];

      currentTrackIndex.value = prevTrackIndex;

      return prevTrack;
    } catch {
      currentTrackIndex.value = 0;

      return null;
    }
  };

  const next = (): AudioModel | null => {
    try {
      const nextTrackIndex = currentTrackIndex.value + 1;
      const nextTrack = tracks.value[nextTrackIndex];

      currentTrackIndex.value = nextTrackIndex;

      return nextTrack;
    } catch {
      currentTrackIndex.value = 0;

      return null;
    }
  };

  return {
    name,
    tracks,

    prev,
    next,
  };
});
