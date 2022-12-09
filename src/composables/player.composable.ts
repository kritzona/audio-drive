import { createAudioMp3Mock } from '@/mocks/audio-mp3.mock';
import { AudioModel } from '@/models/audio.model';
import AudioService from '@/services/audio.service';
import { usePlayerStore } from '@/stores/player/player.store';
import { usePlaylistStore } from '@/stores/playlist/playlist.store';
import { reactive, onBeforeMount, toRefs } from 'vue';

export const usePlayer = () => {
  const playerStore = usePlayerStore();
  const playlistStore = usePlaylistStore();

  const { audio, playing, stoped, duration, elapsedSeconds, hasError } = toRefs(
    playerStore.$state
  );

  onBeforeMount(() => {
    playlistStore.setup([
      createAudioMp3Mock(),
      createAudioMp3Mock(),
      createAudioMp3Mock(),
      createAudioMp3Mock(),
    ]);

    const firstTrack = playlistStore.first();
    if (firstTrack) initTrack(firstTrack);
  });

  const initTrack = (audio: AudioModel, playNow = false) => {
    AudioService.change(audio, () => {
      playerStore.setup(audio);

      if (playNow) {
        play();
      }
    });
  };

  const play = async () => {
    try {
      await AudioService.play();

      playerStore.setPlayed();

      AudioService.listenTimeChange((seconds) =>
        playerStore.setSecondsElapsed(seconds)
      );

      AudioService.listenTrackEnd(() => next());
    } catch {
      playerStore.setError();
    }
  };

  const pause = () => {
    AudioService.pause();
    playerStore.setPaused();
  };

  const stop = () => {
    AudioService.stop();
    playerStore.setStoped();
  };

  const skipTo = (seconds: number) => {
    AudioService.setCurrentTime(seconds);
    playerStore.setSecondsElapsed(seconds);
  };

  const prev = () => {
    const prevTrack = playlistStore.prev();
    if (prevTrack) initTrack(prevTrack, true);
  };

  const next = () => {
    const nextTrack = playlistStore.next();
    if (nextTrack) initTrack(nextTrack, true);
  };

  return reactive({
    audio,
    playing,
    stoped,
    duration,
    elapsedSeconds,
    hasError,

    play,
    pause,
    stop,
    skipTo,
    prev,
    next,
  });
};
