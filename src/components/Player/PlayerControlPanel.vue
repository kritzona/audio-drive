<template>
  <div class="d-flex flex-row player-control-panel">
    <PrevButton @click="() => $emit('prev')" />

    <PlayButton
      v-if="visiblePlayButton"
      class="ml-5"
      @click="() => $emit('play')"
    />
    <PauseButton
      v-else-if="visiblePauseButton"
      class="ml-5"
      @click="() => $emit('pause')"
    />

    <StopButton class="ml-2" @click="() => $emit('stop')" />

    <NextButton class="ml-1" @click="() => $emit('next')" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import NextButton from '../Buttons/NextButton.vue';
import PauseButton from '../Buttons/PauseButton.vue';
import PlayButton from '../Buttons/PlayButton.vue';
import PrevButton from '../Buttons/PrevButton.vue';
import StopButton from '../Buttons/StopButton.vue';

const props = defineProps({
  playing: Boolean,
  stoped: Boolean,
});

defineEmits<{
  (e: 'play'): void;
  (e: 'pause'): void;
  (e: 'stop'): void;
  (e: 'prev'): void;
  (e: 'next'): void;
}>();

const visiblePlayButton = computed(() => {
  return !props.playing;
});

const visiblePauseButton = computed(() => {
  return props.playing && !props.stoped;
});
</script>

<style lang="scss" scoped>
.player-control-panel {
  width: min-content;
}
</style>
