import { Errors } from '@/constants/errors.constants';
import { AudioModel } from '@/models/audio.model';

class AudioService {
  constructor() {
    this.element = new Audio();
  }

  protected readonly element: HTMLAudioElement;

  protected get hasDefect() {
    return Boolean(this.element.HAVE_NOTHING || this.element.NETWORK_EMPTY);
  }

  change(audio: AudioModel) {
    return new Promise((resolve) => {
      this.element.src = audio.url;

      this.element.addEventListener('ended', () => {
        this.setCurrentTime(0);
      });

      this.element.addEventListener('loadeddata', () => {
        resolve(true);
      });
    });
  }

  play() {
    return new Promise((resolve, reject) => {
      if (this.hasDefect) {
        reject(Errors.PLAY);
      }

      resolve(this.element.play());
    });
  }

  pause() {
    this.element.pause();
  }

  stop() {
    this.element.currentTime = 0;

    this.pause();
  }

  setCurrentTime(seconds: number) {
    this.element.currentTime = seconds;
  }

  listenTimeChange(callback: (seconds: number) => void) {
    this.element.addEventListener('timeupdate', () => {
      const currentTime = Math.floor(this.element.currentTime);

      callback(currentTime);
    });
  }
}

export default new AudioService();
