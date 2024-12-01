import {AuthStatus} from '../../constants/auth-status.ts';
import {User} from '../../models/user.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AuthState = {
  authorizationStatus: AuthStatus;
  user: User | null;
}
const initialState: AuthState = {
  authorizationStatus: AuthStatus.Unknown,
  user: null
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeAuthStatus(state, action: PayloadAction<AuthStatus>) {
      state.authorizationStatus = action.payload;
    },
    setUser(state, action: PayloadAction<User | null>) {
      state.user = action.payload;
    },
  },
});
export const { changeAuthStatus, setUser } = authSlice.actions;
export default authSlice.reducer;
