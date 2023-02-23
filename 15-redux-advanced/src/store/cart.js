import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  items: {},
  changed: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    setCart(state, action) {
      const items = action.payload.items.filter((item) => !!item);
      const itemsObj = {};
      items.forEach((item) => (itemsObj[item.id] = item));
      state.items = itemsObj;
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
      state.changed = true;
    },
    removeItem(state, action) {
      const { product } = action.payload;
      const cartProduct = state.items[product.id];

      if (cartProduct.quantity > 1) {
        state.items[product.id].quantity -= 1;
      } else {
        delete state.items[product.id];
      }

      state.changed = true;
    },
  },
});

const cartReducer = cartSlice.reducer;
export default cartReducer;

export const cartActions = cartSlice.actions;
