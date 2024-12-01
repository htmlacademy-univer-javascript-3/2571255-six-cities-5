import {MockLocations} from '../mocks/locations.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CityState = {
  city: string;
}
const initialState: CityState = {
  city: MockLocations[0].name,
};
export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    changeCity(state, action: PayloadAction<string>) {
      state.city = action.payload;
    },
  },
});
export const { changeCity } = citySlice.actions;
export default citySlice.reducer;
