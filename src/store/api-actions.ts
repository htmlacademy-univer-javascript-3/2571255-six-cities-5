import { createAsyncThunk } from '@reduxjs/toolkit';
import {AppDispatch, State} from '../models/state.ts';
import { AxiosInstance } from 'axios';
import {fillOrdersAction, setOrdersLoadingStatusAction} from './actions.ts';
import {ApiRoutes} from '../constants/api-routes.ts';
import {OfferListItem} from '../models/offer-list-item.ts';
export const fetchOrdersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('FETCH_OFFERS', async (_arg, { dispatch, extra: api }) => {
  dispatch(setOrdersLoadingStatusAction(true));
  const { data } = await api.get<OfferListItem[]>(ApiRoutes.Offers);
  dispatch(setOrdersLoadingStatusAction(false));
  dispatch(fillOrdersAction(data));
});
