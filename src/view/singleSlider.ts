import Track from './track';
import Slider from './slider';

export default class SingleSlider {
  constructor() {
    this.render();
  }

  private render() {
    const parent = document.querySelector('#range-slider');// поправить позже
    const track = new Track();
    parent?.append(track.track);
    const slider = new Slider();
    track.track.append(slider.slider);
  }

  private getClickXTrack(): number {
    const track = new Track();
    function handlerTrackClickRangeSliderTrack.bind(this) {
      const clickX = event.clientX;
      return clickX;
    }
    track.track.addEventListener('click', handlerTrackClickRangeSliderTrack);
    return clickX;
  }

}