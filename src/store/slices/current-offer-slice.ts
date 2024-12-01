import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Offer} from '../../models/offer.ts';
import {OfferListItem} from '../../models/offer-list-item.ts';
import {Comment} from '../../models/comment.ts';
import {changeFavoriteStatus} from './offer-slice.ts';

type CurrentOfferState = {
  offer: Offer | undefined;
  comments: Comment[];
  nearbyOffers: OfferListItem[];
};

const initialState: CurrentOfferState = {
  offer: undefined,
  comments: [],
  nearbyOffers: [],
};

const currentOfferSlice = createSlice({
  name: 'currentOffer',
  initialState,
  reducers: {
    fillReviews(state, action: PayloadAction<Comment[]>) {
      state.comments = action.payload;
    },
    fillNearbyOffers(state, action: PayloadAction<OfferListItem[]>) {
      state.nearbyOffers = action.payload;
    },
    updateOffer(state, action: PayloadAction<Offer | undefined>) {
      state.offer = action.payload;
    },
    clearOffer(state) {
      state.offer = undefined;
      state.nearbyOffers = [];
      state.comments = [];
    },
    addComment(state, action: PayloadAction<Comment>) {
      state.comments.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(changeFavoriteStatus, (state, action) => {
        const { offerId, isFavorite } = action.payload;
        if (state.offer && offerId === state.offer.id) {
          state.offer.isFavorite = isFavorite;
        }
      });
  },
});
export const { fillNearbyOffers, fillReviews, updateOffer, clearOffer, addComment } = currentOfferSlice.actions;
export default currentOfferSlice.reducer;
