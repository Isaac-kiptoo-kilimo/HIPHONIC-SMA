// import stylefile
import './ProfileIntro.scss'

//import react icons
import { FaLocationDot } from "react-icons/fa6";

//import react
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { CiLocationOn } from "react-icons/ci";
import { TbBriefcase } from "react-icons/tb";
import { CiCalendarDate } from "react-icons/ci";
import { GoLink } from "react-icons/go";
import { HiDotsHorizontal } from "react-icons/hi";


const ProfileIntro = () => {
  // const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    const storedUserDetails = JSON.parse(localStorage.getItem('loggedInUser'))
    setUserDetails(storedUserDetails);
  },[])

    return (
      <div className="intro">
        <div className="Intro-top">
          <div className="intro-title">
            <p style={{ fontWeight: 600 }}>Intro</p>
          </div>
          <div className="intro-dots">
          < HiDotsHorizontal />
          </div>
        </div>
      <div className='profileAbout'>
        <p style={{ fontWeight: "500", color: "#64748B" }}>
          I am an experienced joiner with well developed skills
        </p>
      </div>
      <div className="list">
        <div className="map-pin">
        < CiLocationOn />
          <p>{userDetails.user && userDetails.user.Location}</p>
        </div>
        <div className="Briefcase">
        <TbBriefcase />
          <p>Binford Ltd.</p>
        </div>
        <div className="Calender">
        <CiCalendarDate />
          <p>September 24 2017</p>
        </div>
        <div className="link">
        <GoLink />
          <p>dribble.com/Angela</p>
        </div>
      </div>
    </div>
  );
}
export default ProfileIntro;