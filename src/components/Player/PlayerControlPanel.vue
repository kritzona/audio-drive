<template>
  <div class="d-flex flex-row player-control-panel">
    <PlayButton v-if="visiblePlayButton" @click="() => $emit('play')" />
    <PauseButton v-else-if="visiblePauseButton" @click="() => $emit('pause')" />

    <StopButton @click="() => $emit('stop')" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import PauseButton from '../Buttons/PauseButton.vue';
import PlayButton from '../Buttons/PlayButton.vue';
import StopButton from '../Buttons/StopButton.vue';

const props = defineProps({
  playing: Boolean,
  stoped: Boolean,
});

defineEmits(['play', 'pause', 'stop']);

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
