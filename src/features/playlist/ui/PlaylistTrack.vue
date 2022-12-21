<template>
  <v-list-item
    :title="name"
    :value="id"
    :subtitle="author"
    :prepend-avatar="cover"
  />
</template>

<script lang="ts" setup>
import { AudioModel } from '@/entities/audio';

defineProps<{
  id: AudioModel['id'];
  name: AudioModel['name'];
  author: AudioModel['author'];
  cover: AudioModel['cover'];
}>();
</script>
