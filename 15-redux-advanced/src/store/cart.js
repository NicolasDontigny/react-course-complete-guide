import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  showCart: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

const cartReducer = cartSlice.reducer;
export default cartReducer;

export const cartActions = cartSlice.actions;
