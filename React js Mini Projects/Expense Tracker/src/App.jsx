import "./App.css";
import ExpenseView from "./components/expenses_view/ExpenseView";
import Navbar from "./components/navbar/Navbar";
import Notes from "./components/notes/Notes";
import { useState } from "react";
import { MyContext } from "./context/MyContext";

function App() {
  const [income, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);

  const [data, setData] = useState({
    visible: false,
    description: "",
    amount: "",
    type: { income: false, expense: false },
  });

  const incomeAmount = income.reduce(
    (item, i1) => item + parseInt(i1.amount || 0),
    0
  );

  const expenseAmount = expense.reduce(
    (item, i1) => item + parseInt(i1.amount || 0),
    0
  );

  function handleVisible() {
    // setVisible(!visible);
    setData({ ...data, visible: !data.visible });
  }

  function deleteIncome(index) {
    const updatedIncome = [...income];
    updatedIncome.splice(index, 1);
    setIncome(updatedIncome);
  }

  function deleteExpense(index) {
    const updatedExpense = [...expense];
    updatedExpense.splice(index, 1);
    setExpense(updatedExpense);
  }

  return (
    <>
      <MyContext.Provider
        value={{
          data,
          setData,
          handleVisible,
          income,
          expense,
          setIncome,
          setExpense,
          incomeAmount,
          expenseAmount,
          deleteIncome,
          deleteExpense,
        }}
      >
        <Navbar />
        <ExpenseView />
        <Notes />
      </MyContext.Provider>
    </>
  );
}

export default App;
