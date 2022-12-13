<template>
  <DashboardLayout>
    <v-card width="400" class="mx-auto" :elevation="0">
      <UploadAudioForm />
    </v-card>
  </DashboardLayout>
</template>

<script lang="ts" setup>
import { DashboardLayout } from '@/app/layouts';
import { UploadAudioForm } from '@/features/upload-audio-form';
</script>
