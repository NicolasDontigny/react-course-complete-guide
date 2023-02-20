import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { id, title, quantity, price } = props.item;

  const total = quantity * price;

  const incrementHandler = () => {
    const product = {
      id,
      title,
      quantity,
      price,
    };
    dispatch(cartActions.addItem({ product }));
  };

  const decrementHandler = () => {
    const product = {
      id,
      title,
      quantity,
      price,
    };
    dispatch(cartActions.removeItem({ product }));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)} <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decrementHandler}>-</button>
          <button onClick={incrementHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
