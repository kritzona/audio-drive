import { AudioModel } from '../model/audio.model';

export class AudioService {
  static async fetchAll() {
    const audiosRecord = localStorage.getItem('audios');
    const audios: AudioModel[] = audiosRecord ? JSON.parse(audiosRecord) : [];

    return audios;
  }

  static commit(audios: AudioModel[]) {
    const audiosRecord = JSON.stringify(audios);
    localStorage.setItem('audios', audiosRecord);
  }
}
