import { Stores } from '@/constants/stores.constants';
import { AudioModel } from '@/models/audio.model';
import { PlayerModel } from '@/models/player.model';
import AudioService from '@/services/audio.service';
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const usePlayerStore = defineStore(Stores.PLAYER, () => {
  const audio = ref<PlayerModel['audio']>(null);
  const playing = ref<boolean>(false);
  const stoped = ref<boolean>(true);
  const elapsedSeconds = ref<number>(0);
  const hasError = ref<boolean>(false);
  const duration = ref<number>(0);

  const setup = (newAudio: AudioModel) => {
    reset();

    audio.value = newAudio;
    duration.value = AudioService.duration;
  };

  const setPlayed = () => {
    playing.value = true;
    stoped.value = false;
  };

  const setPaused = () => {
    playing.value = false;
    stoped.value = false;
  };

  const setStoped = () => {
    playing.value = false;
    stoped.value = true;
  };

  const setSecondsElapsed = (seconds: number) => {
    elapsedSeconds.value = seconds;
  };

  const setError = () => {
    hasError.value = true;
  };

  const reset = () => {
    audio.value = null;
    playing.value = false;
    stoped.value = true;
    elapsedSeconds.value = 0;
    hasError.value = false;
    duration.value = 0;
  };

  return {
    audio,
    playing,
    stoped,
    elapsedSeconds,
    hasError,
    duration,

    setup,
    setPlayed,
    setPaused,
    setStoped,
    setSecondsElapsed,
    setError,
  };
});
