<template>
  <v-form ref="form" class="add-playlist-form" @submit.prevent="handleSubmit">
    <v-text-field
      v-model="name"
      name="name"
      :readonly="loading"
      :rules="requiredTextRules"
      clearable
      hide-details="auto"
      label="Название плейлиста"
      color="primary"
      required
    />

    <v-btn
      :loading="loading"
      block
      color="primary"
      size="large"
      type="submit"
      class="mt-5"
    >
      Создать
    </v-btn>
  </v-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { requiredTextRules, Routes } from '@/shared/constants';
import { VForm } from 'vuetify/components';
import { useUserPlaylistStore } from '@/widgets/playlists';
import { useForm } from '@/shared/model';
import { useRouter } from 'vue-router';

/**
 * Хранилище списка плейлистов
 */
const userPlaylistStore = useUserPlaylistStore();

/**
 * Роутер
 */
const router = useRouter();

/**
 * Бизнес-логика для работы с формой
 */
const { form, loading, validate } = useForm();

/**
 * Наименование плейлиста
 */
const name = ref<string>('');

/**
 * Обработчик отправки формы
 */
const handleSubmit = async () => {
  await validate();

  userPlaylistStore.add({
    id: '1',
    name: name.value,
    tracks: [],
  });

  router.push({
    name: Routes.MAIN_PAGE,
  });
};

defineExpose({
  form,
  loading,
  name,

  handleSubmit,
});
</script>
