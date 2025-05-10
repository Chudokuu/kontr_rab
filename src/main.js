
import { render,RenderPosition } from './framework/render.js';
import HeaderComponent from './view/header-component.js';
import NewTripComponent from './view/new-trip-component.js';
import FilterComponent from './view/filter-component.js';
import TripBoardPresenter from './presenter/trip-board-presenter.js';
import TripListComponent from './view/trip-list-component.js';
import TripModel from './model/trip-model.js';
import { trips } from './mock/trip.js';



const appContainer = document.getElementById('app');
render(new HeaderComponent(), appContainer, RenderPosition.BEFOREEND);

const mainContainer = document.createElement('div');
mainContainer.className = 'main-container';
appContainer.append(mainContainer);

let presenter;

const newTripComp = new NewTripComponent({ onAdd: data => presenter.handleAddTrip(data) });
render(newTripComp, mainContainer);

const filterComp = new FilterComponent({ onFilter: (from, to) => presenter.handleFilter(from, to) });
render(filterComp, mainContainer);

const tripListComp = new TripListComponent();
render(tripListComp, mainContainer);

const model = new TripModel(trips);
presenter = new TripBoardPresenter({ model, listContainer: tripListComp.element });
presenter.init();