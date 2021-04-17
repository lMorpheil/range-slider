import Track from './track';
import Slider from './slider';
import Flag from './flag';
import Scale from './scale';

import Model from '../model/model'; // импорт модели!!

export default class SingleSlider {
  constructor(id) {
    this.init();
    this.render(id);
    this.initModel(); ///
    this.countLine();
    this.stepRender();
    this.initCurrentValue();
    this.controlScaleRender();
    this.controlSliderPosition();
    this.flagValue();
  }

  init() {
    const track = new Track();
    this.track = track;
    const slider = new Slider();
    this.slider = slider;
    const flag = new Flag();
    this.flag = flag;
    const scale = new Scale();
    this.scale = scale;
  }

  render(id) {
    id.prepend(this.track.track);
    id.after(this.scale.scale);
    this.track.track.prepend(this.slider.slider);
    this.slider.slider.append(this.flag.flag);
  }

  // модель
  initModel() {
    const model = new Model();
    this.model = model;
  }

  controlSliderPosition() {
    this.track.track.addEventListener('click', this.handlerTrackClickRangeSliderTrack.bind(this));
    this.slider.slider.addEventListener('mousedown', this.handlerTrackDragAndDropRangeSliderTrack.bind(this));
    this.slider.slider.ondragstart = function () {
      return false;
    };
  }

  handlerTrackClickRangeSliderTrack(event) {
    this.model.currentValue = `${((event.clientX - this.track.track.getBoundingClientRect().left - (this.slider.slider.offsetWidth / 2)) / this.scaleDivision) + this.model.valueMin}`;
    this.slider.slider.style.left = `${(this.model.currentValue - this.model.valueMin) * this.scaleDivision}px`;
  }

  controlScaleRender() {
    for (let index = 0; index <= this.countLine; index++) {
      const scaleLine = document.createElement('div');
      scaleLine.classList.add('scale__line');
      scaleLine.style.left = `${this.stepRender * index}px`;
      this.scale.scale.append(scaleLine);
      if (index === 0 || index === this.countLine) {
        scaleLine.classList.add('scale__lien_size_long');
        scaleLine.style.left = `${this.stepRender * index - scaleLine.offsetWidth / 2}px`;
      } else {
        scaleLine.classList.add('scale__line_size_short');
        scaleLine.style.left = `${this.stepRender * index - scaleLine.offsetWidth / 2}px`;
      }
    }
  }

  countLine() {
    const countLine = (this.model.valueMax - this.model.valueMin) / this.model.step;
    this.countLine = countLine;
  }

  stepRender() {
    const scaleDivision = this.track.track.offsetWidth / (this.model.valueMax - this.model.valueMin);
    const stepRender = scaleDivision * this.model.step;
    this.scaleDivision = scaleDivision;
    this.stepRender = stepRender;
  }

  initCurrentValue() {
    this.slider.slider.style.left = `${((this.model.currentValue - this.model.valueMin) * this.scaleDivision) - (this.slider.slider.offsetWidth / 2)}px`;
  }

  flagValue() {
    setInterval(() => {
      if (this.model.currentValue < this.model.valueMin) {
        this.model.currentValue = this.model.valueMin;
      } else if (this.model.currentValue > this.model.valueMax) {
        this.model.currentValue = this.model.valueMax;
      } else {
        this.flag.flag.innerHTML = this.model.currentValue;
      }
    }, 1);
  }

  moveAt(pageX) {
    if (parseFloat(this.slider.slider.style.left) <= 0) {
      this.slider.slider.style.left = 0;
    } else if (parseFloat(this.slider.slider.style.left) >= (this.track.track.offsetWidth - (this.slider.slider.offsetWidth / 2))) {
      this.slider.slider.style.left = `${this.track.track.offsetWidth - (this.slider.slider.offsetWidth / 2)}px`;
    } else {
      this.slider.slider.style.left = `${(pageX - this.track.track.getBoundingClientRect().left - (this.slider.slider.offsetWidth / 2))}px`;
    }
  }

  handlerTrackDragAndDropRangeSliderTrack(eventMouseDown) {
    this.moveAt(eventMouseDown.pageX);
    function mouseMove(event) {
      this.moveAt(event.clientX);
      this.model.currentValue = `${((event.clientX - this.track.track.getBoundingClientRect().left - (this.slider.slider.offsetWidth / 2)) / this.scaleDivision) + this.model.valueMin}`;
    }
    const mouseMoveBind = mouseMove.bind(this);
    document.addEventListener('mousemove', mouseMoveBind);
    function clearMouseMoveEvent() {
      document.removeEventListener('mousemove', mouseMoveBind);
      document.removeEventListener('mouseup', clearMouseMoveEvent);
    }
    this.slider.slider.addEventListener('mouseup', clearMouseMoveEvent);
  }
}
