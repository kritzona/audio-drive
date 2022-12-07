import { PlaylistModel } from '@/models/playlist.model';
import { createAudioMp3Mock } from './audio-mp3.mock';

export const createPlaylistMock = (name: string): PlaylistModel => {
  return {
    id: '1111',
    name,
    tracks: [createAudioMp3Mock(), createAudioMp3Mock()],
  };
};
