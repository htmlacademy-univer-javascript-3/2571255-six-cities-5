import {createReducer} from '@reduxjs/toolkit';
import {MockLocations} from '../mocks/locations.ts';
import {
  changeAuthStatusAction,
  changeCityAction,
  changeSortingOrderAction,
  fillOrdersAction,
  setOrdersLoadingStatusAction,
  setUserAction
} from './actions';
import {SortingOrder} from '../models/sorting-order.ts';
import {OfferListItem} from '../models/offer-list-item.ts';
import {AuthStatus} from '../constants/auth-status.ts';
import {User} from '../models/user.ts';

const initialState: {
  city: string;
  offers: OfferListItem[];
  sortingOrder: SortingOrder;
  offersLoadingStatus: boolean;
  authorizationStatus: AuthStatus;
  user?: User;
} = {
  city: MockLocations[0].name,
  offers: [],
  sortingOrder: 'Popular',
  offersLoadingStatus: false,
  authorizationStatus: AuthStatus.Unknown
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
    })
    .addCase(changeAuthStatusAction, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserAction, (state, action) => {
      state.user = action.payload;
    });
});
