export default class Slider {
  slider!: HTMLElement;

  constructor() {
    this.createSlider();
  }

  createSlider(): void {
    const slider = document.createElement('div');
    slider.classList.add('range-slider__slider');
    this.slider = slider;
  }
}