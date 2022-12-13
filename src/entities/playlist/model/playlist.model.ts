import { AudioModel } from '../../audio/model/audio.model';

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
