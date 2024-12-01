import {AuthStatus} from '../constants/auth-status.ts';
import {User} from '../models/user.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AuthState = {
  authorizationStatus: AuthStatus;
  user?: User;
}
const initialState: AuthState = {
  authorizationStatus: AuthStatus.Unknown,
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeAuthStatus(state, action: PayloadAction<AuthStatus>) {
      state.authorizationStatus = action.payload;
    },
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
  },
});
export const { changeAuthStatus, setUser } = authSlice.actions;
export default authSlice.reducer;
