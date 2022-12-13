<template>
  <v-list-item :title="name" :subtitle="author" :prepend-avatar="cover" />
</template>

<script lang="ts" setup>
import { AudioModel } from '@/entities/audio/model/audio.model';

defineProps<{
  name: AudioModel['name'];
  author: AudioModel['author'];
  cover: AudioModel['cover'];
}>();
</script>
