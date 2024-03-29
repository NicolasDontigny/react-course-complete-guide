import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (_item) => {},
  removeItem: (_id) => {},
  clearItems: () => {},
});

export default CartContext;
