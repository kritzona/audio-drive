import { AudioModel } from "./audio.model"

export interface PlayerModel {
  /** TODO: необходимо добавить модель аудио-файла */
  audio: AudioModel | null;
  playing: boolean;
  stoped: boolean;
  elapsedSeconds: number;
  hasError: boolean;
}
