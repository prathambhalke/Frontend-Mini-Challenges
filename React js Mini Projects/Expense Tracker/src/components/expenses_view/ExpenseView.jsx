import "../expenses_view/expenseView.css";
import Chart from "../chart/Chart";
import { MyContext } from "../../context/MyContext";
import { useContext } from "react";
import { Close } from "@mui/icons-material";

const ExpenseView = () => {
  const { data, setData, setIncome, setExpense, incomeAmount, expenseAmount } =
    useContext(MyContext);

  function onAddExpense() {
    if (data.description === "") {
      alert("Please Enter Description");
      return;
    }
    if (data.amount === "") {
      alert("Please Enter Amount");
      return;
    }
    if (data.type.income === false && data.type.expense === false) {
      alert("Select Income OR Expense");
      return;
    }

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
        <h1 className="total-balance media-screen ">
          Total Balance{" "}
          <span
            className="balance-color"
            style={{
              color: incomeAmount - expenseAmount >= 0 ? "blue" : "red",
            }}
          >
            {" "}
            ₹ {incomeAmount - expenseAmount}
          </span>{" "}
        </h1>

        <div className="income income-bg-color">
          <h1 className="media-screen income-color"> ₹ {incomeAmount}</h1>
          <h4 className="tag">Income</h4>
        </div>

        <div className="expense expense-bg-color">
          <h1 className="media-screen expense-color"> ₹ {expenseAmount}</h1>
          <h4 className="tag">Expense</h4>
        </div>
      </div>

      <Chart />
      <div>
        <div
          className="form-container"
          style={{ display: data.visible ? "flex" : "none" }}
        >
          <Close
            className="cancle-btn"
            type="submit"
            onClick={() =>
              setData((prevdata) => {
                return { ...prevdata, visible: false };
              })
            }
          />
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
                setData((prevdata) => {
                  return { ...prevdata, description: e.target.value };
                });
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

          <button className="add-btn" type="submit" onClick={onAddExpense}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpenseView;
