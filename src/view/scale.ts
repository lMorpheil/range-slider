export default class Scale {
  scale!: HTMLElement;

  constructor() {
    this.createScale();
  }

  private createScale(): void {
    const scale = document.createElement('div');
    scale.classList.add('scale');
    this.scale = scale;
  }
}
