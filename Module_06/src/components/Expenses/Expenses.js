import React, { useState } from 'react';

import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

import Card from '../UI/Card';

import './Expenses.css';

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filteredExpenses = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const yearFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  return(
    <Card className="expenses">
      <ExpenseFilter 
        selected={ filteredYear }
        onYearFilterChange={ yearFilterHandler }
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;