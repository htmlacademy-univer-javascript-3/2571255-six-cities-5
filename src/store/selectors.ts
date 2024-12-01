import {State} from '../models/state.ts';
import {sortingOrders} from '../models/sorting-order.ts';
import {createSelector} from '@reduxjs/toolkit';

export const cityOffersSelector = createSelector(
  [
    (state: State) => state.offers.offers,
    (state: State) => state.offers.sortingOrder,
    (state: State) => state.city.city,
  ],
  (offers, order, city) =>
    offers.filter((o) => o.city.name === city).sort(sortingOrders[order])
);
