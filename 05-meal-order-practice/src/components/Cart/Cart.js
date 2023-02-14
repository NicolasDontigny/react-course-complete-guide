import React, { useContext } from 'react';
import { CartContext } from '../../store/cart-context';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const ctx = useContext(CartContext);

  const onRemoveHandler = (id, _event) => {
    ctx.onRemoveMeal(id);
  };

  const onAddHandler = (meal, _event) => {
    ctx.onAddMeal(meal, 1);
  };

  const totalPrice = `$${ctx.totalPrice.toFixed(2)}`;

  return (
    <div className='cart'>
      <div className={classes['cart-items']}>
        {ctx.meals.map((mealQty) => (
          <CartItem
            key={mealQty.meal.id}
            meal={mealQty.meal}
            qty={mealQty.qty}
            onRemove={onRemoveHandler.bind(null, mealQty.meal.id)}
            onAdd={onAddHandler.bind(null, mealQty.meal)}
          ></CartItem>
        ))}
      </div>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalPrice}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes['button--alt']}
          onClick={props.onClose}
        >
          Close
        </button>
        <button
          className={classes.button}
          onClick={props.onOrder}
        >
          Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
