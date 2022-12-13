import { createPlaylistMock } from '@/entities/playlist/lib/playlist.mock';
import { PlaylistModel } from '@/entities/playlist/model/playlist.model';

/**
 * Сервис для работы с внешним API плейлиста
 */
class PlaylistService {
  /**
   * Загрузка всех плейлистов пользователя
   *
   * @returns Список плейлистов
   */
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

  /**
   * Сохранение плейлистов в LocalStorage
   *
   * @param playlists Список плейлистов
   */
  static commit(playlists: PlaylistModel[]) {
    const playlistsRecord = JSON.stringify(playlists);
    localStorage.setItem('playlists', playlistsRecord);
  }
}

export default PlaylistService;
