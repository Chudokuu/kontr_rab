export class AbstractComponent {
  #element = null;

  constructor() {
    if (new.target === AbstractComponent) {
      throw new Error("Can't instantiate AbstractComponent, only concrete one.");
    }
  }

  get element() {
    if (!this.#element) {
      this.#element = this._create();
    }
    return this.#element;
  }

  _create() {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = this.template;
    return wrapper.firstElementChild;
  }

  get template() {
    throw new Error('Abstract method not implemented: get template');
  }

  removeElement() {
    this.#element = null;
  }
}