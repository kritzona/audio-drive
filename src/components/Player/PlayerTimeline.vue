<template>
  <v-slider
    :model-value="ellapsedSeconds"
    :color="primaryColor"
    :track-color="secondaryColor"
    min="0"
    :max="duration"
    :step="1"
    class="player-timeline"
    @update:model-value="($event: number) => $emit('change', $event)"
  >
    <template #prepend>
      <div class="text-caption player-timeline__current-time">
        {{ ellapsedSeconds }}
      </div>
    </template>

    <template #append>
      <div class="text-caption player-timeline__duration">
        {{ duration }}
      </div>
    </template>
  </v-slider>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useTheme } from 'vuetify/lib/framework.mjs';

defineProps<{
  duration: number;
  ellapsedSeconds: number;
}>();
defineEmits<{
  (e: 'change', ellapsedSeconds: number): void;
}>();

const theme = useTheme();

const primaryColor = computed(() => theme.current.value.colors.primary);
const secondaryColor = computed(() => theme.current.value.colors.secondary);
</script>
