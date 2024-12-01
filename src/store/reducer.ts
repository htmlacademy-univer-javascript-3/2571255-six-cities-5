import {createReducer} from '@reduxjs/toolkit';
import {MockLocations} from '../mocks/locations.ts';
import {changeCityAction,
  fillOrdersAction,
  changeSortingOrderAction,
  setOrdersLoadingStatusAction} from './actions';
import {SortingOrder} from '../models/sorting-order.ts';
import {OfferListItem} from '../models/offer-list-item.ts';

const initialState: {
  city: string;
  offers: OfferListItem[];
  sortingOrder: SortingOrder;
  offersLoadingStatus: boolean;
} = {
  city: MockLocations[0].name,
  offers: [],
  sortingOrder: 'Popular',
  offersLoadingStatus: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOrdersAction, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOrdersLoadingStatusAction, (state, action) => {
      state.offersLoadingStatus = action.payload;
    })
    .addCase(changeSortingOrderAction, (state, action) => {
      state.sortingOrder = action.payload;
    });
});
