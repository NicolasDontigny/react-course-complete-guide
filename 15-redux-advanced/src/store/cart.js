import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  showCart: false,
  items: {},
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    addItem(state, action) {
      const { product } = action.payload;
      if (state.items[product.id]) {
        state.items[product.id].quantity += 1;
      } else {
        state.items[product.id] = {
          ...product,
          quantity: 1,
        };
      }
    },
    removeItem(state, action) {
      const { product } = action.payload;
      const cartProduct = state.items[product.id];

      if (cartProduct.quantity > 1) {
        state.items[product.id].quantity -= 1;
      } else {
        delete state.items[product.id];
      }
    },
  },
});

const cartReducer = cartSlice.reducer;
export default cartReducer;

export const cartActions = cartSlice.actions;
