import { AudioModel } from "@/models/audio.model";

export const createAudioMp3Mock = (): AudioModel => ({
  id: '1',
  url: '/mock-audio/kulinka.mp3',
  fileName: 'kulinka.mp3',
  format: 'audio/mpeg',
  name: 'Молитва',
  author: 'kulinka',
  duration: 0,
})
