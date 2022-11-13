<template>
  <div class="player">
    <ErrorAlert v-if="playerStore.hasError">
      {{ Errors.PLAY }}
    </ErrorAlert>

    <PlayerControlPanel
      :playing="playerStore.playing"
      :stoped="playerStore.stoped"
      @play="handlePlay"
      @pause="handlePause"
      @stop="handleStop"
    />
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { createAudioMp3Mock } from '@/mocks/audio-mp3.mock'
import { usePlayerStore } from '@/stores/player/player.store'
import { Errors } from '@/constants/errors.constants'
import PlayerControlPanel from './PlayerControlPanel.vue'
import ErrorAlert from '../Alerts/ErrorAlert.vue'

const playerStore = usePlayerStore()

onMounted(() => {
  playerStore.setup(createAudioMp3Mock())
})

const handlePlay = () => {
  playerStore.play()
}

const handlePause = () => {
  playerStore.pause()
}

const handleStop = () => {
  playerStore.stop()
}
</script>
