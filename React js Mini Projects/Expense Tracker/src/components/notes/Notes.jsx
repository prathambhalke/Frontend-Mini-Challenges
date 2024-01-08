import React from 'react';
import '../notes/notes.css'
import { MyContext } from '../../context/MyContext';
import { useContext } from 'react';


const Notes = () => {

  const { income, expense } = useContext(MyContext);

  return (
    <div className='notes-container'>
      <div className="notes-box">

        <div className="notes-box-income">
          <h1 className='notes-heading'>Income</h1>
          {
            income.map((item, index) => {

              return <div key={index}>
                <h1>{item.amount}</h1>
                <p>{item.description}</p>
                </div>
            })
          }

        </div>

        <div className="notes-box-expense">
          <h1 className='notes-heading'>Expense</h1>
          {
            expense.map((item, index) => {

              return <div key={index}>
                <h1>{item.amount}</h1>
                <p>{item.description}</p>
                </div>
            })
          }

        </div>

      </div>
    </div>
  );
}

export default Notes;
