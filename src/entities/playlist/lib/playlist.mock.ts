import * as uuid from 'uuid';
import { PlaylistModel } from '../model/playlist.model';
import { createAudioMp3Mock } from '@/entities/audio';

/**
 * Формирование заглушки для плейлиста
 *
 * @param name Имя будущего плейлиста
 * @returns Созданный плейлист
 */
export const createPlaylistMock = (name: string): PlaylistModel => ({
  id: uuid.v4(),
  name,
  tracks: [createAudioMp3Mock(), createAudioMp3Mock()],
});
