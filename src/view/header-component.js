import { AbstractComponent } from '../framework/view/abstract-component.js';

export default class HeaderComponent extends AbstractComponent {
  get template() {
    return `<header class="header"><h1 class="header-title">Мои поездки</h1></header>`;
  }
}