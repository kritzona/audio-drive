import { Caches } from '@/shared/constants/caches.contants';
import { AudioCreateModel, AudioModel } from '../model/audio.model';
import * as uuid from 'uuid';

class AudioService {
  static async fetchAll() {
    const audiosRecord = localStorage.getItem('audios');
    const audios: AudioModel[] = audiosRecord ? JSON.parse(audiosRecord) : [];

    return audios;
  }

  static async create(audioForm: AudioCreateModel): Promise<AudioModel> {
    const audioId = uuid.v4();
    const audioUrl = `/${Caches.AUDIO_FILES}/${audioForm.fileName}?id=${audioId}`;
    const audioFilesCache = await caches.open(Caches.AUDIO_FILES);
    audioFilesCache.put(audioUrl, new Response(audioForm.audio));

    const imageId = uuid.v4();
    const imageUrl = `/${Caches.IMAGE_FILES}/${audioForm.cover.name}?id=${imageId}`;
    const imageFilesCache = await caches.open(Caches.AUDIO_FILES);
    imageFilesCache.put(imageUrl, new Response(audioForm.cover));

    return {
      id: audioId,
      url: audioUrl,
      cover: imageUrl,
      fileName: audioForm.fileName,
      format: audioForm.format,
      name: audioForm.name,
      author: audioForm.author,
    };
  }

  static async wrapAudio(audio: AudioModel): Promise<AudioModel> {
    const audioFilesCache = await caches.open(Caches.AUDIO_FILES);

    const audioResponse = await audioFilesCache.match(audio.url);
    console.log(audioResponse);
    if (!audioResponse) {
      return audio;
    }

    const audioUrl = window.URL.createObjectURL(await audioResponse.blob());

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
