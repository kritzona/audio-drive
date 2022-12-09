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
      <ErrorAlert v-if="player.hasError">
        {{ Errors.PLAY }}
      </ErrorAlert>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { Errors } from '@/constants/errors.constants';
import PlayerControlPanel from './PlayerControlPanel.vue';
import ErrorAlert from '../Alerts/ErrorAlert.vue';
import PlayerTrack from './PlayerTrack.vue';
import PlayerTimeline from './PlayerTimeline.vue';
import { usePlayer } from '@/composables/player.composable';

const player = usePlayer();

const handlePlay = () => player.play();

const handlePause = () => player.pause();

const handleStop = () => player.stop();

const handlePrev = () => player.prev();

const handleNext = () => player.next();

const handleTimelineChange = (seconds: number) => player.skipTo(seconds);
</script>
