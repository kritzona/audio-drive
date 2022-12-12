<template>
  <DashboardLayout>
    <v-card width="400" class="mx-auto" :elevation="0">
      <AddPlaylistForm />
    </v-card>
  </DashboardLayout>
</template>

<script lang="ts" setup>
import DashboardLayout from '@/components/Layouts/Dashboard/DashboardLayout.vue';
import AddPlaylistForm from '@/components/AddPlaylistForm/AddPlaylistForm.vue';
</script>
