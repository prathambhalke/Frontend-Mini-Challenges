import { useContext } from "react";
import "../chart/chart.css";
import { PieChart } from "@mui/x-charts/PieChart";
import { MyContext } from "../../context/MyContext";
const Chart = () => {
  const { incomeAmount, expenseAmount } = useContext(MyContext);

  return (
    <div className="chart-container">
      {incomeAmount === 0 ? (
        "add the Income then we show the calculated Pie chart"
      ) : (
        <PieChart
          series={[
            {
              data: [
                {
                  id: 0,
                  value: incomeAmount,
                  label: "Income",
                  color: "blue",
                },
                {
                  id: 1,
                  value: expenseAmount,
                  label: "Expense",
                  color: "red",
                },
              ],
            },
          ]}
          width={400}
          height={200}
        />
      )}
    </div>
  );
};

export default Chart;
