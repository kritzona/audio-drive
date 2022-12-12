<template>
  <v-app class="dashboard-layout">
    <v-app-bar color="primary" density="compact"></v-app-bar>

    <v-navigation-drawer permanent expand-on-hover rail>
      Меню
    </v-navigation-drawer>

    <v-navigation-drawer location="right" permanent>
      Плейлист
    </v-navigation-drawer>

    <v-main scrollable>
      <v-card width="600" class="mx-auto my-10" :elevation="0">
        <template #title><h1 class="text-h3 mb-10">Страница</h1></template>

        <template #text>
          <slot></slot>
        </template>
      </v-card>
    </v-main>

    <v-footer
      :app="true"
      :absolute="true"
      border
      class="dashboard-layout__footer"
    >
      <Player />
    </v-footer>
  </v-app>
</template>

<script lang="ts" setup>
import Player from '@/components/Player/Player.vue';
</script>

<style lang="scss">
.dashboard-layout {
  &__footer {
    border-left: 0;
    border-right: 0;
  }
}
</style>
