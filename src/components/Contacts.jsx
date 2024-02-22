import React from 'react';
import './Contacts.scss';
import wade from "../assets/Avatar1.png";
import jane from "../assets/Avatar 11.png";
import esther from "../assets/Avatar2.png";
// import cameron from "../assets/Avatar3.png";


function Contacts() {
  const contacts = [
    {
      icon: wade,
      name: 'Wade Warren'
    },
    {
      icon: jane,
      name: 'Jane Cooper'
    },
    {
      icon: esther,
      name: 'Esther Howard'
    },
    // {
    //     icon: cameron,
    //     name: 'Cameron Williamson'
    //   },
 
 
  ];

  return (
    <div className="Contacts">
      <div className="Heading">
        <p style={{ textTransform: "uppercase" }}>Contacts</p>
        <button className='see-all'>
          <p>See-all</p>
        </button>
      </div>
      <div className="ContactsMenu">
        {contacts &&
          contacts.map((item, index) => (
            <div className='ContactContainer' key={index}>
              <div className="ContactItem">
                <img src={item.icon} alt={item.name} />
                <p>{item.name}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Contacts;