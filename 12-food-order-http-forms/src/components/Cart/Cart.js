import { useContext, useState } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import Checkout from 'components/Cart/Checkout';
import useHttp from 'hooks/use-http';
import { apiConstants } from 'constants/api.constants';
import { AlertContext } from 'store/alert-context';

const Cart = (props) => {
  const { isLoading, error, fetchData: sendOrder } = useHttp();
  const cartCtx = useContext(CartContext);
  const alertCtx = useContext(AlertContext);
  const [showCheckout, setShowCheckout] = useState(false);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const orderHandler = () => {
    setShowCheckout(true);
  };

  const cancelOrderHandler = () => {
    setShowCheckout(false);
  };

  const handleOrder = (data) => {
    setShowCheckout(false);
    alertCtx.setAlertHandler({ message: 'Order was successfully sent!' });
    cartCtx.clearItems();
    console.log('handleOrder data: ', data);
    props.onClose();
  };

  const submitOrderHandler = (clientData) => {
    sendOrder(
      {
        url: apiConstants.firebase('orders.json'),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          customer: clientData,
          items: cartCtx.items,
        },
      },
      handleOrder
    );
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button
        className={classes['button--alt']}
        onClick={props.onClose}
      >
        Close
      </button>
      {hasItems && (
        <button
          className={classes.button}
          onClick={orderHandler}
        >
          Order
        </button>
      )}
    </div>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {showCheckout && !isLoading && (
        <Checkout
          onCancel={cancelOrderHandler}
          onConfirm={submitOrderHandler}
        />
      )}
      {isLoading && <p>Saving Order...</p>}
      {error && <p>There was an error saving order.</p>}
      {!showCheckout && modalActions}
    </Modal>
  );
};

export default Cart;
