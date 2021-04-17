export default class Model {
  constructor(step = 10, valueMax = 50, valueMin = 10, currentValue = 20, currentValue2 = 40) {
    this.step = step;
    this.valueMax = valueMax;
    this.valueMin = valueMin;
    this.currentValue = currentValue;
    this.currentValue2 = currentValue2;
    this.checkCurrentValue(currentValue, valueMin, valueMax);
  }

  checkCurrentValue() {
    if (this.currentValue >= this.valueMax) {
      this.currentValue = this.valueMax;
    } else if (this.currentValue <= this.valueMin) {
      this.currentValue = this.valueMin;
    }
  }
}
