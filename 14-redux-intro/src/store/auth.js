import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = { isAuthenticated: false, email: null };

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.email = action.payload.email;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.email = null;
    },
  },
});

export default authSlice.reducer;

export const authActions = authSlice.actions;
