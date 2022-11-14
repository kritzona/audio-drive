<template>
  <v-slider
    v-model="seconds"
    :color="primaryColor"
    :track-color="secondaryColor"
    min="0"
    :max="duration"
    :step="1"
    class="player-timeline"
    @update:model-value="handleChange"
  >
    <template #prepend>
      <div class="text-caption player-timeline__current-time">
        {{ seconds }}
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
import { computed, ref } from 'vue';
import { useTheme } from 'vuetify/lib/framework.mjs';
import { debounce } from 'lodash';

const props = defineProps<{
  duration: number;
  ellapsedSeconds: number;
}>();

const emit = defineEmits<{
  (e: 'change', ellapsedSeconds: number): void;
}>();

const theme = useTheme();

const primaryColor = computed(() => theme.current.value.colors.primary);
const secondaryColor = computed(() => theme.current.value.colors.secondary);

/** Локальное хранение секунд нужно для сохранения источника правды
 * и реализации debounce
 * */
const seconds = ref<number>(props.ellapsedSeconds);

const handleChange = debounce((event: number) => emit('change', event), 100);
</script>
