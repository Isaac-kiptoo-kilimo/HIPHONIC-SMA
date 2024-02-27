import React, { useState } from 'react';

//Import mutations
import { useAddPostMutation } from '../../features/posts/postApi';

//import icons
import { AiOutlineYoutube } from "react-icons/ai";
import { IoImageOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";

//import assets
import Avatar from "../../assets/Avatar.png"

//stylefile
import './ProfileStatusInput.scss'

const ProfileStatusInput = ({ addPostContent }) => {
    const [postContent, setPostContent] = useState('');
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    const [addPost] = useAddPostMutation();
    
    const handlePostContentChange = (e) => {
        setPostContent(e.target.value);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (postContent.trim() !== '') {
          const postWithUserID = {postContent: postContent, UserID: user.user.UserID};
          addPost(postWithUserID)
          .then((response) => {
            console.log('Post created successfully:', response);
            addPostContent(postContent);
            setPostContent('');
          })
          .catch((error) => {
            console.error('Error uploading photo:', error);
          });
        } else {
            console.log('No post content entered');
        }
    };

    return (
        <div className="ProfileStatusInput">
            <div className='ProfileStatusInputTopContainer'>
                <div className="ProfileStatusInputTop">
                    <div className="profilePic"><img src={Avatar} alt="" /></div>
                    <div className="publicContainer"><CiGlobe /> <p>Public</p> <FaChevronDown /></div>
                </div>
                <form onSubmit={handleSubmit}>
                    <input
                        className="statusInputArea"
                        type="text"
                        placeholder="What's on your mind?"
                        value={postContent}
                        onChange={handlePostContentChange}
                        required
                    />
                </form>
            </div>
            <div className='ProfileStatusInputBottom'>
                <div><AiOutlineYoutube /> Live Video</div>
                <div> <IoImageOutline /> Image/Video</div>
                <div><FaRegStar /> Activity</div>
            </div>
        </div>
    )
}

export default ProfileStatusInput;
