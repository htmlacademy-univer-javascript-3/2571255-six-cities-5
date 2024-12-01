import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../models/state.ts';
import {AxiosInstance} from 'axios';
import {ApiRoutes} from '../constants/api-routes.ts';
import {AuthStatus} from '../constants/auth-status.ts';
import {OfferListItem} from '../models/offer-list-item.ts';
import {User} from '../models/user.ts';
import {AuthData} from '../models/auth-data.ts';
import {dropToken, saveToken} from '../services/token.ts';
import {setUser, changeAuthStatus} from './slices/auth-slice.ts';
import {fillOrders, setOrdersLoadingStatus, fillFavorites, changeFavoriteStatus} from './slices/offer-slice.ts';
import {fillNearbyOffers, fillReviews, updateOffer, addComment} from './slices/current-offer-slice.ts';
import {Comment} from '../models/comment.ts';
import {Offer} from '../models/offer.ts';
import {FavoriteData} from '../models/favorites-data.ts';
import {buildUrl} from '../services/api-utils.ts';
import {CommentData} from '../models/comment-data.ts';

export const sendComment = createAsyncThunk<
  void,
  CommentData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'SEND_REVIEW',
  async ({ offerId, formData }, { dispatch, getState, rejectWithValue, extra: api }) => {
    if (getState().auth.authorizationStatus !== AuthStatus.Auth) {
      return rejectWithValue('Unauthorized');
    }
    const { data: review } = await api.post<Comment>(buildUrl(ApiRoutes.Comments, { offerId }), formData);
    dispatch(addComment(review));
  }
);


export const fetchFavoritesAction = createAsyncThunk<
    void,
    undefined,
    {
        dispatch: AppDispatch;
        state: State;
        extra: AxiosInstance;
    }
>('FETCH_FAVORITES', async (_arg, {dispatch, getState, rejectWithValue, extra: api}) => {
  if (getState().auth.authorizationStatus !== AuthStatus.Auth) {
    return rejectWithValue('Unauthorized');
  }
  const {data} = await api.get<OfferListItem[]>(ApiRoutes.Favorite);
  dispatch(fillFavorites(data));
});

export const fetchOffer = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'FETCH_OFFER',
  async (offerId, { dispatch, extra: api }) => {
    const { data: newOffer } = await api.get<Offer>(
      buildUrl(ApiRoutes.Offer, { offerId })
    );
    dispatch(updateOffer(newOffer));
    const { data: newReviews } = await api.get<Comment[]>(
      buildUrl(ApiRoutes.Comments, { offerId })
    );
    dispatch(fillReviews(newReviews));
    const { data: newNearbyOffers } = await api.get<OfferListItem[]>(
      buildUrl(ApiRoutes.OffersNearby, { offerId })
    );
    dispatch(fillNearbyOffers(newNearbyOffers));
  }
);

export const changeFavoriteStatusAction = createAsyncThunk<
    void,
    FavoriteData,
    {
        dispatch: AppDispatch;
        state: State;
        extra: AxiosInstance;
    }
>('CHANGE_FAVORITE_STATUS', async ({ offerId, isFavorite }, { dispatch, getState, rejectWithValue, extra: api }) => {
  if (getState().auth.authorizationStatus !== AuthStatus.Auth) {
    return rejectWithValue('Unauthorized');
  }
  await api.post<OfferListItem>(
    buildUrl(ApiRoutes.FavoriteStatus, {
      offerId: offerId,
      status: Number(isFavorite).toString(),
    })
  );
  dispatch(changeFavoriteStatus({ offerId, isFavorite }));
});

export const fetchOrdersAction = createAsyncThunk<
    void,
    undefined,
    {
        dispatch: AppDispatch;
        state: State;
        extra: AxiosInstance;
    }>(
      'FETCH_OFFERS', async (_arg, {dispatch, extra: api}) => {
        dispatch(setOrdersLoadingStatus(true));

        const {data} = await api.get<OfferListItem[]>(ApiRoutes.Offers);

        dispatch(setOrdersLoadingStatus(false));
        dispatch(fillOrders(data));
      });

export const checkAuthAction = createAsyncThunk<
    void,
    undefined,
    {
        dispatch: AppDispatch;
        state: State;
        extra: AxiosInstance;
    }>(
      'CHECK_AUTH', async (_arg, {dispatch, extra: api}) => {
        try {
          const user = (await api.get<User>(ApiRoutes.Login)).data;
          dispatch(setUser(user));
          await api.get(ApiRoutes.Login);
          dispatch(changeAuthStatus(AuthStatus.Auth));
        } catch {
          dispatch(changeAuthStatus(AuthStatus.NoAuth));
        }
      });

export const loginAction = createAsyncThunk<
    void,
    AuthData,
    {
        dispatch: AppDispatch;
        state: State;
        extra: AxiosInstance;
    }>(
      'LOGIN',
      async ({login: email, password}, {dispatch, extra: api}) => {
        const {data: user} = await api.post<User>(ApiRoutes.Login, {email, password});
        dispatch(setUser(user));
        saveToken(user.token);
        dispatch(changeAuthStatus(AuthStatus.Auth));
        dispatch(fetchFavoritesAction());
      }
    );

export const logoutAction = createAsyncThunk<
    void,
    undefined,
    {
        dispatch: AppDispatch;
        state: State;
        extra: AxiosInstance;
    }>(
      'LOGOUT', async (_arg, {dispatch, extra: api}) => {
        await api.delete(ApiRoutes.Logout);
        dropToken();
        dispatch(changeAuthStatus(AuthStatus.NoAuth));
        dispatch(setUser(null));
      });
