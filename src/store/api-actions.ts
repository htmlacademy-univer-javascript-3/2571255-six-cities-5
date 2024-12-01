import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../models/state.ts';
import {AxiosInstance} from 'axios';
import {
  fillOrdersAction,
  setOrdersLoadingStatusAction,
  changeAuthStatusAction,
  setUserAction
} from './actions.ts';
import {ApiRoutes} from '../constants/api-routes.ts';
import {AuthStatus} from '../constants/auth-status.ts';
import {OfferListItem} from '../models/offer-list-item.ts';
import {User} from '../models/user.ts';
import {AuthData} from '../models/auth-data.ts';
import {dropToken, saveToken} from '../services/token.ts';

export const fetchOrdersAction = createAsyncThunk<
    void,
    undefined,
    {
        dispatch: AppDispatch;
        state: State;
        extra: AxiosInstance;
    }>(
      'FETCH_OFFERS', async (_arg, {dispatch, extra: api}) => {
        dispatch(setOrdersLoadingStatusAction(true));

        const {data} = await api.get<OfferListItem[]>(ApiRoutes.Offers);

        dispatch(setOrdersLoadingStatusAction(false));
        dispatch(fillOrdersAction(data));
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
          dispatch(setUserAction(user));
          await api.get(ApiRoutes.Login);
          dispatch(changeAuthStatusAction(AuthStatus.Auth));
        } catch {
          dispatch(changeAuthStatusAction(AuthStatus.NoAuth));
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
        dispatch(setUserAction(user));
        saveToken(user.token);
        dispatch(changeAuthStatusAction(AuthStatus.Auth));
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
        dispatch(changeAuthStatusAction(AuthStatus.NoAuth));
      });
