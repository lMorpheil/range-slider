import Track from './track';
import Slider from './slider';

export default class SingleSlider {
  constructor() {
    this.render();
    this.clickX = this.getClickXTrack();
  }

  render() {
    const parent = document.querySelector('#range-slider');// поправить позже
    const track = new Track();
    parent.append(track.track);
    const slider = new Slider();
    track.track.append(slider.slider);
  }

  getClickXTrack() {
    const track = new Track();
    let click;
    function handlerTrackClickRangeSliderTrack(event) {
      click = event.clientX;
      return click;
    }
    track.track.addEventListener('click', handlerTrackClickRangeSliderTrack);
    return click;
  }
}
