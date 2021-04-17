import { useState } from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import "./Expenses.css";

function Expenses(props) {
  const [filterYear, setfilterYear] = useState("");
  const filterChangeHandler = (changedYear) => {
    setfilterYear(changedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });
  return (
    <Card className="expenses">
      <div>
        <ExpenseFilter
          selected={filterYear}
          onFilterChange={filterChangeHandler}
        />
        {filteredExpenses.map((item) => {
          return (
            <ExpenseItem
              title={item.title}
              amount={item.amount}
              date={item.date}
              key={item.id}
            />
          );
        })}
      </div>
    </Card>
  );
}

export default Expenses;
