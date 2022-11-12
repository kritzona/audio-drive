import { Errors } from "@/constants/errors.constants"

class AudioService {
  constructor() {
    this.element = new Audio()
  }

  protected readonly element: HTMLAudioElement

  protected get hasDefect() {
    return this.element.HAVE_NOTHING || this.element.NETWORK_EMPTY
  }

  play() {
    return new Promise((resolve, reject) => {
      if (this.hasDefect) {
        reject(Errors.PLAY)
      }

      this.element.addEventListener('canplaythrough', () => {
        resolve(this.element.play())
      })
    })
  }

  pause() {
    this.element.pause()
  }

  stop() {
    this.element.currentTime = 0

    this.pause()
  }
}

export default new AudioService()