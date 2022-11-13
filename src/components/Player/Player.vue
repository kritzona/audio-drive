<template>
  <v-container class="player">
    <v-alert
      v-if="visibleErrorAlert"
      icon="mdi-cloud-alert"
      prominent
      title="Ошибка"
      type="error"
      variant="text"
    >
      {{ Errors.PLAY }}
    </v-alert>

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
          icon="mdi-pause"
          color="secondary"
          @click="handlePause"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { computed, onMounted } from 'vue';
import { createAudioMp3Mock } from '@/mocks/audio-mp3.mock'
import { usePlayerStore } from '@/stores/player/player.store'
import { Errors } from '@/constants/errors.constants';

const playerStore = usePlayerStore()

const visiblePlayButton = computed(() => {
  return !playerStore.playing
})

const visibleErrorAlert = computed(() => {
  return playerStore.hasError
})

onMounted(() => {
  playerStore.setup(createAudioMp3Mock())
})

const handlePlay = () => {
  playerStore.play()
}

const handlePause = () => {
  playerStore.pause()
}
</script>

<style lang="scss" scoped></style>
