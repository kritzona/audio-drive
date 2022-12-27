import { Caches } from '@/shared/constants/caches.contants';
import { AudioCreateModel, AudioModel } from '../model/audio.model';
import * as uuid from 'uuid';
import { fileToBase64Url } from '@/shared/lib';

class AudioService {
  static async fetchAll() {
    const audiosRecord = localStorage.getItem('audios');
    const audios: AudioModel[] = audiosRecord ? JSON.parse(audiosRecord) : [];

    return audios;
  }

  static async create(audioForm: AudioCreateModel): Promise<AudioModel> {
    return {
      id: uuid.v4(),
      url: await fileToBase64Url(audioForm.audio),
      cover: await fileToBase64Url(audioForm.cover),
      fileName: audioForm.fileName,
      format: audioForm.format,
      name: audioForm.name,
      author: audioForm.author,
    };
  }

  static async wrapAudio(audio: AudioModel): Promise<AudioModel> {
    const audioFilesCache = await caches.open(Caches.FILES);

    const audioResponse = await audioFilesCache.match(audio.url);
    if (!audioResponse) {
      return audio;
    }

    const audioUrl = window.URL.createObjectURL(await audioResponse.blob());
    console.log(audioResponse, audioUrl);

    return {
      ...audio,
      url: audioUrl,
    };
  }

  static commit(audios: AudioModel[]) {
    const audiosRecord = JSON.stringify(audios);
    localStorage.setItem('audios', audiosRecord);
  }
}

export default AudioService;
