import { Stores } from '@/constants/stores.constants';
import { AudioModel } from '@/models/audio.model';
import { PlayerModel } from '@/models/player.model';
import AudioService from '@/services/audio.service';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePlayerStore = defineStore(Stores.PLAYER, () => {
  const audio = ref<PlayerModel['audio']>(null);
  const playing = ref<boolean>(false);
  const stoped = ref<boolean>(true);
  const elapsedSeconds = ref<number>(0);
  const hasError = ref<boolean>(false);
  const duration = ref<number>(0);

  const setup = (newAudio: AudioModel, playNow = false) => {
    reset();

    AudioService.change(newAudio, () => {
      audio.value = newAudio;
      duration.value = AudioService.duration;

      if (playNow) {
        play();
      }
    });
  };

  const setPlayed = () => {
    playing.value = true;
    stoped.value = false;
  };

  const play = async (onTrackEnd?: () => void) => {
    try {
      await AudioService.play();

      AudioService.listenTimeChange((seconds) => setSecondsElapsed(seconds));

      AudioService.listenTrackEnd(() => {
        stop();

        if (onTrackEnd) onTrackEnd();
      });

      setPlayed();
    } catch {
      hasError.value = true;
    }
  };

  const setPaused = () => {
    playing.value = false;
    stoped.value = false;
  };

  const pause = () => {
    AudioService.pause();

    setPaused();
  };

  const setStoped = () => {
    playing.value = false;
    stoped.value = true;
  };

  const stop = () => {
    AudioService.stop();

    setStoped();
  };

  const setSecondsElapsed = (seconds: number) => {
    elapsedSeconds.value = seconds;
  };

  const updateSecondsElapsed = (seconds: number) => {
    AudioService.setCurrentTime(seconds);

    setSecondsElapsed(seconds);
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
    play,
    pause,
    stop,
    updateSecondsElapsed,
  };
});
