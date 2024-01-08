import "../expenses_view/expenseView.css";
import Chart from "../chart/Chart";
import { MyContext } from "../../context/MyContext";
import { useContext } from "react";

const ExpenseView = () => {
  const { data, setData, setIncome, setExpense, incomeAmount, expenseAmount } =
    useContext(MyContext);

  function onAddExpense() {
    if (data.type.income) {
      setIncome((prevIncome) => [...prevIncome, data]);
    }
    if (data.type.expense) {
      setExpense((prevExp) => [...prevExp, data]);
    }

    setData({ ...data, visible: false, amount: "", description: "" });
  }

  return (
    <div className="expenseView-component">
      <div className="expenseView">
        <h1>Total Balance {incomeAmount - expenseAmount}</h1>

        <div className="income">
          <h1>{incomeAmount}</h1>
          <h4>Income</h4>
        </div>

        <div className="expense">
          <h1>{expenseAmount}</h1>
          <h4>Expense</h4>
        </div>
      </div>

      <Chart />
      <div>
        <div
          className="form-container"
          style={{ display: data.visible ? "flex" : "none" }}
        >
          <h3 className="form-heading">Add New Transaction</h3>
          <div className="form-inputs">
            <label htmlFor="Discription" className="form-label">
              Enter Description
            </label>
            <input
              type="text"
              className="form-input-btn"
              value={data.description}
              name="Discription"
              placeholder="Enter  Description"
              onChange={(e) => {
                setData({ ...data, description: e.target.value });
              }}
            />
            <label htmlFor="amount" className="form-label">
              Enter Amount
            </label>
            <input
              type="number"
              className="form-input-btn"
              value={data.amount}
              name="amount"
              placeholder="Enter Transaction Amount"
              onChange={(e) => {
                setData({ ...data, amount: e.target.value });
              }}
            />
          </div>
          <div className="form-radio">
            <span className="form-radio-span">
              <input
                type="radio"
                value="income"
                checked={data.type.income}
                className="form-radio-input"
                onClick={() => {
                  setData({
                    ...data,
                    type: {
                      ...data.type,
                      income: true,
                      expense: false,
                    },
                  });
                }}
              />
              Income
            </span>
            <span className="form-radio-span">
              <input
                type="radio"
                value="expense"
                checked={data.type.expense}
                className="form-radio-input"
                onClick={() => {
                  setData({
                    ...data,
                    type: {
                      ...data.type,
                      expense: true,
                      income: false,
                    },
                  });
                }}
              />
              Expense
            </span>
          </div>
          <div className="form-submit-btn">
            <button
              className="cancle-btn"
              type="submit"
              onClick={() => setData({ ...data, visible: false })}
            >
              Cancle
            </button>
            <button className="add-btn" type="submit" onClick={onAddExpense}>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseView;
