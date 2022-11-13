<template>
  <v-container class="player">
    <v-row justify="space-between" class="text-center">
      <v-col>
        <v-btn
          v-if="visiblePlayButton"
          icon="mdi-play-outline"
          color="primary"
          @click="handlePlay"
        />
        <v-btn
          v-else
          icon="mdi-pause-outline"
          color="secondary"
          @click="handlePause"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { createAudioMp3Mock } from '@/mocks/audio-mp3.mock'
import { usePlayerStore } from '@/stores/player/player.store'

const playerStore = usePlayerStore()

const visiblePlayButton = computed(() => {
  return !playerStore.playing
})

const handlePlay = () => {
  playerStore.setup(createAudioMp3Mock())
}

const handlePause = () => {
  playerStore.pause()
}
</script>

<style lang="scss" scoped></style>
