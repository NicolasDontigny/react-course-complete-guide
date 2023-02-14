import React, { useContext, useEffect, useRef, useState } from 'react';
import { CartContext } from '../../store/cart-context';
import Cart from '../Cart/Cart';
import Modal from '../UI/Modal';
import CartIcon from './CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const [showModal, setShowModal] = useState(false);
  const ctx = useContext(CartContext);
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;

    return () => {
      if (!button) return;

      button.className = `${classes.button} ${classes.bump}`;

      setTimeout(() => {
        button.className = `${classes.button}`;
      }, 300);
    };
  }, [ctx.totalCount]);

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const showModalHandler = () => {
    setShowModal(true);
  };

  return (
    <>
      {showModal && (
        <Modal onClose={closeModalHandler}>
          <Cart onClose={closeModalHandler} />
        </Modal>
      )}

      <button
        className={classes.button}
        ref={buttonRef}
        onClick={showModalHandler}
      >
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{ctx.totalCount}</span>
      </button>
    </>
  );
};

export default HeaderCartButton;
