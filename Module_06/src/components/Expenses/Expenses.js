import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filteredExpenses = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  console.log(filteredExpenses);
  const yearFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  return(
    <Card className="expenses">
      <ExpenseFilter 
        selected={ filteredYear }
        onYearFilterChange={ yearFilterHandler }
      />

      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={ expense.title } 
          amount={ expense.amount } 
          date={ expense.date } 
        />
      ))}
    </Card>
  );
}

export default Expenses;