import React, { useState } from 'react';
import NavIcon from '../shared/NavIcon';
import Dots from '../../assets/dots.png';
import './EventHeader.scss';
import CreateEvent from '../../features/Events/CreateEvent'; 

const EventHeader = () => {
  const [showCreateEvent, setShowCreateEvent] = useState(false);

  const toggleCreateEvent = () => {
    setShowCreateEvent(!showCreateEvent);
  };

  return (
    <div className='events-page-header'>
      <div className="events-page-title">
        <h2>Find Event</h2>
      <button type="button" onClick={toggleCreateEvent}>Create Event</button>
      </div>
      <div className="events-page-icon">
        <NavIcon url={Dots} />
      </div>
      {showCreateEvent && <CreateEvent closeModal={toggleCreateEvent} />}
    </div>
  );
};

export default EventHeader;
