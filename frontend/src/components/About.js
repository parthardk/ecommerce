import React from 'react';
import './About.css';
import bc from './bc.jpg';
import cc from './cc.jpg';
import fc from './fc.jpg';
import sc from './sc.jpg';

function About() {
  return (
    <div className="aboutmain">
      <div className="abouttitle">
        <h1>Our Services</h1>
      </div>

      <div className="acontent">
        <p>
          Eventbrite offers a diverse range of events across various categories,
          including sports, conferences, music, food, business, charity, education,
          community, health, and travel, which can be easily incorporated into a webpage
        </p>
      </div>

      <div className="dashboard">
        <div className="dashboard-item">
          <img className="category-logo" src={bc} alt="Business logo" />
          <a href="#" className="businesscard">Business</a>
        </div>

        <div className="dashboard-item">
          <img className="category-logo" src={cc} alt="Concerts logo" />
          <a href="#" className="concertcard">Concerts</a>
        </div>

        <div className="dashboard-item">
          <img className="category-logo" src={fc} alt="Food logo" />
          <a href="#" className="foodcard">Food</a>
        </div>

        <div className="dashboard-item">
          <img className="category-logo" src={sc} alt="Sport logo" />
          <a href="#" className="sportcard">Sport</a>
        </div>
      </div>
    </div>
  );
}

export default About;