import React, { useContext, useState } from 'react';
import { CartContext } from '../../store/cart-context';
import Input from '../UI/Input';
import classes from './MealForm.module.css';

const MealForm = (props) => {
  const ctx = useContext(CartContext);
  const [amount, setAmount] = useState('0');

  const logAmount = (event) => {
    event.preventDefault();
    ctx.onAddMeal(props.meal, parseInt(amount));
  };

  return (
    <form className={classes.form}>
      <Input
        type='number'
        id={`meal-input-${props.meal.id}`}
        value={amount}
        onChange={setAmount}
      >
        Amount
      </Input>
      <button
        onClick={logAmount}
        type='submit'
      >
        + Add
      </button>
    </form>
  );
};

export default MealForm;
