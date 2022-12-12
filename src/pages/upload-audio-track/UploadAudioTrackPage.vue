<template>
  <DashboardLayout>
    <v-card width="400" class="mx-auto" :elevation="0">
      <UploadAudioForm />
    </v-card>
  </DashboardLayout>
</template>

<script lang="ts" setup>
import DashboardLayout from '@/components/Layouts/Dashboard/DashboardLayout.vue';
import UploadAudioForm from '@/components/UploadAudioForm/UploadAudioForm.vue';
</script>
