import './style/style.scss';
import SingleSlider from './view/singleSlider.js';

class RangeSlider {
  constructor(id, step = 1, valueMax = 100, valueMin = 0, currentValue = 1) {
    this.step = step;
    this.valueMax = valueMax;
    this.valueMin = valueMin;
    this.currentValue = currentValue;
    this.track();
    this.slider();
    this.scale();
    this.flag();
    this.initCurrentValue();
    this.render(id);
    this.stepRender();
    this.controlScaleRender();
    this.flagValue();
    this.controlSliderPosition();
  }

  track() {
    const track = document.createElement('div');
    track.classList.add('range-slider__track');
    this.track = track;
  }

  slider() {
    const slider = document.createElement('div');
    slider.classList.add('range-slider__slider');
    this.slider = slider;
  }

  scale() {
    const scale = document.createElement('div');
    scale.classList.add('scale');
    this.scale = scale;
  }

  controlScaleRender() {
    for (let index = 0; this.step * index <= this.valueMax; index++) {
      const scaleLine = document.createElement('div');
      scaleLine.classList.add('scale__line');
      scaleLine.style.left = `${this.stepRender * index}px`;
      this.scale.append(scaleLine);
      if (index === 0 || index === this.valueMax) {
        scaleLine.classList.add('scale__lien_size_long');
        scaleLine.style.left = `${this.stepRender * index - scaleLine.offsetWidth / 2}px`;
      } else {
        scaleLine.classList.add('scale__line_size_short');
        scaleLine.style.left = `${this.stepRender * index - scaleLine.offsetWidth / 2}px`;
      }
    }
  }

  stepRender() {
    const scaleDivision = this.track.offsetWidth / (this.valueMax - this.valueMin);
    const stepRender = scaleDivision * this.step;
    this.scaleDivision = scaleDivision;
    this.stepRender = stepRender;
  }

  flag() {
    const flag = document.createElement('span');
    flag.classList.add('flag');
    this.flag = flag;
  }

  render(id) {
    id.prepend(this.track);
    id.after(this.scale);
    this.track.prepend(this.slider);
    this.slider.append(this.flag);
  }

  initCurrentValue() {
    this.slider.style.left = `${(this.currentValue * this.scaleDivision) - (this.slider.offsetWidth / 2)}px`;
  }

  flagValue() {
    if (this.currentValue <= this.valueMin) {
      this.currentValue = this.valueMin;
    } else if (this.currentValue >= this.valueMax) {
      this.currentValue = this.valueMax;
    }
    this.flag.innerHTML = this.currentValue;
  }

  handlerTrackClickRangeSliderTrack(event) {
    this.currentValue = `${(event.clientX - this.track.getBoundingClientRect().left - (this.slider.offsetWidth / 2)) / this.scaleDivision}`;
    this.slider.style.left = `${this.currentValue * this.scaleDivision}px`;
  }

  controlSliderPosition() {
    this.track.addEventListener('click', this.handlerTrackClickRangeSliderTrack.bind(this));
    this.slider.addEventListener('mousedown', this.handlerTrackDragAndDropRangeSliderTrack.bind(this));
    this.slider.ondragstart = function () {
      return false;
    };
  }

  moveAt(pageX) {
    if (parseFloat(this.slider.style.left) <= 0) {
      console.log(this.slider)
      this.slider.style.left = 0;
    } else if (parseFloat(this.slider.style.left) >= (this.track.offsetWidth - (this.slider.offsetWidth / 2))) {
      this.slider.style.left = `${this.track.offsetWidth - (this.slider.offsetWidth / 2)}px`;
    } else {
      this.slider.style.left = `${pageX - this.track.getBoundingClientRect().left - (this.slider.offsetWidth / 2)}px`;
    }
  }

  handlerTrackDragAndDropRangeSliderTrack(eventMouseDown) {
    this.moveAt(eventMouseDown.pageX);
    function mouseMove(event) {
      this.moveAt(event.clientX);
      this.currentValue = `${(event.clientX - this.track.getBoundingClientRect().left - (this.slider.offsetWidth / 2)) / this.scaleDivision}`;
    }
    const mouseMoveBind = mouseMove.bind(this);
    document.addEventListener('mousemove', mouseMoveBind);
    function clearMouseMoveEvent() {
      document.removeEventListener('mousemove', mouseMoveBind);
      document.removeEventListener('mouseup', clearMouseMoveEvent);
    }
    this.slider.addEventListener('mouseup', clearMouseMoveEvent);
  }
}

const id = document.querySelector('#range-slider');
let a = new RangeSlider(id, 1, 100, 0, 5);
a;
