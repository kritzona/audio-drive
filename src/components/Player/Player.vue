<template>
  <v-container class="player">
    <v-row justify="space-between" align-content="center">
      <v-col align-self="center">
        <PlayerTrack
          v-if="playerStore.audio"
          :cover="playerStore.audio.cover"
          :author="playerStore.audio.author"
          :name="playerStore.audio.name"
        />
      </v-col>

      <v-col align-self="center" class="d-flex flex-row justify-end">
        <PlayerControlPanel
          :playing="playerStore.playing"
          :stoped="playerStore.stoped"
          @play="handlePlay"
          @pause="handlePause"
          @stop="handleStop"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <PlayerTimeline
          v-if="playerStore.audio"
          :duration="playerStore.duration"
          :ellapsed-seconds="playerStore.elapsedSeconds"
          @change="(seconds) => playerStore.updateSecondsElapsed(seconds)"
        />
      </v-col>
    </v-row>

    <v-row>
      <ErrorAlert v-if="playerStore.hasError">
        {{ Errors.PLAY }}
      </ErrorAlert>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { createAudioMp3Mock } from '@/mocks/audio-mp3.mock';
import { usePlayerStore } from '@/stores/player/player.store';
import { Errors } from '@/constants/errors.constants';
import PlayerControlPanel from './PlayerControlPanel.vue';
import ErrorAlert from '../Alerts/ErrorAlert.vue';
import PlayerTrack from './PlayerTrack.vue';
import PlayerTimeline from './PlayerTimeline.vue';

const playerStore = usePlayerStore();

onMounted(() => {
  playerStore.setup(createAudioMp3Mock());
});

const handlePlay = () => {
  playerStore.play();
};

const handlePause = () => {
  playerStore.pause();
};

const handleStop = () => {
  playerStore.stop();
};
</script>
