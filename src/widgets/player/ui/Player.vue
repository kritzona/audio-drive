<template>
  <v-container class="player">
    <v-row justify="space-between" align-content="center">
      <v-col align-self="center">
        <PlayerTrack
          v-if="player.audio"
          :cover="player.audio.cover"
          :author="player.audio.author"
          :name="player.audio.name"
        />
      </v-col>

      <v-col align-self="center" class="d-flex flex-row justify-end">
        <PlayerControlPanel
          :playing="player.playing"
          :stoped="player.stoped"
          @play="handlePlay"
          @pause="handlePause"
          @stop="handleStop"
          @prev="handlePrev"
          @next="handleNext"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <PlayerTimeline
          v-if="player.audio"
          :duration="player.duration"
          :ellapsed-seconds="player.elapsedSeconds"
          @change="handleTimelineChange"
        />
      </v-col>
    </v-row>

    <v-row>
      <SharedUI.ErrorAlert v-if="player.hasError">
        {{ Errors.PLAY }}
      </SharedUI.ErrorAlert>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { Errors } from '@/shared/constants';
import PlayerControlPanel from './PlayerControlPanel.vue';
import SharedUI from '@/shared/ui';
import PlayerTrack from './PlayerTrack.vue';
import PlayerTimeline from './PlayerTimeline.vue';
import { usePlayer } from '@/widgets/player';

/**
 * Хранилище данных плеера
 */
const player = usePlayer();

/**
 * Обработчик кнопки воспроизведения
 */
const handlePlay = () => player.play();

/**
 * Обработчик кнопки паузы
 */
const handlePause = () => player.pause();

/**
 * Обработчик кнопки полной остановки трека
 */
const handleStop = () => player.stop();

/**
 * Обработчик кнопки переключения на предыдущий трек
 */
const handlePrev = () => player.prev();

/**
 * Обработчик кнопки переключения на следующий трек
 */
const handleNext = () => player.next();

/**
 * Обработчик проматывание трека
 *
 * @param seconds Секунда, до которой нужно проматать трек
 */
const handleTimelineChange = (seconds: number) => player.skipTo(seconds);
</script>
