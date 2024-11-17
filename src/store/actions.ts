import { createAction } from '@reduxjs/toolkit';
import {Location} from '../models/location.ts';

export const changeCityAction = createAction(
  'CHANGE_CITY',
  (value: Location) => ({
    payload: value,
  })
);

export const fillOrdersAction = createAction('FILL_ORDERS');
