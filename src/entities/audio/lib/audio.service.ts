import { Errors } from '@/shared/constants';
import { AudioModel } from '@/entities/audio';
import { ElementEventManager } from '@/shared/lib';

/**
 * Сервис для работы с Audio API
 */
class AudioService {
  /**
   * DOM-элемент для работы с Audio API
   */
  protected static readonly _element = new Audio();

  /**
   * Менеджер событий для DOM-элементов
   */
  protected static readonly eventManager = new ElementEventManager(
    this._element
  );

  /**
   * Имеются ли дефекты при воспроизведении
   */
  protected static get hasDefect() {
    return Boolean(this._element.HAVE_NOTHING || this._element.NETWORK_EMPTY);
  }

  /**
   * Продолжительность трека
   */
  static get duration() {
    return Math.ceil(this._element.duration);
  }

  /**
   * Аудио-элемент
   */
  static get element() {
    return this._element;
  }

  /**
   * Смена трека
   *
   * @param audio Аудио-трек
   * @param onReady Коллбек, который вызывается по готовности трека к воспроизведению
   */
  static change(audio: AudioModel, onReady?: () => void) {
    this.eventManager.clear();

    this._element.src = audio.url;

    if (onReady) {
      this.eventManager.add('loadeddata', onReady);
    }
  }

  /**
   * Воспроизведение трека
   *
   * @async
   * @returns Промис после начала воспроизведения трека
   */
  static async play() {
    this.eventManager.clear();

    if (this.hasDefect) {
      return Promise.reject(Errors.PLAY);
    }

    return this._element.play();
  }

  /**
   * Остановка трека на паузу
   */
  static pause() {
    this._element.pause();
  }

  /**
   * Полная остановка трека
   */
  static stop() {
    this.setCurrentTime(0);
    this.pause();
  }

  /**
   * Выставление текущего времени треку
   *
   * @param seconds Секунда, с которой необходимо воспроизвести трек
   */
  static setCurrentTime(seconds: number) {
    this._element.currentTime = seconds;
  }

  /**
   * Подписка на изменение текущего времени трека
   *
   * @param callback Коллбек, который вызовится
   * при изменении текущего времени трека
   */
  static listenTimeChange(callback: (seconds: number) => void) {
    this.eventManager.add('timeupdate', () => {
      const currentTime = Math.floor(this._element.currentTime);

      callback(currentTime);
    });
  }

  /**
   * Подписка на момент окончания трека
   *
   * @param callback Коллбэк, который вызовится
   * после окончании трека
   */
  static listenTrackEnd(callback: () => void) {
    this.eventManager.add('ended', callback);
  }
}

export default AudioService;
