import { Stores } from '@/constants/stores.constants'
import { PlayerModel } from '@/models/player.model'
import audioService from '@/services/audio.service'
import { defineStore } from 'pinia'
import { shallowReactive } from 'vue'

const createState = (): PlayerModel => ({
  audio: null,
  playing: false,
  stoped: true,
  elapsedSeconds: 0,
  hasError: false,
})

export const usePlayerStore = defineStore<Stores, PlayerModel>(
  Stores.PLAYER,
  () => {
    const state = shallowReactive<PlayerModel>(createState())

    const reset = () => {
      usePlayerStore().$reset()
    }

    const setup = async (audio: PlayerModel['audio']) => {
      reset()

      state.audio = audio

      await play()
    }

    const play = async () => {
      try {
        await audioService.play()

        state.playing = true
        state.stoped = false
      } catch {
        state.hasError = true
      }
    }

    const pause = () => {
      audioService.pause()

      state.playing = false
      state.stoped = false
    }

    const stop = () => {
      audioService.stop()

      state.playing = false
      state.stoped = true
    }

    const updateSecondsElapsed = (seconds: number) => {
      state.elapsedSeconds = seconds
    }

    return {
      ...state,
      setup,
      play,
      pause,
      stop,
      updateSecondsElapsed,
    }
  },
)
