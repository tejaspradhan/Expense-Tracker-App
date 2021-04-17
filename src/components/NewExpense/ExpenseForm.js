import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setenteredTitle] = useState("");
  const [enteredAmount, setenteredAmount] = useState("");
  const [enteredDate, setenteredDate] = useState("");

  const titleChangeHandler = (e) => {
    setenteredTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setenteredAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setenteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onCancel();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveData(expenseData);

    // to clear the fields
    setenteredTitle("");
    setenteredAmount("");
    setenteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            onChange={(e) => {
              titleChangeHandler(e);
            }}
            type="text"
            value={enteredTitle}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={(e) => {
              amountChangeHandler(e);
            }}
            type="Number"
            value={enteredAmount}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={(e) => {
              dateChangeHandler(e);
            }}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
