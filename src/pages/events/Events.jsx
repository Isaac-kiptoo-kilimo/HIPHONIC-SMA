import React from 'react';
import calender from "../../assets/calendar.png"; 
import navigatebutton from "../../assets/dots-vertical.png"; 
import EventsProfileTop from '../../components/Events/EventsProfile'
import EventProfileBottom from '../../components/Events/EventProfileBottom';

import './Events.scss';

const Events = () => {
  return (
    <div className="events">
      <div className="topic">
        <h3>Find Event</h3>
        <img src={navigatebutton} alt="" />
      </div>
    
      <div className="topnavigate">
        <div className='navigation'>
        <h5>Popular</h5>
        <p>For You</p>
        <p>Nearest</p>
        <p>Registered</p>
      </div>
        <div className="calender1">
          <img src={calender} alt="" />
        </div>
      </div>
      <div className="event-cards">
       <div className="Top-Card">
        <EventsProfileTop/>
        <div className="bottom-card">
        <EventProfileBottom/>
        </div>
      </div>
      </div>
     </div> 
         
  );
};

export default Events;