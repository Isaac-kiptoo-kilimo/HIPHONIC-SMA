import React, { useEffect, useState } from 'react';
import { useGetPostsQuery } from '../../features/posts/postApi.js';

//icons
import { TbMoodSmile } from "react-icons/tb";
import { IoIosLink } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { GoShareAndroid } from "react-icons/go";

//import assets
import Avatar from '../../assets/Avatar.png'

//stylefile
import './ProfileStatusPost.scss'

//import components
import User from "../profile/userInfocard.jsx"

const ProfileStatusPost = () => {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    
    return (
        <div className="profileStatusPost">
            <div>
                <User />
            </div>
            <div className='profileStatusPostTextContent'>
                    <div>
                        <p>content</p>
                    </div>
            </div>
            <div className='profileStatusPostImageContent'>
                2 fetched pics
            </div>
            <div className='profileStatusPostInteraction'>

                <div className="like"><FaHeart /> Likes</div>
                <div className="comment"><AiOutlineMessage/> Comments</div>
                <div className="share"><GoShareAndroid/> 201 Share</div>
            </div>
            <div className='profileStatusPostComment'>
                <input 
                    type="text" 
                    placeholder='Write your message...' />
                <div className="btnIcons">
                    <TbMoodSmile />
                    <IoIosLink />
                </div>
            </div>
        </div>
    )
}
export default ProfileStatusPost;
