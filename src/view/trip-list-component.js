import { AbstractComponent } from '../framework/view/abstract-component.js';

export default class TripListComponent extends AbstractComponent {
  get template() {
    return `<section class="trips"></section>`;
  }
}