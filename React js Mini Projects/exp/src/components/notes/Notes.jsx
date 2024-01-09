import React from 'react';
import '../notes/notes.css'
import { MyContext } from '../../context/MyContext';
import { useContext } from 'react';
import { DeleteForever } from '@mui/icons-material';


const Notes = () => {

  const { income, expense, deleteIncome, deleteExpense } = useContext(MyContext);

  

  return (
    <div className='notes-container'>
      <div className="notes-box">

        <div className="notes-box-income">
          <h1 className='notes-heading income-bg-color'>Income</h1>

          {income.length === 0 ? (<p> No Data To Show</p>) : (

            income.map((item, index) => {

              return <div className='todo' key={index}>
                <div className="subDiv">
                  <p style={{ width: '60%' }} >{item.description}</p>
                  <h3> ₹ {item.amount}</h3>
                </div>
                <span onClick={() => deleteIncome(index)}>
                <DeleteForever  className='note-delete-btn' />

                </span>
              </div>
            })
          )}

        </div>

        <div className="notes-box-expense">
          <h1 className='notes-heading expense-bg-color'>Expense</h1>

          {expense.length === 0 ? (<p>No Data To Show</p>) : (

            expense.map((item, index) => {

              return <div className='todo' key={index}>
                <div className="subDiv">
                  <p style={{ width: '60%' }} >{item.description}</p>
                  <h3> ₹ {item.amount}</h3>
                </div>
                <span onClick={() => deleteExpense(index)}>
                <DeleteForever className='note-delete-btn' />

                </span>
              </div>
            })

          )}



        </div>
      </div>
    </div>
  );
}

export default Notes;
