<template>
  <DashboardLayout>
    <v-card width="400" class="mx-auto" :elevation="0">
      <AddPlaylistForm />
    </v-card>
  </DashboardLayout>
</template>

<script lang="ts" setup>
import { DashboardLayout } from '@/app/layouts';
import { AddPlaylistForm } from '@/widgets/add-playlist-form';
</script>
