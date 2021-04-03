// import './style/style.scss';

// const id = document.querySelector('#range-slider');
// // создание дорожки
// const track = document.createElement('div'); //
// track.classList.add('range-slider__track'); //

// const slider = document.createElement('div'); //
// slider.classList.add('range-slider__slider'); //

// track.prepend(slider);
// id.prepend(track);


// const step = 1;
// const valueMax = 5;
// const valueMin = 0;
// const scaleDivision = track.offsetWidth / (valueMax - valueMin);
// const stepRender = scaleDivision * step;
// let currentValue = 1;
// Установка начального значения слайдера
// function initCurrentValue() {
//   slider.style.left = `${(currentValue * scaleDivision) - (slider.offsetWidth / 2)}px`;
// }





// обработка событий мыши
// ----- При клике на элемент
// function handlerTrackClickRangeSliderTrack(event) {
//   currentValue = `${(event.clientX - track.getBoundingClientRect().left - (slider.offsetWidth / 2)) / scaleDivision}`;
//   slider.style.left = `${currentValue * scaleDivision}px`;
// }
// track.addEventListener('click', handlerTrackClickRangeSliderTrack);
// // ------- При ведении мыши с зажатой кнопкой(Drag and Drop)
// function handlerTrackDragAndDropRangeSliderTrack(eventMouseDown) {
//   function moveAt(pageX) {
//     if (parseFloat(slider.style.left) <= 0) {
//       slider.style.left = 0;
//     } else if (parseFloat(slider.style.left) >= (track.offsetWidth - (slider.offsetWidth / 2))) {
//       slider.style.left = `${track.offsetWidth - (slider.offsetWidth / 2)}px`;
//     } else {
//       slider.style.left = `${pageX - track.getBoundingClientRect().left - (slider.offsetWidth / 2)}px`;
//     }
//   }
//   moveAt(eventMouseDown.pageX);
//   function mouseMove(event) {
//     moveAt(event.clientX);
//     currentValue = `${(event.clientX - track.getBoundingClientRect().left - (slider.offsetWidth / 2)) / scaleDivision}`;
//   }
//   document.addEventListener('mousemove', mouseMove);
//   function clearMouseMoveEvent() {
//     document.removeEventListener('mousemove', mouseMove);
//     document.removeEventListener('mouseup', clearMouseMoveEvent);
//   }
//   slider.addEventListener('mouseup', clearMouseMoveEvent);
// }
// slider.addEventListener('mousedown', handlerTrackDragAndDropRangeSliderTrack);
// slider.ondragstart = function () {
//   return false;
// };
// initCurrentValue();
// определяем текущее положение ползунка

// создание шкалы
// Параметры шкалы


// создание элементов
// const scale = document.createElement('div');
// scale.classList.add('scale');

// id.after(scale);
// отрисовка шкалы
// for (let index = 0; step * index <= valueMax; index++) {//
//   const scaleLine = document.createElement('div');//
//   scaleLine.classList.add('scale__line');//
//   scaleLine.style.left = `${stepRender * index}px`;//
//   scale.append(scaleLine);//
//   if (index === 0 || index === valueMax) {//
//     scaleLine.classList.add('scale__lien_size_long');//
//     scaleLine.style.left = `${stepRender * index - scaleLine.offsetWidth / 2}px`;//
//   } else {//
//     scaleLine.classList.add('scale__line_size_short');//
//     scaleLine.style.left = `${stepRender * index - scaleLine.offsetWidth / 2}px`;//
//   }//
// }//
// создание флага
// const flag = document.createElement('span'); //
// flag.classList.add('flag'); //

// slider.append(flag);
// Показания флага
// function getcurrentValue() {
//   if (currentValue <= valueMin) {
//     currentValue = valueMin;
//   } else if (currentValue >= valueMax) {
//     currentValue = valueMax;
//   }
//   flag.innerHTML = currentValue;
// }
// setInterval(() => {
//   getcurrentValue();
// }, 1);
