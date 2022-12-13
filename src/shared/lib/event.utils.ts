/**
 * Класс для работы с событиями DOM-элементов
 */
export class ElementEventManager {
  /**
   * Список событий
   */
  protected events: Set<[keyof HTMLElementEventMap, () => void]> = new Set();

  /**
   * @constructor
   * @param element DOM-элемент, с событиями которого будет осуществляться работа
   */
  constructor(protected readonly element: HTMLElement) {}

  /**
   * Добавление прослушки на событие
   *
   * @param name Имя события
   * @param callback Коллбэк, который исполнится при данном событии
   */
  add(name: keyof HTMLElementEventMap, callback: () => void) {
    this.events.add([name, callback]);

    this.element.addEventListener(name, callback);
  }

  /**
   * Очищение всех событий из памяти
   */
  clear() {
    this.events.forEach(([name, callback]) => {
      this.element.removeEventListener(name, callback);
    });

    this.events.clear();
  }
}
