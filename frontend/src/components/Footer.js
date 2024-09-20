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
      <div className="footer-section">
        <h4>Join with as for more updates</h4>
        <p>Sign up for updates and offers:</p>
        <form>
          <input type="email" placeholder="Enter your email" ></input>
          <button type="submit">Subscribe</button>
        </form>
      </div>

        </div>
    )
}

export default Footer;