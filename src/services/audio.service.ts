import { Errors } from "@/constants/errors.constants"
import { AudioModel } from "@/models/audio.model"

class AudioService {
  constructor() {
    this.element = new Audio()
  }

  protected readonly element: HTMLAudioElement

  protected get hasDefect() {
    return this.element.HAVE_NOTHING || this.element.NETWORK_EMPTY
  }

  change(audio: AudioModel) {
    return new Promise((resolve) => {
      this.element.src = audio.url

      this.element.addEventListener('loadeddata', () => {
        resolve(true)
      })
    })
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