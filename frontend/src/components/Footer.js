import React from 'react';
import './Footer.css';



function Footer(){
    return (
        <div className='footer-main' >
        <div className="footer-section">
        <h4>Contact Us</h4>
        <p>Email: eventtickets@gmail.com</p>
        <p>Phone: +91 1234 5678 90</p>
      </div>           
      <div className="footer-section1">
        <h3>For more information join with us🛠️</h3><br></br>
        <input className='femail'  placeholder='Enter your email'></input>
        <button className='sbt'>Submit</button>

      </div>

        </div>
    )
}

export default Footer;