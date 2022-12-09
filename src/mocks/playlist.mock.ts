import { PlaylistModel } from '@/models/playlist.model';
import { createAudioMp3Mock } from './audio-mp3.mock';

/**
 * Формирование заглушки для плейлиста
 *
 * @param name Имя будущего плейлиста
 * @returns Созданный плейлист
 */
export const createPlaylistMock = (name: string): PlaylistModel => {
  return {
    id: '1111',
    name,
    tracks: [createAudioMp3Mock(), createAudioMp3Mock()],
  };
};
