import './style/style.scss';
import SingleSlider from './view/singleSlider.js';
import DoubleSlider from './view/doubleSlider.js';
import Model from './model/model';
import Observer from './observer/observer';
import Presenter from './presenter/presenter';

const id = document.querySelector('#range-slider');
let a = new SingleSlider(id);
const id1 = document.querySelector('#range-slider-db');
let db = new DoubleSlider(id1);

let b = new Model();
