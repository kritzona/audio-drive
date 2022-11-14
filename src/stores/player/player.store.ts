import { Stores } from '@/constants/stores.constants';
import { AudioModel } from '@/models/audio.model';
import { PlayerModel } from '@/models/player.model';
import audioService from '@/services/audio.service';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePlayerStore = defineStore(Stores.PLAYER, () => {
  const audio = ref<PlayerModel['audio']>(null);
  const playing = ref<boolean>(false);
  const stoped = ref<boolean>(true);
  const elapsedSeconds = ref<number>(0);
  const hasError = ref<boolean>(false);

  const setup = async (newAudio: AudioModel) => {
    reset();

    await audioService.change(newAudio);
    audio.value = newAudio;
  };

  const play = async () => {
    try {
      await audioService.play();

      playing.value = true;
      stoped.value = false;
    } catch {
      hasError.value = true;
    }
  };

  const pause = () => {
    audioService.pause();

    playing.value = false;
    stoped.value = false;
  };

  const stop = () => {
    audioService.stop();

    playing.value = false;
    stoped.value = true;
  };

  const updateSecondsElapsed = (seconds: number) => {
    audioService.setCurrentTime(seconds);

    elapsedSeconds.value = seconds;
  };

  const reset = () => {
    audio.value = null;
    playing.value = false;
    stoped.value = true;
    elapsedSeconds.value = 0;
    hasError.value = false;
  };

  return {
    audio,
    playing,
    stoped,
    elapsedSeconds,
    hasError,
    setup,
    play,
    pause,
    stop,
    updateSecondsElapsed,
  };
});
