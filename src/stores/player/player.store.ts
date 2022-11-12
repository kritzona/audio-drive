import { Stores } from '@/constants/stores.constants'
import { PlayerModel } from '@/models/player.model'
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
      setup(audio: PlayerModel['audio']) {
        this.$reset();

        this.audio = audio;

        this.playing = true;
        this.stoped = false;
      },

      play() {
        this.playing = true;
        this.stoped = false;
      },

      pause() {
        this.playing = false;
        this.stoped = false;
      },

      stop() {
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
