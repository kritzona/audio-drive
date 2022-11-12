import { Stores } from '@/constants/stores.constants'
import { PlayerModel } from '@/models/player.model'
import audioService from '@/services/audio.service'
import { defineStore } from 'pinia'

const createState = (): PlayerModel => ({
  audio: null,
  playing: false,
  stoped: true,
  elapsedSeconds: 0,
  hasError: false,
})

export const usePlayerStore = defineStore<Stores, PlayerModel>(
  Stores.PLAYER,
  {
    state: () => createState(),

    actions: {
      async setup(audio: PlayerModel['audio']) {
        this.$reset();

        this.audio = audio;

        try {
          await audioService.play();

          this.playing = true;
          this.stoped = false;
        } catch {
          this.hasError = true;
        }
      },

      async play() {
        try {
          await audioService.play();

          this.playing = true;
          this.stoped = false;
        } catch {
          this.hasError = true;
        }
      },

      pause() {
        audioService.pause();

        this.playing = false;
        this.stoped = false;
      },

      stop() {
        audioService.stop();

        this.playing = false;
        this.stoped = true;
      },

      updateSecondsElapsed(seconds: number) {
        this.elapsedSeconds = seconds;
      },
    },

    getters: {},
  }
)
