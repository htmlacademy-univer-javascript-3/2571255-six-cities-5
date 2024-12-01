import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../models/state.ts';
import {AxiosInstance} from 'axios';
import {ApiRoutes} from '../constants/api-routes.ts';
import {AuthStatus} from '../constants/auth-status.ts';
import {OfferListItem} from '../models/offer-list-item.ts';
import {User} from '../models/user.ts';
import {AuthData} from '../models/auth-data.ts';
import {dropToken, saveToken} from '../services/token.ts';
import {setUser, changeAuthStatus} from '../slices/auth-slice.ts';
import {fillOrders, setOrdersLoadingStatus, fillFavorites, changeFavoriteStatus} from '../slices/offer-slice.ts';
import {FavoriteData} from '../models/favorites-data.ts';
import {buildUrl} from '../services/api-utils.ts';

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
