import { AbstractComponent } from '../framework/view/abstract-component.js';

export default class FilterComponent extends AbstractComponent {
  constructor({ onFilter }) {
    super();
    this._onFilter = onFilter;
    this.element.querySelector('.filter-button').addEventListener('click', () => {
      const from = this.element.querySelector('.from').value;
      const to = this.element.querySelector('.to').value;
      this._onFilter(from, to);
    });
  }

  get template() {
    return `
      <section class="filter-container">
        <h2 class="filter_title">Фильтр по дате</h2>
        <label>От: <input type="date" class="from" /></label>
        <label>До: <input type="date" class="to" /></label>
        <button class="filter-button">Применить</button>
      </section>
    `;
  }
}