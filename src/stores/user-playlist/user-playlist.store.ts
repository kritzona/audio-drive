import { defineStore } from 'pinia';
import { Stores } from '@/constants/stores.constants';
import { ref } from 'vue';
import PlaylistService from '@/services/playlist.service';
import { PlaylistModel } from '@/models/playlist.model';

export const useUserPlaylistStore = defineStore(Stores.USER_PLAYLIST, () => {
  const items = ref<PlaylistModel[]>([]);

  const fetchAll = async () => {
    items.value = await PlaylistService.fetchAll();
  };

  const add = (playlist: PlaylistModel) => {
    items.value.push(playlist);

    PlaylistService.commit(items.value);
  };

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
