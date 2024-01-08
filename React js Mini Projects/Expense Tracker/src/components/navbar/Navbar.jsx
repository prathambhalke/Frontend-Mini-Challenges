import React from 'react';
import '../navbar/navbar.css'
import { MyContext } from '../../context/MyContext';
import { useContext } from 'react';

const Navbar = () => {

  const {handleVisible} = useContext(MyContext);



  return (
    <nav className="navbar">
    <div className="navbar-container">
      <a className="navbar-brand">Expense Tracker</a>
        <button className="navbar-btn" onClick={handleVisible}>Add New Transaction</button>
    </div>
  </nav>
  );
}

export default Navbar;
