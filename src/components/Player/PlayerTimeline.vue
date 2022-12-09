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
          {{ formattedEllapsedSeconds }}
        </div>
      </template>

      <template #append>
        <div class="text-caption player-timeline__duration">
          {{ formattedDuration }}
        </div>
      </template>
    </v-slider>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useTheme } from 'vuetify/lib/framework.mjs';
import { debounce } from 'lodash';
import { secondsToTime } from '@/utils/time.utils';

const props = defineProps<{
  duration: number;
  ellapsedSeconds: number;
}>();

const emit = defineEmits<{
  (e: 'change', ellapsedSeconds: number): void;
}>();

/** Текущая тема Vuetify */
const theme = useTheme();

/** Главный цвет */
const primaryColor = computed(() => theme.current.value.colors.primary);
/** Вторичный цвет */
const secondaryColor = computed(() => theme.current.value.colors.secondary);

/** Продолжительность трека в формате "минуты:секунды" */
const formattedDuration = computed(() => secondsToTime(props.duration));
/** Количество прошедших секунд трека в формате "минуты:секунды" */
const formattedEllapsedSeconds = computed(() =>
  secondsToTime(props.ellapsedSeconds)
);

/** Состояние фокуса на слайдере */
const focused = ref<boolean>(false);

/**
 * Обработчик проматывание трека обвернутый в debounce,
 * который позволяет взять последние секунды при резком проматывании
 *
 * @param seconds Секунда, до которой нужно проматать трек
 */
const handleChange = debounce((seconds: number) => {
  emit('change', seconds);

  focused.value = false;
}, 30);

/**
 * Обработчик фокусировки/расфокусировки на слайдер
 *
 * @param focus Состояние фокуса
 */
const handleFocus = (focus: boolean) => (focused.value = focus);
</script>
