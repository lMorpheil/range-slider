export default class Track {
  track!: HTMLElement;

  constructor() {
    this.createTrack();
  }

  private createTrack(): void {
    const track: HTMLElement = document.createElement('div');
    track.classList.add('range-slider__track');
    this.track = track;
  }
}
