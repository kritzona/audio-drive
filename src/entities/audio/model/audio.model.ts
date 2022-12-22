/**
 * Описание модели аудио-трека
 */
export interface AudioModel {
  /** Идентификатор */
  id: string;

  /** Ссылка на файл */
  url: string;

  /** Имя файла */
  fileName: string;

  /** Ссылка на обложку */
  cover: string;

  /** Формат файла */
  format: string;

  /** Название */
  name: string;

  /** Автор */
  author: string;
}

export type AudioCreateModel = Omit<AudioModel, 'id' | 'url' | 'cover'> & {
  cover: File;
  audio: File;
};
