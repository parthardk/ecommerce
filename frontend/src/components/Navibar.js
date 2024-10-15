import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './DK KD Logo.jpg';
import './Navibar.css';
const Navbar = ({ isAdmin }) => {
  const navigate = useNavigate();

  const handleAuthChange = (event) => {
    const value = event.target.value;

    if (value === "login") {
      navigate('/login'); // Navigate to login page
    } else if (value === "logout") {
      // Reset authentication data 
      localStorage.removeItem('authToken');
      navigate('/');
    }
  };

  return (
    <div className="navibar">
      <img className="logo" src={logo} alt="logo" />
      <Link className="home" to="/">HOME</Link>
      <Link className="event" to="/events">EVENT LIST</Link>
      <Link className="booking" to="/booking">BOOKING</Link>
      <select className='slt' onChange={handleAuthChange}>
        <option value=""> SELECT MODE</option>
        <option className='op1'  value="login">LOGIN</option>
        <option  className='op2' value="logout">LOGOUT</option>
      </select>

      {isAdmin && <Link className="admin" to="/admin">ADMIN PAGE</Link>}
    </div>
  );
};

export default Navbar;
