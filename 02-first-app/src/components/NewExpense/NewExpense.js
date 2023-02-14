import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import React, { useState } from 'react';

const NewExpense = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setCollapsed(false);
  };

  const onCancelHandler = () => {
    setCollapsed(true);
  };
  const onCollapseHandler = () => {
    setCollapsed(false);
  };

  return (
    <div className='new-expense'>
      {collapsed ? (
        <button onClick={onCollapseHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={onCancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
