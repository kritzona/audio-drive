import { defineStore } from 'pinia';
import { Stores } from '@/constants/stores.constants';
import { ref } from 'vue';
import { AudioModel } from '@/models/audio.model';

export const usePlaylistStore = defineStore(Stores.PLAYLIST, () => {
  const name = ref<string | null>(null);

  const tracks = ref<AudioModel[]>([]);
  const currentTrackIndex = ref<number>(0);

  const setup = (audios: AudioModel[]) => {
    tracks.value = [...audios];
  };

  const first = (): AudioModel | null => {
    try {
      const firstTrack = tracks.value[0];

      currentTrackIndex.value = 0;

      return firstTrack;
    } catch {
      return null;
    }
  };

  const last = (): AudioModel | null => {
    try {
      const lastTrack = tracks.value[tracks.value.length - 1];

      currentTrackIndex.value = tracks.value.length - 1;

      return lastTrack;
    } catch {
      return null;
    }
  };

  const prev = (): AudioModel | null => {
    const prevTrackIndex = currentTrackIndex.value - 1;
    const prevTrack = tracks.value[prevTrackIndex];

    const noTrack = !prevTrack;
    if (noTrack) {
      return first();
    }

    currentTrackIndex.value = prevTrackIndex;

    return prevTrack;
  };

  const next = (): AudioModel | null => {
    const nextTrackIndex = currentTrackIndex.value + 1;
    const nextTrack = tracks.value[nextTrackIndex];

    const noTrack = !nextTrack;
    if (noTrack) {
      return first();
    }

    currentTrackIndex.value = nextTrackIndex;

    return nextTrack;
  };

  return {
    name,
    tracks,
    currentTrackIndex,

    setup,
    first,
    last,
    prev,
    next,
  };
});
