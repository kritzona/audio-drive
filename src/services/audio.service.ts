import { Errors } from '@/constants/errors.constants';
import { AudioModel } from '@/models/audio.model';
import { ElementEventManager } from '@/utils/event.utils';

class AudioService {
  protected static readonly element = new Audio();

  protected static readonly eventManager = new ElementEventManager(
    this.element
  );

  protected static get hasDefect() {
    return Boolean(this.element.HAVE_NOTHING || this.element.NETWORK_EMPTY);
  }

  static get duration() {
    return Math.ceil(this.element.duration);
  }

  static change(audio: AudioModel, onReady?: () => void) {
    this.eventManager.clear();

    this.element.src = audio.url;

    if (onReady) {
      this.eventManager.add('loadeddata', onReady);
    }
  }

  static async play() {
    this.eventManager.clear();

    if (this.hasDefect) {
      return Promise.reject(Errors.PLAY);
    }

    return this.element.play();
  }

  static pause() {
    this.element.pause();
  }

  static stop() {
    this.setCurrentTime(0);
    this.pause();
  }

  static setCurrentTime(seconds: number) {
    this.element.currentTime = seconds;
  }

  static listenTimeChange(callback: (seconds: number) => void) {
    this.eventManager.add('timeupdate', () => {
      const currentTime = Math.floor(this.element.currentTime);

      callback(currentTime);
    });
  }

  static listenTrackEnd(callback: () => void) {
    this.eventManager.add('ended', callback);
  }
}

export default AudioService;
