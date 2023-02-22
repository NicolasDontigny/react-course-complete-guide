import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (_props) => {
  const cartItems = useSelector((state) => state.cart.items);

  const cartItemComponents = Object.values(cartItems).map((item) => (
    <CartItem
      key={item.id}
      item={item}
    />
  ));

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{cartItemComponents}</ul>
    </Card>
  );
};

export default Cart;
