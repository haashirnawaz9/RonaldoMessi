import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [title, setTitle] = useState("Ronaldo & Messi")
  const Ronaldobtn = () => {
    setTitle("Cristiano Ronaldo");
  }
  const Messibtn = () => {
    setTitle("Lionel Messi");
  }
  return (
    <nav className="navbar">
      <h1 className="title" > {title}</h1>

      <ul className="nav-links">

        <li>
            <Link to="/" className="nav-link" onClick={Ronaldobtn}> Ronaldo</Link>
          
        </li>
        <li> 
            <Link to="/Messi" className="nav-link" onClick={Messibtn} > Messi</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
