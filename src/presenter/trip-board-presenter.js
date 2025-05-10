

import TripComponent from '../view/trip-component.js';
import EditTripComponent from '../view/edit-trip-component.js';
import { render } from '../framework/render.js';

export default class TripBoardPresenter {
  #model;
  #listContainer;
  #filterFrom = null;
  #filterTo = null;

  constructor({ model, listContainer }) {
    this.#model = model;
    this.#listContainer = listContainer;
    this.#model.addObserver(this._onModelChange.bind(this));
  }

  init() {
    this._renderTrips();
  }

  handleAddTrip(data) {
    this.#model.addTrip(data);
  }

  handleDeleteTrip(id) {
    this.#model.deleteTrip(id);
  }

  handleEditTrip(trip) {
    render(
      new EditTripComponent({ trip, onSave: this.handleSaveEdit.bind(this) }),
      document.body
    );
  }

  handleSaveEdit(id, updated) {
    this.#model.updateTrip(id, updated);
  }

  handleFilter(from, to) {
    this.#filterFrom = from;
    this.#filterTo = to;
    this._renderTrips();
  }

  _onModelChange() {
    this._renderTrips();
  }

  _renderTrips() {
    this.#listContainer.innerHTML = '';
    const trips = this.#model.filterByDate(this.#filterFrom, this.#filterTo);
    trips.forEach(trip => {
      render(
        new TripComponent({
          trip,
          onEdit: this.handleEditTrip.bind(this),
          onDelete: this.handleDeleteTrip.bind(this),
        }),
        this.#listContainer
      );
    });
  }
}