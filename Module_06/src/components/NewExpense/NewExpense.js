import React, {useState} from "react";

import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => setIsEditing(true);
  const stopEditingHandler = () => setIsEditing(false);

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    
    setIsEditing(false);
  };

  if (!isEditing) {
    return (
      <div className="new-expense">
        <button onClick={startEditingHandler}>Add new expense</button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm 
        onSaveExpenseData={onSaveExpenseDataHandler} 
        onCancelEditing={stopEditingHandler}
      />
    </div>
  );
};

export default NewExpense;
