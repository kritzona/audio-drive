import { AudioModel } from '@/models/audio.model';

export const createAudioMp3Mock = (): AudioModel => ({
  id: '1',
  url: '/mock-audio/LanaDelRey_SummertimeSadness.mp3',
  fileName: 'LanaDelRey_SummertimeSadness.mp3',
  cover: '/mock-covers/LanaDelRey_SummertimeSadness.jpeg',
  format: 'audio/mpeg',
  name: 'Summertime Sadness',
  author: 'Lana Del Rey',
  duration: 0,
});
