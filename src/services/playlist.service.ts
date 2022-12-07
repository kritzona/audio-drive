import { createPlaylistMock } from '@/mocks/playlist.mock';
import { PlaylistModel } from '@/models/playlist.model';

class PlaylistService {
  static async fetchAll(): Promise<PlaylistModel[]> {
    const playlistsRecord = localStorage.getItem('playlists');
    const playlists: PlaylistModel[] = playlistsRecord
      ? JSON.parse(playlistsRecord)
      : [
          createPlaylistMock('Плейлист 1'),
          createPlaylistMock('Самое крутое'),
          createPlaylistMock('Е**ть жара'),
        ];

    return playlists;
  }

  static commit(playlists: PlaylistModel[]) {
    const playlistsRecord = JSON.stringify(playlists);
    localStorage.setItem('playlists', playlistsRecord);
  }
}

export default PlaylistService;
