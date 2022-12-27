import { AudioService } from '@/entities/audio';

class AudioVisualizationService {
  protected readonly context = new AudioContext();

  protected readonly analyzer = this.context.createAnalyser();

  protected source: MediaElementAudioSourceNode =
    this.context.createMediaElementSource(AudioService.element);

  constructor() {
    this.source.connect(this.analyzer);
    this.analyzer.connect(this.context.destination);
  }
}

export default new AudioVisualizationService() as AudioVisualizationService;
