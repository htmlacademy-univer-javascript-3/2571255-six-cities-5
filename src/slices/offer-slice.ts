import {OfferListItem} from '../models/offer-list-item.ts';
import {SortingOrder} from '../models/sorting-order.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {FavoriteData} from '../models/favorites-data.ts';

type OffersState = {
  offers: OfferListItem[];
  sortingOrder: SortingOrder;
  offersLoadingStatus: boolean;
  favorites: OfferListItem[];
}
const initialState: OffersState = {
  offers: [],
  sortingOrder: 'Popular',
  offersLoadingStatus: false,
  favorites: []
};
export const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    fillOrders(state, action: PayloadAction<OfferListItem[]>) {
      state.offers = action.payload;
    },
    setOrdersLoadingStatus(state, action: PayloadAction<boolean>) {
      state.offersLoadingStatus = action.payload;
    },
    changeSortingOrder(state, action: PayloadAction<SortingOrder>) {
      state.sortingOrder = action.payload;
    },
    changeFavoriteStatus(state, action: PayloadAction<FavoriteData>) {
      const { offerId, isFavorite} = action.payload;
      const offer = state.offers.find((x) => x.id === offerId);
      if (offer) {
        offer.isFavorite = isFavorite;
        if (isFavorite && !state.favorites.find((x) => x.id === offerId)) {
          state.favorites.push(offer);
        } else {
          state.favorites = state.favorites.filter((x) => x.id !== offerId);
        }
      }
    },
    fillFavorites(state, action: PayloadAction<OfferListItem[]>) {
      state.favorites = action.payload;
    }
  },
});
export const { fillOrders, setOrdersLoadingStatus, changeSortingOrder, fillFavorites,
  changeFavoriteStatus} = offersSlice.actions;
export default offersSlice.reducer;
