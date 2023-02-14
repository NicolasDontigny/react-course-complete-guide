import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [expense, setExpense] = useState({ title: '', amount: '', date: '' });

  const titleChangeHandler = (event) => {
    // Safer way to make sure delays in state updates don't affect previous State update
    setExpense((previousState) => {
      return { ...previousState, title: event.target.value };
    });
    // setExpense({ ...expense, title: event.target.value });
  };

  const amountChangeHandler = (event) => {
    setExpense((previousState) => {
      return { ...previousState, amount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    setExpense((previousState) => {
      return { ...previousState, date: event.target.value };
    });
  };

  const cancelFormHandler = () => {
    console.log('cancelFormHandler');
    props.onCancel();
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: expense.title,
      amount: parseFloat(expense.amount),
      date: new Date(expense.date),
    };

    setExpense({ title: '', amount: '', date: '' });
    props.onSaveExpenseData(expenseData);
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            onChange={titleChangeHandler}
            value={expense.title}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={expense.amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            step='2022-12-31'
            value={expense.date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button onClick={cancelFormHandler}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
