<template>
  <v-card class="mx-auto px-6 py-8" max-width="344">
    <v-form class="upload-audio-form" @submit.prevent="handleSubmit">
      <v-text-field
        v-model="name"
        :readonly="loading"
        clearable
        hide-details="auto"
        label="Название"
        color="primary"
      />

      <v-text-field
        v-model="author"
        :readonly="loading"
        clearable
        hide-details="auto"
        label="Исполнитель"
        class="mt-5"
        color="primary"
      />

      <v-file-input
        v-model="covers"
        :readonly="loading"
        accept="image/png, image/jpeg, image/bmp"
        label="Обложка"
        color="primary"
        prepend-icon="mdi-camera"
        show-size
        class="mt-5"
      />

      <v-file-input
        v-model="audios"
        :readonly="loading"
        accept="audio/mpeg"
        label="Аудио-трек"
        color="primary"
        prepend-icon="mdi-music"
        show-size
      />

      <v-btn
        :loading="loading"
        block
        color="primary"
        size="large"
        type="submit"
        class="mt-5"
      >
        Загрузить
      </v-btn>
    </v-form>
  </v-card>
</template>

<script lang="ts" setup>
import { usePlayerStore } from '@/stores/player/player.store';
import { ref } from 'vue';
import { fileToBase64Url } from '@/utils/file.utils';

const playerStore = usePlayerStore();

const loading = ref<boolean>(false);

const name = ref<string>('');
const author = ref<string>('');

const covers = ref<File[]>([]);
const audios = ref<File[]>([]);

const handleSubmit = async () => {
  const [coverFile] = covers.value;
  const [audioFile] = audios.value;

  playerStore.setup({
    id: '1',
    name: name.value,
    author: author.value,
    cover: await fileToBase64Url(coverFile),
    fileName: audioFile.name,
    format: audioFile.type,
    url: await fileToBase64Url(audioFile),
  });
};
</script>
