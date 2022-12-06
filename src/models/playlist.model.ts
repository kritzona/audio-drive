import { AudioModel } from './audio.model';

export interface PlaylistModel {
  id: string;
  name: string;
  tracks: AudioModel[];
}
