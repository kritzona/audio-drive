import { AudioModel } from './audio.model';

/**
 * Описание модели плейлиста
 */
export interface PlaylistModel {
  /** Идентификатор */
  id: string;

  /** Название */
  name: string;

  /** Список треков */
  tracks: AudioModel[];
}
