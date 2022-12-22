<template>
  <v-form ref="form" class="upload-audio-form" @submit.prevent="handleSubmit">
    <v-text-field
      v-model="name"
      name="name"
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
      name="author"
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
      :model-value="covers"
      name="covers"
      :readonly="loading"
      :rules="requiredFileRules"
      accept="image/png, image/jpeg, image/bmp"
      label="Обложка"
      color="primary"
      prepend-icon="mdi-camera"
      show-size
      class="mt-5"
      @update:model-value="handleCoversUpload"
    />

    <v-file-input
      :model-value="audios"
      name="audios"
      :readonly="loading"
      :rules="requiredFileRules"
      accept="audio/mpeg"
      label="Аудио-трек"
      color="primary"
      prepend-icon="mdi-music"
      show-size
      @update:model-value="handleAudiosUpload"
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
import { ref } from 'vue';
import { VForm } from 'vuetify/components';
import { requiredFileRules, requiredTextRules } from '@/shared/constants';
import { useForm } from '@/shared/model';
import { useUserAudioStore } from '@/entities/audio/model/user-audio.store';
import { usePlayer } from '@/widgets/player';
import { AudioService } from '@/entities/audio';

/**
 * Бизнес-логика для работы с
 */
const userAudioStore = useUserAudioStore();

const player = usePlayer();

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
 * Обработчик загрузки обложек
 *
 * @param files Файлы обложек
 */
const handleCoversUpload = (files: File[]) => (covers.value = files);

/**
 * Обработчик загрузки аудио-треков
 *
 * @param files Файлы аудио-треков
 */
const handleAudiosUpload = (files: File[]) => (audios.value = files);

/**
 * Обработчик отправки формы
 *
 * @async
 */
const handleSubmit = async () => {
  await validate();

  const [coverFile] = covers.value;
  const [audioFile] = audios.value;

  await userAudioStore.add({
    name: name.value,
    author: author.value,
    cover: coverFile,
    audio: audioFile,
    fileName: audioFile.name,
    format: audioFile.type,
  });

  player.initTrack(await AudioService.wrapAudio(userAudioStore.items[0]));
};

defineExpose({
  form,
  loading,
  name,
  author,
  covers,
  audios,

  handleCoversUpload,
  handleAudiosUpload,
  handleSubmit,
});
</script>
