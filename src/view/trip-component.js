import { AbstractComponent } from '../framework/view/abstract-component.js';

export default class TripComponent extends AbstractComponent {
  constructor({ trip, onEdit, onDelete }) {
    super();
    this._trip = trip;
    this._onEdit = onEdit;
    this._onDelete = onDelete;
    this.element.querySelector('.delete-trip').addEventListener('click', () => this._onDelete(this._trip.id));
    this.element.querySelector('.edit-trip').addEventListener('click', () => this._onEdit(this._trip));
  }

  get template() {
    return `
      <div class="trip">
        <h3 class="trip-destination">${this._trip.destination}</h3>
        <div class="trip-date">${this._trip.date}</div>
        <div class="trip-notes">${this._trip.notes}</div>
        <div class="trip-controls">
          <button class="edit-trip">Редактировать</button>
          <button class="delete-trip">Удалить</button>
        </div>
      </div>
    `;
  }
}