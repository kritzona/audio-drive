<template>
  <div class="d-flex flex-row align-center player-track">
    <v-avatar :image="cover" color="secondary" size="x-large" />

    <div class="ml-5 player-track__info">
      <div class="text-caption player-track__author">{{ author }}</div>

      <div class="text-h5 player-track__name">{{ name }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  cover: string;
  author: string;
  name: string;
}>();
</script>
