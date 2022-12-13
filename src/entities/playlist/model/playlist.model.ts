import { AudioModel } from '@/entities/audio';

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
