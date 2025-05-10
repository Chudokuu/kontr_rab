
import { AbstractComponent } from '../framework/view/abstract-component.js';


export default class EditTripComponent extends AbstractComponent {
  constructor({ trip, onSave }) {
    super();
    this._trip = trip;
    this._onSave = onSave;
    this.element.querySelector('form').addEventListener('submit', this._handleSubmit);
  }

  get template() {
    return `
      <div class="modal">
        <form class="edit-trip_form">
          <input type="text" name="destination" value="${this._trip.destination}" required />
          <input type="date" name="date" value="${this._trip.date}" required />
          <textarea name="notes">${this._trip.notes}</textarea>
          <button type="submit">Сохранить</button>
        </form>
      </div>
    `;
  }

  _handleSubmit = (evt) => {
    evt.preventDefault();
    const data = new FormData(evt.target);
    this._onSave(this._trip.id, {
      destination: data.get('destination').trim(),
      date: data.get('date'),
      notes: data.get('notes').trim(),
    });
    document.body.removeChild(this.element);
  }
}