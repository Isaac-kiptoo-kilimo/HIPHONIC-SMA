import React from 'react';
import Party from '../../assets/Mask Group (9).png'; 
import final from '../../assets/Mask Group (10).png'; 
import userIcon from '../../assets/Avatar.png';
import popIcon from '../../assets/mapicon.png'; 
import calender from '../../assets/calendar.png'
import './EventsProfile.scss'

const EventProfileBottom = () => {
  return (
    <div className="poetry">
      <div className="Nationalseminor">
        <div className="seminor">
          <img src={Party} alt="" />
        </div>
        <div className="national">
         <div>
          <h4>National Seminar</h4>
          <h5>By Emma Stone</h5>
          </div>
          <div className="calender">
            <img src={calender} alt="" />
          </div>
        </div>
        <div className="members">
        <div className="membersimg">
          <img src={userIcon} alt="" />
          <img src={userIcon} alt="" />
          <img src={userIcon} alt="" />
          </div>
          <div>
          <p>+2k are going</p>
        </div>
         </div>
        <div>
        <div className="map">
          <img src={popIcon} alt="" />
          <p>4517 Washington Ave. Manchester, <br /> Kentucky</p>
        </div>
        <div className="continside">
          <button type="button">Register</button>
        </div>
      </div>
    </div>
    <div className="poetry">
    <div className="Nationalseminor">
      <div className="seminor">
        <img src={final} alt="" />
      </div>
      <div className="national">
       <div>
        <h4>National Seminar</h4>
        <h5>By Emma Stone</h5>
        </div>
        <div className="calender">
          <img src={calender} alt="" />
        </div>
      </div>
      <div className="members">
      <div className="membersimg">
        <img src={userIcon} alt="" />
        <img src={userIcon} alt="" />
        <img src={userIcon} alt="" />
        </div>
        <div>
        <p>+2k are going</p>
      </div>
       </div>
      
      <div className="map">
        <img src={popIcon} alt="" />
        <p>4517 Washington Ave. Manchester, <br /> Kentucky</p>
      </div>
      <div className="continside">
        <button type="button">Register</button>
      </div>
    </div>
  </div>
  </div>
  );
}

export default EventProfileBottom;