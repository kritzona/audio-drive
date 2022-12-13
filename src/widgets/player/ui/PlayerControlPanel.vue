<template>
  <div class="d-flex flex-row player-control-panel">
    <SharedUI.PrevButton @click="() => $emit('prev')" />

    <SharedUI.PlayButton
      v-if="visiblePlayButton"
      class="ml-5"
      @click="() => $emit('play')"
    />
    <SharedUI.PauseButton
      v-else-if="visiblePauseButton"
      class="ml-5"
      @click="() => $emit('pause')"
    />

    <SharedUI.StopButton class="ml-2" @click="() => $emit('stop')" />

    <SharedUI.NextButton class="ml-1" @click="() => $emit('next')" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import SharedUI from '@/shared/ui';

const props = defineProps<{
  playing: boolean;
  stoped: boolean;
}>();

defineEmits<{
  (e: 'play'): void;
  (e: 'pause'): void;
  (e: 'stop'): void;
  (e: 'prev'): void;
  (e: 'next'): void;
}>();

/**
 * Показывать ли кнопку воспроизведения
 */
const visiblePlayButton = computed(() => {
  return !props.playing;
});

/**
 * Показывать ли кнопку паузы
 */
const visiblePauseButton = computed(() => {
  return props.playing && !props.stoped;
});
</script>

<style lang="scss" scoped>
.player-control-panel {
  width: min-content;
}
</style>
