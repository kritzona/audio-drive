<template>
  <div class="main-page">
    <Player></Player>

    <UploadAudioForm />

    <Playlists />
  </div>
</template>

<script lang="ts" setup>
import Player from '@/components/Player/Player.vue';
import UploadAudioForm from '@/components/UploadAudioForm/UploadAudioForm.vue';
import Playlists from '@/components/Playlists/Playlists.vue';
</script>

<style scoped></style>
