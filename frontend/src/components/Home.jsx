

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; // Import the CSS file

export const Home = () => {
  return (
    <div>
      <div className="hero">
        <div className="content">
          <div className="textt">YOUR EVENT MANAGEMENT SOLUTION</div>
        </div>
        <Link className="main-button" to="/allEvents">
          View All Events
        </Link>
      </div>

      <div className="content-box1">
        <div className="info-text">Looking for events to attend?</div>
        <Link className="second-button" to="/allEvents">
          All Events
        </Link>
      </div>

      <div className="content-box2">
        <div className="info-text">Looking for a platform to create events?</div>
        <Link className="second-button" to="/signup">
          Sign Up Now
        </Link>
      </div>
    </div>
  );
};

