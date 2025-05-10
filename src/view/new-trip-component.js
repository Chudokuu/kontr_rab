import { AbstractComponent } from '../framework/view/abstract-component.js';

export default class NewTripComponent extends AbstractComponent {
  constructor({ onAdd }) {
    super();
    this._onAdd = onAdd;
    this.element.querySelector('button').addEventListener('click', this._handleClick);
  }

  get template() {
    return `
      <section class="new-trip_container">
        <h2 class="trip_title">Новая поездка</h2>
        <input type="text" class="new-trip_input destination" placeholder="Место назначения" />
        <input type="date" class="new-trip_input date" />
        <textarea class="new-trip_input notes" placeholder="Заметки..."></textarea>
        <button class="new-trip_button">+ Добавить</button>
      </section>
    `;
  }

  _handleClick = () => {
    const dest = this.element.querySelector('.destination').value.trim();
    const date = this.element.querySelector('.date').value;
    const notes = this.element.querySelector('.notes').value.trim();
    if (dest && date) {
      this._onAdd({ destination: dest, date, notes });
      this.element.querySelectorAll('input, textarea').forEach(i => i.value = '');
    } else {
      alert('Пожалуйста, укажите место и дату.');
    }
  }
}