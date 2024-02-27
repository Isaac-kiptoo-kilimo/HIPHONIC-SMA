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

const ProfileStatusPost = ({ UserID }) => {
    // Fetch posts
    const { data: posts = [], isLoading, isError, error } = useGetPostsQuery();
    const [currentPostIndex, setCurrentPostIndex] = useState(0);

    useEffect(() => {
        console.log(posts);
    }, [posts]);

    const userPosts = posts.filter(post => post.userId === UserID);
    const currentPost = userPosts[currentPostIndex];

    return (
        <div className="profileStatusPost">
            <div>
                <User />
            </div>
            <div className='profileStatusPostTextContent'>
                {/* Display posts */}
                {isLoading ? (
                    <p>Loading...</p>
                ) : isError ? (
                    <p>Error: {error.message}</p>
                ) : (
                    <div key={currentPost?.post_id}>
                        {/* Render current post */}
                        <p>{currentPost?.content}</p>
                    </div>
                )}
            </div>
            <div className='profileStatusPostImageContent'>
                2 fetched pics
            </div>
            <div className='profileStatusPostInteraction'>
                {/* Assuming 'post' is defined somewhere, we use it here */}
                <div className="like"><FaHeart /> {currentPost?.likes} Likes</div>
                <div className="comment"><AiOutlineMessage/> {currentPost?.comments} Comments</div>
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
