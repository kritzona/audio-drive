<template>
  <v-form ref="form" class="add-playlist-form" @submit.prevent="handleSubmit">
    <v-text-field
      v-model="name"
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
import { requiredTextRules } from '@/constants/validation-rules.constants';
import { VForm } from 'vuetify/components';
import { useUserPlaylistStore } from '@/app/stores';
import { useForm } from '@/composables/form.composable';

/**
 * Хранилище списка плейлистов
 */
const userPlaylistStore = useUserPlaylistStore();

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
};
</script>
