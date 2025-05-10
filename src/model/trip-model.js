
import { generateID } from '../utils.js';

export default class TripModel {
  #trips = [];
  #observers = [];

  constructor(initial = []) {
    this.#trips = initial;
  }

  get trips() {
    return this.#trips;
  }

  addObserver(observer) {
    this.#observers.push(observer);
  }

  removeObserver(observer) {
    this.#observers = this.#observers.filter(o => o !== observer);
  }

  _notify() {
    this.#observers.forEach(obs => obs());
  }

  addTrip({ destination, date, notes }) {
    const trip = { id: generateID(), destination, date, notes };
    this.#trips.push(trip);
    this._notify();
  }

  deleteTrip(id) {
    this.#trips = this.#trips.filter(t => t.id !== id);
    this._notify();
  }

  updateTrip(id, updated) {
    this.#trips = this.#trips.map(t => t.id === id ? { ...t, ...updated } : t);
    this._notify();
  }

  filterByDate(from, to) {
    return this.#trips.filter(t => {
      const d = new Date(t.date);
      return (!from || d >= new Date(from)) && (!to || d <= new Date(to));
    });
  }
}