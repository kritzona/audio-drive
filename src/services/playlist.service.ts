import { PlaylistModel } from '@/models/playlist.model';

class PlaylistService {
  static async fetchAll(): Promise<PlaylistModel[]> {
    const playlistsRecord = localStorage.getItem('playlists');
    const playlists: PlaylistModel[] = playlistsRecord
      ? JSON.parse(playlistsRecord)
      : [];

    return playlists;
  }

  static commit(playlists: PlaylistModel[]) {
    const playlistsRecord = JSON.stringify(playlists);
    localStorage.setItem('playlists', playlistsRecord);
  }
}

export default PlaylistService;
