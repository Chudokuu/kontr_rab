import { AbstractComponent } from './view/abstract-component.js';

export const RenderPosition = {
  BEFOREEND: 'beforeend',
};

export function render(component, container, place = RenderPosition.BEFOREEND) {
  if (!(component instanceof AbstractComponent)) {
    throw new Error('Can render only components');
  }
  container.insertAdjacentElement(place, component.element);
}

export function clear(component) {
  component.removeElement();
  component.element.remove();
}