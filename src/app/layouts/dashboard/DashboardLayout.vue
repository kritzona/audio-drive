<template>
  <v-app class="dashboard-layout">
    <v-app-bar color="primary" density="compact"></v-app-bar>

    <v-navigation-drawer permanent expand-on-hover rail>
      <DashboardNavigation />
    </v-navigation-drawer>

    <v-navigation-drawer width="350" location="right" permanent>
      <SidebarPlaylist />
    </v-navigation-drawer>

    <v-main scrollable>
      <v-card class="mx-10 my-10" :elevation="0">
        <template #title>
          <div class="d-flex flex-row align-center mb-10">
            <v-icon v-if="pageIcon" large left class="mr-5">
              {{ pageIcon }}
            </v-icon>

            <span class="text-h4">{{ pageTitle }}</span>
          </div>
        </template>

        <template #text>
          <slot></slot>
        </template>
      </v-card>
    </v-main>

    <v-footer app absolute border class="dashboard-layout__footer">
      <Player />
    </v-footer>
  </v-app>
</template>

<script lang="ts" setup>
import { Player } from '@/widgets/player';
import DashboardNavigation from '@/app/layouts/dashboard/DashboardNavigation.vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { SidebarPlaylist } from '@/features/playlist';

const route = useRoute();

const pageTitle = computed(() => route.meta?.title ?? 'Заголовок');
const pageIcon = computed(() => route.meta?.icon);
</script>

<style lang="scss">
.dashboard-layout {
  &__footer {
    border-left: 0;
    border-right: 0;
  }
}
</style>
