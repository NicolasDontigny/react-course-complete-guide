import { createSlice } from '@reduxjs/toolkit';

const uiInitialState = {
  notification: null,
  showCart: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: uiInitialState,
  reducers: {
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const uiActions = uiSlice.actions;

const uiReducer = uiSlice.reducer;
export default uiReducer;
