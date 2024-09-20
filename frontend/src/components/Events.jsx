import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Events.css';
import logo1 from './Business-Event.jpg';
import logo2 from './kpop.jpg';
import logo3 from './food.jpg';
import logo4 from './cricket.jpg';
import logo5 from './techevent.jpg';
import logo6 from './arts.jpg';
import logo7 from './concert.jpeg';
import logo8 from './nagcc.jpg'


function Event() {
  const navigate = useNavigate();

  
  const handleBooking = (eventDetails) => {
    navigate('/booking', { state: eventDetails });
  };
  return (
    <div className='eventmain'>
      <div className="upcomingevent">
      <h1 className='eventtitle'>Upcoming Events</h1>
        <div className="upcomingeventlist1">
          <div className="eventcard1">
            <div className="event-image-container">
              <img className="eventimg1" src={logo1} alt="Event Image" />
              
            </div>
            <h2 className="eventtitle1">Emerging CEO's</h2>
            <p className="eventdate1">Date: 2025-01-10</p>
            <p className="eventtime1">Time: 10:00 AM</p>
            <p className='eventprice'>Price : $100 </p>
            <p className="eventlocation1">Location: New York</p>
            <p className='desp1'></p>
            <button className="eventbt1" onClick={() => handleBooking()}>Buy Ticket</button>
            </div>
          <div className="eventcard1">
            <div className="event-image-container">
              <img className="eventimg1" src={logo2} alt="Event Image" />
             
            </div>
            <h2 className="eventtitle1">BTS-KPOP</h2>
            <p className="eventdate1">Date: 2024-11-05</p>
            <p className="eventtime1">Time: 03:00 PM</p>
            <p className='eventprice'>Price : $150 </p>

            <p className="eventlocation1">Location: korea</p>

            <p className='desp1'></p>
            <button className="eventbt1" onClick={() => handleBooking()}>Buy Ticket</button>
            </div>
          <div className="eventcard1">
            <div className="event-image-container">
              <img className="eventimg1" src={logo3} alt="Event Image" />
             
            </div>
            <h2 className="eventtitle1">Food Festival</h2>
            <p className="eventdate1">Date: 2024-08-08</p>
            <p className="eventtime1">Time: 11:00 AM</p>
            <p className='eventprice'>Price : $50</p>
            <p className="eventlocation1">Location: New delhi</p>
            <p className='desp1'></p>
            <button className="eventbt1" onClick={() => handleBooking()}>Buy Ticket</button>
            </div>
          <div className="eventcard1">
            <div className="event-image-container">
              <img className="eventimg1" src={logo4} alt="Event Image" />
              
            </div>
            <h2 className="eventtitle1">IND VS ENG </h2>
            <p className="eventdate1">Date: 2024-12-10</p>
            <p className="eventtime1">Time: 01:00 PM</p>
            <p className='eventprice'>Price : $120 </p>
            <p className="eventlocation1">Location: England </p>
            <p className='desp1'></p>
            <button className="eventbt1" onClick={() => handleBooking()}>Buy Ticket</button>
            </div>
          <div className="eventcard1">
            <div className="event-image-container">
              <img className="eventimg1" src={logo5} alt="Event Image" />
             
            </div>
            <h2 className="eventtitle1">Tech Innovators Summit 2024</h2>
            <p className="eventdate1">Date: 2024-01-01</p>
            <p className="eventtime1">Time: 09:00 AM</p>
            <p className='eventprice'>Price : $200</p>
            <p className="eventlocation1">Location: San Fransisco</p>
            <p className='desp1'></p>
            <button className="eventbt1" onClick={() => handleBooking()}>Buy Ticket</button>
            </div>
          <div className="eventcard1">
            <div className="event-image-container">
              <img className="eventimg1" src={logo6} alt="Event Image" />
          
            </div>
            <h2 className="eventtitle1">Art & Culture Festival</h2>
            <p className="eventdate1">Date: 2025-02-14</p>
            <p className="eventtime1">Time: 08:00 AM</p>
            <p className='eventprice'>Price : $80</p>
            <p className="eventlocation1">Location: Mumbai</p>
            <p className='desp1'></p>
            <button className="eventbt1" onClick={() => handleBooking()}>Buy Ticket</button>
            </div>

          <div className="eventcard1">
            <div className="event-image-container">
              <img className="eventimg1" src={logo7} alt="Event Image" />
          
            </div>
            <h2 className="eventtitle1">Indie Music Event</h2>
            <p className="eventdate1">Date: 2025-06-02</p>
            <p className="eventtime1">Time: 02:00 PM</p>
            <p className='eventprice'>Price : $90 </p>
            <p className="eventlocation1">Location: Bangalore</p>
            <p className='desp1'></p>
            <button className="eventbt1" onClick={() => handleBooking()}>Buy Ticket</button>
            </div>


          <div className="eventcard1">
            <div className="event-image-container">
              <img className="eventimg1" src={logo8} alt="Event Image" />
          
            </div>
            <h2 className="eventtitle1">Hornbill Music Festival</h2>
            <p className="eventdate1">Date: 2025-03-25 </p>
            <p className="eventtime1">Time: 07:30 PM </p>
            <p className='eventprice'>Price :  $110</p>
            <p className="eventlocation1">Location: Nagaland </p>
            <p className='desp1'></p>
            <button className="eventbt1" onClick={() => handleBooking()}>Buy Ticket</button>
            </div>


        </div>
      </div>
    </div>
  );
}

export default Event;
