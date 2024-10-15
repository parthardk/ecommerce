import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router';
import EventList from './Eventlist.js';
import Footer from './Footer.js';
import About from './About.jsx';
import Blank from './Blank.js';
import Work from './Works.jsx';




import video from './21118-315137091_medium.mp4'
function Home() {

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/events');
  };
  return (
    <div className="mainpage">
      <div className="video-background">
        <video autoPlay loop muted>
          <source src={video} type='video/mp4'/>
        </video>
      </div>


      <div className="des">
        <h1 className="htitle">Connecting the world..🌍</h1>
        <p className="desp">Easy to search, just enter the keyword</p>
        <div className="search-section">
          <input className="searchbar" placeholder="Search..."  required/>
          <select className="selector">
            <option value="">Select a category</option>
            <option>Business</option>
            <option>Concerts</option>
            <option>Food</option>
            <option>Sport</option>
          </select>
          <button onClick={handleSearch} className="searchbt">Search</button>
        </div>

      </div>
      <div className='hcontent'>
      <Blank/>
      <About/>

      <EventList/>
      <Work/>
      <Footer/>

      </div>
      
    </div>
  );
}

export default Home;
