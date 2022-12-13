<template>
  <v-alert
    icon="mdi-cloud-alert"
    prominent
    title="Ошибка"
    type="error"
    variant="text"
  >
    <slot></slot>
  </v-alert>
</template>

<script lang="ts" setup></script>
