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
import {fillOrders, setOrdersLoadingStatus} from '../slices/offer-slice.ts';

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
      'user/login',
      async ({ login: email, password }, { dispatch, extra: api }) => {
        const user = (await api.post<User>(ApiRoutes.Login, { email, password })).data;
        dispatch(setUser(user));
        saveToken(user.token);
        dispatch(changeAuthStatus(AuthStatus.Auth));
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
      'user/logout', async (_arg, { dispatch, extra: api }) => {
        await api.delete(ApiRoutes.Logout);
        dropToken();
        dispatch(changeAuthStatus(AuthStatus.NoAuth));
      });
