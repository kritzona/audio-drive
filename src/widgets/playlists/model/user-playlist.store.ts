import { defineStore } from 'pinia';
import { Stores } from '@/shared/constants';
import { ref } from 'vue';
import { PlaylistModel, PlaylistService } from '@/entities/playlist';

/**
 * Хранилище для списка всех плейлистов текущего пользователя
 *
 * @returns {object} Публичные методы и свойства для работы с хранилищем
 */
export const useUserPlaylistStore = defineStore(Stores.USER_PLAYLIST, () => {
  /**
   * Список плейлистов пользователя
   */
  const items = ref<PlaylistModel[]>([]);

  /**
   * Состояние загрузки
   */
  const loading = ref<boolean>(false);

  /**
   * Загрузка всех плейлистов
   *
   * @async
   */
  const fetchAll = async () => {
    try {
      loading.value = true;

      items.value = await PlaylistService.fetchAll();
    } finally {
      loading.value = false;
    }
  };

  /**
   * Добавление нового плейлиста
   *
   * @param playlist Новый плейлист
   */
  const add = (playlist: PlaylistModel) => {
    items.value.push(playlist);

    PlaylistService.commit(items.value);
  };

  /**
   * Удаление плейлиста
   *
   * @param playlistId Идентификатор плейлиста, который необходимо удалить
   */
  const remove = (playlistId: PlaylistModel['id']) => {
    items.value = items.value.filter((item) => {
      return item.id !== playlistId;
    });

    PlaylistService.commit(items.value);
  };

  return {
    items,

    fetchAll,
    add,
    remove,
  };
});
