<template>
  <v-card class="mx-auto px-6 py-8" max-width="344">
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
  </v-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { requiredTextRules } from '@/constants/validation-rules.constants';
import { VForm } from 'vuetify/components';
import { useUserPlaylistStore } from '@/stores/user-playlist/user-playlist.store';

const userPlaylistStore = useUserPlaylistStore();

const form = ref<VForm>();

const loading = ref<boolean>(false);
const name = ref<string>('');

const validate = async (): Promise<boolean> => {
  if (!form.value) {
    return false;
  }

  const { valid } = await form.value.validate();

  return valid;
};

const handleSubmit = async () => {
  const noValid = !(await validate());
  if (noValid) {
    return;
  }

  userPlaylistStore.add({
    id: '1',
    name: name.value,
    tracks: [],
  });
};
</script>
