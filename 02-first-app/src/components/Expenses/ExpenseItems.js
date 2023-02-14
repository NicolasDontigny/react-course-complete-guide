import './ExpenseItems.css';
import React from 'react';
import ExpenseFilters from './ExpenseFilters';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

export const ExpenseItems = (props) => {
  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear() === parseInt(props.selectedYear)
  );

  const yearSelectedHandler = (selectedYear) => {
    props.onYearSelected(selectedYear);
  };

  return (
    <div className='expenses'>
      <ExpenseFilters
        selected={props.selectedYear}
        onYearSelected={yearSelectedHandler}
      ></ExpenseFilters>
      <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
      <li>
        <ExpensesList expenses={filteredExpenses}></ExpensesList>
      </li>
    </div>
  );
};

export default ExpenseItems;
