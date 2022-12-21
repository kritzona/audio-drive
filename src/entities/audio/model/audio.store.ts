import { Stores } from '@/shared/constants';
import { AudioModel, AudioService } from '@/entities/audio';
import { defineStore } from 'pinia';
import { ref } from 'vue';

/**
 * Хранилище данных для аудио
 *
 * @return {object} Публичные методы и свойства для работы с хранилищем
 */
export const useAudioStore = defineStore(Stores.AUDIO, () => {
  /**
   * Информация об аудио
   */
  const audio = ref<AudioModel | null>(null);

  /**
   * Состояние воспроизведения
   */
  const playing = ref<boolean>(false);

  /**
   * Состояние об остановке воспроизведения
   */
  const stoped = ref<boolean>(true);

  /**
   * Количество прошедших секунд с момента воспроизведения
   */
  const elapsedSeconds = ref<number>(0);

  /**
   * Имеются ли ошибки при воспроизведении
   */
  const hasError = ref<boolean>(false);

  /**
   * Общее кол-во времени трека
   */
  const duration = ref<number>(0);

  /**
   * Инициализация трека в хранилище
   *
   * @param newAudio Новое аудио
   */
  const setup = (newAudio: AudioModel) => {
    reset();

    audio.value = newAudio;
    duration.value = AudioService.duration;
  };

  /**
   * Выставление состояния для воспроизведения
   */
  const setPlayed = () => {
    playing.value = true;
    stoped.value = false;
  };

  /**
   * Выставление состояния для паузы
   */
  const setPaused = () => {
    playing.value = false;
    stoped.value = false;
  };

  /**
   * Выставление состояния для полной остановки воспроизведения
   */
  const setStoped = () => {
    playing.value = false;
    stoped.value = true;
  };

  /**
   * Выставление количество пройденных секунд с момента воспроизведения
   *
   * @param seconds Количество секунд
   */
  const setSecondsElapsed = (seconds: number) => {
    elapsedSeconds.value = seconds;
  };

  /**
   * Пометить наличие ошибки
   */
  const setError = () => {
    hasError.value = true;
  };

  /**
   * Сброс данных хранилища до исходных значений
   */
  const reset = () => {
    audio.value = null;
    playing.value = false;
    stoped.value = true;
    elapsedSeconds.value = 0;
    hasError.value = false;
    duration.value = 0;
  };

  return {
    audio,
    playing,
    stoped,
    elapsedSeconds,
    hasError,
    duration,

    setup,
    setPlayed,
    setPaused,
    setStoped,
    setSecondsElapsed,
    setError,
  };
});
