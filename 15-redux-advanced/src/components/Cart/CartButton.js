import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart';
import classes from './CartButton.module.css';

const CartButton = (_props) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalCount = Object.values(cartItems).reduce((acc, item) => acc + item.quantity, 0);

  const toggleCartHandler = () => {
    dispatch(cartActions.toggleCart());
  };

  return (
    <button
      className={classes.button}
      onClick={toggleCartHandler}
    >
      <span>My Cart</span>
      <span className={classes.badge}>{totalCount}</span>
    </button>
  );
};

export default CartButton;
