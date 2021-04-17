export default class Flag {
  flag!: HTMLElement;

  constructor() {
    this.createFlag();
  }

  private createFlag(): void {
    const flag = document.createElement('span');
    flag.classList.add('range-slider__flag');
    this.flag = flag;
  }
}
