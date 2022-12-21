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
import { AudioModel } from '../model/audio.model';
import { useAudioStore } from '../model/audio.store';
import SharedUI from '@/shared/ui';
import { computed } from 'vue';

const props = defineProps<{
  id: AudioModel['id'];
  name: AudioModel['name'];
  author: AudioModel['author'];
  cover: AudioModel['cover'];
}>();

/**
 * Хранилище для работы с аудио
 */
const audioStore = useAudioStore();

/**
 * Является ли аудио текущим треком
 */
const isCurrentTrack = computed(() => props.id === audioStore.audio?.id);

/**
 * Обработчик кнопки воспроизведения
 */
const handlePlayButtonClick = () => {
  if (!isCurrentTrack.value) {
    return;
  }

  audioStore.play();
};

/**
 * Обработчик кнопки паузы
 */
const handlePauseButtonClick = () => {
  audioStore.pause();
};
</script>
