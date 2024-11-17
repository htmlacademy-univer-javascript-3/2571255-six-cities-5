import { createReducer } from '@reduxjs/toolkit';
import {MockLocations} from '../mocks/locations.ts';
import {MockOffersList} from '../mocks/offer-list-items.ts';
import { changeCityAction, fillOrdersAction, changeSortingOrderAction } from './actions';
import {State} from '../models/state.ts';

const initialState: State = {
  city: MockLocations.find((c) => c.name === 'Paris')?.name || MockLocations[0].name,
  offers: [],
  sortingOrder: 'Popular'
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOrdersAction, (state) => {
      state.offers = MockOffersList;
    })
    .addCase(changeSortingOrderAction, (state, action) => {
      state.sortingOrder = action.payload;
    });
});
