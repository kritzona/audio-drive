import { AudioModel } from "./audio.model"

export interface PlayerModel {
  audio: AudioModel | null;
  playing: boolean;
  stoped: boolean;
  elapsedSeconds: number;
  hasError: boolean;
}
