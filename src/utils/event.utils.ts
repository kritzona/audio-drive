export class ElementEventManager {
  protected events: Set<[keyof HTMLElementEventMap, () => void]> = new Set();

  constructor(protected readonly element: HTMLElement) {}

  add(name: keyof HTMLElementEventMap, callback: () => void) {
    this.events.add([name, callback]);

    this.element.addEventListener(name, callback);
  }

  clear() {
    this.events.forEach(([name, callback]) => {
      this.element.removeEventListener(name, callback);
    });

    this.events.clear();
  }
}
