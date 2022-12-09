import { AudioModel } from './audio.model';

/**
 * Описание модели плеера
 */
export interface PlayerModel {
  /** Аудио-трек */
  audio: AudioModel | null;

  /** Воспроизведение трека в данный момент */
  playing: boolean;

  /** Полная остановка трека */
  stoped: boolean;

  /** Количество секунд, прошедшие после начала воспроизведения */
  elapsedSeconds: number;

  /** Наличие ошибок */
  hasError: boolean;
}
