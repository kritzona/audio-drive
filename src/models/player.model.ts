export interface PlayerModel {
  /** TODO: необходимо добавить модель аудио-файла */
  audio: Record<string, unknown> | null;
  playing: boolean;
  stoped: boolean;
  elapsedSeconds: number;
  hasError: boolean;
}
