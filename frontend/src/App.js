import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import Book from './components/Booking.js';
import Register from './components/Register.js';
import Log from './components/Login.js';
import EventList from './components/Eventlist.js';
import AdminAddEvent from './components/AdminAddEvent';
import Navbar from './components/Navibar.js'; 
import './App.css';

const isAdmin = false; 

function App() {
  return (
    <Router>
      <div className='navimain'>
        <Navbar isAdmin={isAdmin} />
        
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<EventList />} />
            <Route path='/signup' element={<Register/>}/>
            <Route path="/booking" element={<Book />} />
            <Route path="/login" element={<Log />} />
            <Route path="/admin" element={<AdminAddEvent />} />
          </Routes>
        </div>


      </div>
    </Router>
  );
}

export default App;
