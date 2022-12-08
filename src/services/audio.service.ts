import { Errors } from '@/constants/errors.constants';
import { AudioModel } from '@/models/audio.model';

class AudioService {
  private static element: HTMLAudioElement = new Audio();

  protected static get hasDefect() {
    return Boolean(this.element.HAVE_NOTHING || this.element.NETWORK_EMPTY);
  }

  static get duration() {
    return Math.ceil(this.element.duration);
  }

  static change(audio: AudioModel, onReady?: () => void) {
    this.element.src = audio.url;

    if (onReady) {
      this.element.addEventListener('loadeddata', onReady);
    }
  }

  static async play() {
    if (this.hasDefect) {
      return Promise.reject(Errors.PLAY);
    }

    return this.element.play();
  }

  static pause() {
    this.element.pause();
  }

  static stop() {
    this.element.currentTime = 0;

    this.pause();
  }

  static setCurrentTime(seconds: number) {
    this.element.currentTime = seconds;
  }

  static listenTimeChange(callback: (seconds: number) => void) {
    this.element.addEventListener('timeupdate', () => {
      const currentTime = Math.floor(this.element.currentTime);

      callback(currentTime);
    });
  }

  static listenTrackEnd(callback: () => void) {
    this.element.addEventListener('ended', callback);
  }
}

export default AudioService;
