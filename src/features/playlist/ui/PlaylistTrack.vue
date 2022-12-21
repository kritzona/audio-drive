<template>
  <v-list-item
    :title="name"
    :value="id"
    :subtitle="author"
    :prepend-avatar="cover"
  >
    <template #append>
      <template v-if="isCurrentTrack">
        <SharedUI.PlayButton
          v-if="!audioStore.playing"
          @click.stop="handlePlayButtonClick"
        />
        <SharedUI.PauseButton v-else @click.stop="handlePauseButtonClick" />
      </template>
      <template v-else>
        <SharedUI.PlayButton @click="handlePlayButtonClick" />
      </template>
    </template>
  </v-list-item>
</template>

<script lang="ts" setup>
import { AudioModel, useAudioStore } from '@/entities/audio';
import SharedUI from '@/shared/ui';
import { computed } from 'vue';

const props = defineProps<{
  id: AudioModel['id'];
  name: AudioModel['name'];
  author: AudioModel['author'];
  cover: AudioModel['cover'];
}>();

const audioStore = useAudioStore();

const isCurrentTrack = computed(() => props.id === audioStore.audio?.id);

const handlePlayButtonClick = () => {
  if (!isCurrentTrack.value) {
    return;
  }

  audioStore.play();
};

const handlePauseButtonClick = () => {
  audioStore.pause();
};
</script>
