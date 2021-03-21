const slider = document.querySelector('#range-slider');

let div = document.createElement('div');
div.classList.add('range-slider__line');
let span = document.createElement('span');
span.classList.add('range-slider__slider');

class RangeSlider {
  constructor(slider: any, range: any, slide: any) {
    slider.append(range)
    range.append(slide)
  }
  createElement () {
    
  }
}

new RangeSlider(slider, div, span)