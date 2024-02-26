import React from 'react'
import { createPortal } from "react-dom";
import Avatar from "../../assets/Avatar.png"
import './TopProfile.scss'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import UpdateUser from '../../features/user/UpdateUser'
const updateUserEl = document.getElementById("edit-post");


const TopProfile = ({user}) => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({});
  const [editingPostId, setEditingPostId] = useState(null);
  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
    const storedUserDetails = JSON.parse(localStorage.getItem('loggedInUser'));
    setUserDetails(storedUserDetails);
    console.log(storedUserDetails.user.Username);

    if (!storedUserDetails || !storedUserDetails.token) {
      navigate('/login');
    }
  }, [navigate]);


  const handleEdit = () => {
    console.log(userDetails.user.userID);
    setEditingPostId(userDetails.user.userID);
    setShowModal(true);
  };


  const closeModal = () => {
    setShowModal(false);
    setEditingPostId(null);
  };

  return (
    <div className="Top">
      <div className="BackGround">
        <div className="blueimage">
          
         <div className="btn">
         <div>
         <button onClick={handleEdit} disabled={editingPostId !== null} className='profile-btn'>Edit Profile</button>
         </div>
         <div>
        {showModal &&
          createPortal(
            <UpdateUser user={user} closeModal={closeModal} />,
            updateUserEl
          )}
      </div>
         </div> 
          <img className="avatar"src={Avatar} alt="noimage" />
        </div>
      </div>
      <div className="bottom-top">
      <div className="head-pro">
       <h2>{userDetails.user && userDetails.user.Username}</h2> 
        <p>{userDetails.user && userDetails.user.TagName}</p>
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