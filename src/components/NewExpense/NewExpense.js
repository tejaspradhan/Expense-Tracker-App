import React from "react";
import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onNewExpense(expenseData);
  };
  const [showForm, setshowForm] = useState(false);
  const showFormTrue = () => {
    setshowForm(true);
  };

  const ShowFormFalse = () => {
    setshowForm(false);
  };
  if (showForm) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveData={saveExpenseDataHandler}
          onCancel={ShowFormFalse}
        />
      </div>
    );
  } else {
    return (
      <div className="new-expense">
        <button onClick={showFormTrue}>Add new Expene</button>
      </div>
    );
  }
};
export default NewExpense;
