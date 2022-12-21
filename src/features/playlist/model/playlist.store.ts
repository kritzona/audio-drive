import { defineStore } from 'pinia';
import { Stores } from '@/shared/constants';
import { ref, computed } from 'vue';
import { AudioModel } from '@/entities/audio';
import { PlaylistModel } from './playlist.model';

/**
 * Хранилище данных для выбранного плейлиста
 *
 * @returns {object} Публичные методы и свойства для работы с хранилищем
 */
export const usePlaylistStore = defineStore(Stores.PLAYLIST, () => {
  /**
   * Идентификатор плейлиста
   */
  const id = ref<string | null>(null);

  /**
   * Имя плейлиста
   */
  const name = ref<string | null>(null);

  /**
   * Список треков в плейлисте
   */
  const tracks = ref<AudioModel[]>([]);

  /**
   * Индекс текущего трека в списке
   */
  const currentTrackIndex = ref<number>(0);

  /**
   * Текущий трек
   */
  const currentTrack = computed(() => tracks.value[currentTrackIndex.value]);

  /**
   * Инициализация плейлиста
   *
   * @param audios Список треков плейлиста
   * @param beginWith Идентификатор аудио-трека, с которого нужно начать плейлист
   */
  const setup = (playlist: PlaylistModel, beginWith?: string) => {
    id.value = playlist.id;
    name.value = playlist.name;
    tracks.value = [...playlist.tracks];

    if (beginWith) {
      setCurrentTrackById(beginWith);
    } else {
      currentTrackIndex.value = 0;
    }
  };

  /**
   * Переключение трека по идентификатору
   */
  const setCurrentTrackById = (id: string) => {
    const trackIndex = tracks.value.findIndex((track) => id === track.id);
    currentTrackIndex.value = trackIndex;
  };

  /**
   * Переключится в начало плейлиста
   *
   * @returns Первый трек из плейлиста или ничего,
   * если плейлист пуст
   */
  const first = (): AudioModel | null => {
    try {
      const firstTrack = tracks.value[0];

      currentTrackIndex.value = 0;

      return firstTrack;
    } catch {
      return null;
    }
  };

  /**
   * Переключится в конец плейлиста
   *
   * @returns Последний трек из плейлиста или ничего,
   * если далее ничего нет, либо плейлист пуст
   */
  const last = (): AudioModel | null => {
    try {
      const lastTrack = tracks.value[tracks.value.length - 1];

      currentTrackIndex.value = tracks.value.length - 1;

      return lastTrack;
    } catch {
      return null;
    }
  };

  /**
   * Переключится на предыдущий трек
   *
   * @returns Предыдущий трек из плейлиста или последний трек,
   * если текущий трек является первым
   */
  const prev = (): AudioModel | null => {
    const prevTrackIndex = currentTrackIndex.value - 1;
    const prevTrack = tracks.value[prevTrackIndex];

    const noTrack = !prevTrack;
    if (noTrack) {
      return last();
    }

    currentTrackIndex.value = prevTrackIndex;

    return prevTrack;
  };

  /**
   * Переключится на следующий трек
   *
   * @returns Следующий трек из плейлиста или первый трек,
   * если текущий трек является последним
   */
  const next = (): AudioModel | null => {
    const nextTrackIndex = currentTrackIndex.value + 1;
    const nextTrack = tracks.value[nextTrackIndex];

    const noTrack = !nextTrack;
    if (noTrack) {
      return first();
    }

    currentTrackIndex.value = nextTrackIndex;

    return nextTrack;
  };

  return {
    name,
    tracks,
    currentTrack,
    currentTrackIndex,

    setup,
    first,
    last,
    prev,
    next,
  };
});
