import React, { useEffect, useState } from "react";
import "./EventCard.scss";
import EventHeader from "./EventHeader";
import Heart2 from "../../assets/heart2.png";
import Button from "../shared/Button";
import EventMembersIcons from "../shared/EventMembersIcon";
import EventCalendar from "./EventCalender";
import EventVenue from "./EventVenue";
import EventImageCard from "./EventImageCard";
import { useGetEventsQuery } from "../../features/Events/EventPostApi";
import { useCreateEventAttendeeMutation, useGetEventAttendeesQuery } from "../../features/EventAtendee/EventAtendeeApi";
import { ToasterContainer, ErrorToast,SuccessToast } from "../../toaster/Toaster";

const EventCard = ({ loggedInUserId }) => {
  const { data } = useGetEventsQuery();

  const [createEventAttendee] = useCreateEventAttendeeMutation();
 

  const handleRegister =async (EventID) => {
const user=JSON.parse(localStorage.getItem("loggedInUser"))
const loggedInUserId=user.user.UserID
  
      console.log("event details",{ EventID: EventID, AttendeeID: loggedInUserId });
  try {
    const response= await createEventAttendee({ EventID: EventID, AttendeeID: loggedInUserId }).unwrap()
    console.log("first error checking",response.error)
    if(response.error){
      ErrorToast(response.error)  
      }else{
        SuccessToast(response.message)
      }
   
  } catch (error) {
    console.log(error.error)
    

  }
    }
 

  return (
    <div className="event-container">
      <ToasterContainer/>
      <div className="events-top">
        <EventHeader />
      </div>
      <div className="event-sub-titles">
        <div className="h4title">
          <h4>Popular</h4>
          <h4>For You</h4>
          <h4>Nearest</h4>
          <h4>Favorite</h4>
          <h4 id="registered">Registered</h4>
        </div>
        <EventCalendar Eventmsg="November" />
      </div>

      <div className="events-images">
        {data && data.map(event => (
          <div className="event-card-contents" key={event.id}>
            <EventImageCard EventMsg="UI/UX " eventIcon={Heart2} EventImage={event.EventPosterURL} />
            <div className="events-page-icon">
              <div className="events-page-icon-head">
                <h3>{event.EventName}</h3>
                <p>By Emma Stone</p>
              </div>
              <div className="events-bottom">
                <EventCalendar Eventmsg="16 Nov,2022" />
              </div>
            </div>
            <div className="center-events-card">
              <div className="events-icons">
                
                  <EventMembersIcons EventID={event.EventID} />
               
              </div>
              {/* <p>+{attendees.length} are going</p> */}
            </div>
            <EventVenue location={event.Location} />
            <Button msg="Register" onClick={() => handleRegister(event.EventID)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCard;







