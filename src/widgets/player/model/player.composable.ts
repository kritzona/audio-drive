import { AudioModel } from '@/entities/audio';
import { useAudioStore } from '@/entities/audio';
import { usePlaylistStore } from '@/features/playlist';
import { reactive, onBeforeMount, toRefs } from 'vue';

/**
 * Бизнес-логика для работы с плеером
 *
 * @returns Свойства и методы для работы с плеером
 */
export const usePlayer = () => {
  /**
   * Хранилище данных аудио-трека
   */
  const audioStore = useAudioStore();

  /**
   * Хранилище данных текущего плейлиста
   */
  const playlistStore = usePlaylistStore();

  /**
   * Свойства стейта из хранилища плеера,
   * которые необходимы для компонентов
   */
  const { audio, playing, stoped, duration, elapsedSeconds, hasError } = toRefs(
    audioStore.$state
  );

  /**
   * Инициализация плейлиста и плеера
   */
  onBeforeMount(() => {
    const firstTrack = playlistStore.first();
    if (firstTrack) initTrack(firstTrack);
  });

  /**
   * Инициализация трека
   *
   * @param audio Аудио для инициализации
   * @param playNow Флаг для воспроизведения сразу после инициализации
   */
  const initTrack = (audio: AudioModel, playNow = false) => {
    audioStore.setup(audio, playNow);
  };

  /**
   * Воспроизведение трека
   *
   * @async
   */
  const play = async () => {
    await audioStore.play();
  };

  /**
   * Остановка трека на паузу
   */
  const pause = () => {
    audioStore.pause();
  };

  /**
   * Полная остановка трека
   */
  const stop = () => {
    audioStore.stop();
  };

  /**
   * Проматывание трека до указанной секунды
   *
   * @param seconds Секунда, до которой нужно проматать трек
   */
  const skipTo = (seconds: number) => {
    audioStore.skipTo(seconds);
  };

  /**
   * Переключение на предыдущий трек
   */
  const prev = () => {
    const prevTrack = playlistStore.prev();
    if (prevTrack) initTrack(prevTrack, true);
  };

  /**
   * Переключение на следующий трек
   */
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

    initTrack,
    play,
    pause,
    stop,
    skipTo,
    prev,
    next,
  });
};
