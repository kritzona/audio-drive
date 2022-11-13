import { Stores } from '@/constants/stores.constants'
import { AudioModel } from '@/models/audio.model'
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

export const usePlayerStore = defineStore(
  Stores.PLAYER,
  () => {
    const state = shallowReactive<PlayerModel>(createState())

    const setup = async (audio: AudioModel) => {
      reset()

      await audioService.change(audio)
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

    const reset = () => {
      Object.assign(state, createState())
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
