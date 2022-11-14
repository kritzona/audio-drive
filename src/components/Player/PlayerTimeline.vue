<template>
  <div class="player-timeline">
    <v-slider
      :model-value="ellapsedSeconds"
      :color="primaryColor"
      :track-color="secondaryColor"
      min="0"
      :max="duration"
      :step="1"
      :focused="focused"
      @update:model-value="handleChange"
      @update:focused="handleFocus"
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
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useTheme } from 'vuetify/lib/framework.mjs';
import { debounce } from 'lodash';

defineProps<{
  duration: number;
  ellapsedSeconds: number;
}>();

const emit = defineEmits<{
  (e: 'change', ellapsedSeconds: number): void;
}>();

const theme = useTheme();

const primaryColor = computed(() => theme.current.value.colors.primary);
const secondaryColor = computed(() => theme.current.value.colors.secondary);

const focused = ref<boolean>(false);

const handleChange = debounce((event: number) => {
  emit('change', event);

  focused.value = false;
}, 30);

const handleFocus = (event: boolean) => (focused.value = event);
</script>
