import React from 'react';
import calenderd from "../assets/images/calendar.png"; 
import navigatebutton from "../assets/images/dots-vertical.png"; 
import nnn from "../assets/images/calendar.png"; 
import userss from "../assets/images/usesr.png"; 
import linux from "../assets/images/Mask Group (7).png"; 
import callins from "../assets/images/Avatar (10).png"; 
import popones from "../assets/images/Avatar (10).png"; 
import pinux from "../assets/images/Mask Group (8).png"; 
import oinux from "../assets/images/Mask Group (9).png"; 
import jinux from "../assets/images/Mask Group (10).png"; 
 
import './Events.scss';

const Events = () => {
  return (
    <div className="events">
      <div className="topic">
        <h3>Find Event</h3>
        <img src={navigatebutton} alt="" />
      </div>
    
      <div className="topnavigate">
        <h5>Popular</h5>
        <p>For You</p>
        <p>Nearest</p>
        <p>Registered</p>
        <div className="calender1">
          <img src={calenderd} alt="" />
        </div>
      </div>
      
      <div className="poetry">
        <div className="eventimgs">
          <div className="seminor">
            <img src={linux} alt="" />        
          </div>
          <div className="national">
            <h4>National Seminar</h4>
            <h5>By Emma Stone</h5>
            {/* <img id='vids' src={nnn} alt="" /> */}
            <div className="callend">
              {/* <img src={callins} alt="" /> */}
            </div> 
          </div>
          <div className="members">
            <img src={userss} alt="" />
            <p>+2k are going</p>
          </div>
          <div className="mapp">
            <img src={popones} alt="" />
            <p>4517 Washington Ave. Manchester, <br /> Kentucky</p>
          </div>
          <div className="continside">
            <button type="button">Register</button>
          </div>
        </div>
        <div className="eventimgs">
          <div className="seminor">
            <img src={pinux} alt="" />        
          </div>
          <div className="national">
            <h4>National Seminar</h4>
            <h5>By Emma Stone</h5>
            {/* <img id='vids' src={nnn} alt="" /> */}
            <div className="callend">
              {/* <img src={callins} alt="" /> */}
            </div> 
          </div>
          <div className="members">
            <img src={userss} alt="" />
            <p>+2k are going</p>
          </div>
          <div className="mapp">
            <img src={popones} alt="" />
            <p>4517 Washington Ave. Manchester, <br /> Kentucky</p>
          </div>
          <div className="continside">
          <button type="button">Register</button>
        </div>
      </div>
      </div>
      <div className="eventspage">
        <div className="eventimgs">
          <div className="seminor">
            <img src={oinux} alt="" />        
          </div>
          <div className="national">
            <h4>National Seminar</h4>
            <h5>By Emma Stone</h5>
            {/* <img id='vids' src={nnn} alt="" /> */}
            <div className="callend">
              {/* <img src={callins} alt="" /> */}
            </div> 
          </div>
          <div className="members">
            <img src={userss} alt="" />
            <p>+2k are going</p>
          </div>
          <div className="mapp">
            <img src={popones} alt="" />
            <p>4517 Washington Ave. Manchester, <br /> Kentucky</p>
          </div>
          <div className="continside">
            <button type="button">Register</button>
          </div>
        </div>
        <div className="eventimgs">
          <div className="seminor">
            <img src={jinux} alt="" />        
          </div>
          
          <div className="national">
            <h4>National Seminar</h4>
            <h5>By Emma Stone</h5>
            {/* <img id='vids' src={nnn} alt="" /> */}
            <div className="callend">
              {/* <img src={callins} alt="" /> */}
            </div> 
          </div>
          <div className="members">
            <img src={userss} alt="" />
            <p>+2k are going</p>
          </div>
          <div className="mapp">
            <img src={popones} alt="" />
            <p>4517 Washington Ave. Manchester, <br /> Kentucky</p>
          </div>
          <div className="continside">
            <button type="button">Register</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Events;