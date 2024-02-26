import React from 'react'
import Avatar from "../../assets/Avatar.png"
import './TopProfile.scss'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const TopProfile = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState('');

  useEffect(() => {
    const storedUserDetails = JSON.parse(localStorage.getItem('loggedInUser'));
    setUserDetails(storedUserDetails);
    console.log(storedUserDetails.user.Username);

    if (!storedUserDetails || !storedUserDetails.token) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="Top">
      <div className="BackGround">
        <div className="blueimage">
          
         <div className="btn">
         <div>
         <button  className='profile-btn'>Edit Profile</button>
         </div>
         </div> 
          <img className="avatar"src={Avatar} alt="noimage" />
        </div>
      </div>
      <div className="bottom-top">
      <div className="head-pro">
       <h2> {userDetails.user.Username}</h2> 
        <p>{userDetails.user.TagName}</p>
      </div>
      <div className="navs">
        <div className="posts">
          <p className='dim-header'>POSTS</p>
          <br />
          <h3>683</h3>
        </div>
        <div className="posts">
          <p className='dim-header'>FRIENDS</p>
          <br />
          <h3>5.7K</h3>
        </div>
        <div className="posts">
          <p className='dim-header'>PHOTOS</p>
          <br />
          <h3>296</h3>
        </div>
        <div className="post">
          <p className='dim-header'>LIKES</p>
          <br />
          <h3>10.7K</h3>
        </div>
      </div>
      </div>
    </div>
  );
}

export default TopProfile;