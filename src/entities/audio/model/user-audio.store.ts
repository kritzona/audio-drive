import { Stores } from '@/shared/constants';
import { defineStore } from 'pinia';
import { AudioCreateModel, AudioModel } from './audio.model';
import { ref } from 'vue';
import AudioService from '../lib/audio.service';

/**
 * Хранилище для списка всех аудио-треков текущего пользователя
 *
 * @returns {object} Публичные методы и свойства для работы с хранилищем
 */
export const useUserAudioStore = defineStore(Stores.USER_AUDIO, () => {
  /**
   * Список аудио-треков пользователя
   */
  const items = ref<AudioModel[]>([]);

  /**
   * Состояние загрузки
   */
  const loading = ref<boolean>(false);

  /**
   * Загрузка всех аудио-треков
   *
   * @async
   */
  const fetchAll = async () => {
    try {
      loading.value = true;

      items.value = await AudioService.fetchAll();
    } finally {
      loading.value = false;
    }
  };

  /**
   * Добавление нового аудио-трека
   *
   * @param audioForm Новый аудио-трек
   */
  const add = async (audioForm: AudioCreateModel) => {
    items.value.push(await AudioService.create(audioForm));

    AudioService.commit(items.value);
  };

  /**
   * Удаление аудио-трека
   *
   * @param playlistId Идентификатор аудио-трека, который необходимо удалить
   */
  const remove = (audioId: AudioModel['id']) => {
    items.value = items.value.filter((item) => {
      return item.id !== audioId;
    });

    AudioService.commit(items.value);
  };

  return {
    items,

    fetchAll,
    add,
    remove,
  };
});
