import {OfferListItem} from '../models/offer-list-item.ts';
import {SortingOrder} from '../models/sorting-order.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type OffersState = {
  offers: OfferListItem[];
  sortingOrder: SortingOrder;
  offersLoadingStatus: boolean;
}
const initialState: OffersState = {
  offers: [],
  sortingOrder: 'Popular',
  offersLoadingStatus: false,
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
  },
});
export const { fillOrders, setOrdersLoadingStatus, changeSortingOrder } = offersSlice.actions;
export default offersSlice.reducer;
