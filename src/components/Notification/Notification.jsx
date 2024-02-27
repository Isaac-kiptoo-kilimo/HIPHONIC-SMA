import React from 'react';
import xicon from '../../assets/close.close.png';
import wade from '../../assets/Avatar.png';
import jane from '../../assets/Avatar1.png';
import esther from '../../assets/Avatar2.png';
import cameron from '../../assets/Avatar3.png';
import brooklyn from '../../assets/Avatar4.png';
import './Notification.scss';

const friends = [
  { icon: wade, name: 'Angela Lee' },
  { icon: jane, name: 'Jane Cooper' },
  { icon: esther, name: 'Esther Howard' },
  { icon: cameron, name: 'Cameron Williamson' },
  { icon: brooklyn, name: 'Brooklyn Simmons' },
];

const Notification = ({ onClose }) => {
  return (
    <div className="bigmain">
      <div className="notification">
        <div className="topNotification">
          <h4>Notification</h4>
          <button onClick={onClose}>
            <img src={xicon} alt="Close Icon" />
          </button>
        </div>
        <div className="allnote">
          <button type="button">All Notification</button>
          <button type="button">Unread</button>
        </div>
        <div className="day">
          <h4>Today</h4>
        </div>
        <div className='TodayNotification'>
          {friends.map((friend, index) => (
            <div key={index} className="notification-item">
              <img src={friend.icon} alt={friend.name} />
              <span>{friend.name} Notification</span>
            </div>
          ))}
        </div>

        <div className="yesterdayNotification">
          <h4>YESTERDAY</h4>
          <div className="people">
            {friends.map((friend, index) => (
              <div key={index} className="notification-item">
                <img src={friend.icon} alt={friend.name} />
                <span>{friend.name} Notification</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;


