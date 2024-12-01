import { createAction } from '@reduxjs/toolkit';
import {SortingOrder} from '../models/sorting-order.ts';
import {OfferListItem} from '../models/offer-list-item.ts';
import {AuthStatus} from '../constants/auth-status.ts';
import { User } from '../models/user.ts';

export const changeCityAction = createAction<string>('CHANGE_CITY');

export const fillOrdersAction = createAction<OfferListItem[]>('FILL_ORDERS');

export const setOrdersLoadingStatusAction = createAction<boolean>('SET_OFFERS_LOADING');

export const changeSortingOrderAction = createAction<SortingOrder>('CHANGE_SORT_ORDER');

export const changeAuthStatusAction = createAction<AuthStatus>('CHANGE_AUTH_STATUS');

export const setUserAction = createAction<User>('SET_USER');
