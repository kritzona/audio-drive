<template>
  <v-form ref="form" class="upload-audio-form" @submit.prevent="handleSubmit">
    <v-text-field
      v-model="name"
      :readonly="loading"
      :rules="requiredTextRules"
      clearable
      hide-details="auto"
      label="Название"
      color="primary"
      required
    />

    <v-text-field
      v-model="author"
      :readonly="loading"
      :rules="requiredTextRules"
      clearable
      hide-details="auto"
      label="Исполнитель"
      class="mt-5"
      color="primary"
      required
    />

    <v-file-input
      v-model="covers"
      :readonly="loading"
      :rules="requiredFileRules"
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
      :rules="requiredFileRules"
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
</template>

<script lang="ts" setup>
import { usePlayerStore } from '@/app/stores';
import { ref } from 'vue';
import { fileToBase64Url } from '@/shared/lib';
import { VForm } from 'vuetify/components';
import {
  requiredFileRules,
  requiredTextRules,
} from '@/constants/validation-rules.constants';
import { useForm } from '@/composables/form.composable';

/**
 * Хранилище данных плеера
 */
const playerStore = usePlayerStore();

/**
 * Бизнес-логика для работы с формой
 */
const { form, loading, validate } = useForm();

/**
 * Название трека
 */
const name = ref<string>('');
/**
 * Автор трека
 */
const author = ref<string>('');
/**
 * Файл обложки
 */
const covers = ref<File[]>([]);
/**
 * Аудио-файл
 */
const audios = ref<File[]>([]);

/**
 * Обработчик отправки формы
 *
 * @async
 */
const handleSubmit = async () => {
  await validate();

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
