import React, { useEffect, useState } from 'react';
import { useGetPostQuery } from '../../features/posts/postApi.js';

// Icons
import { FaHeart } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { GoShareAndroid } from "react-icons/go";

// Styles
import './ProfileStatusPost.scss'

const ProfileStatusPost = ({ loggedInUser, postId }) => {
    const { data: post, error, isLoading, isError, isFetching } = useGetPostQuery(postId);
    const [userDetails, setUserDetails] = useState(loggedInUser);

    useEffect(() => {
        setUserDetails(loggedInUser);
    }, [loggedInUser]);

    return (
        <div className="profileStatusPost">
            <div className='profileStatusPostHeader'>
                <div className="profilePic">
                    {/* <img src={userDetails.user.profileImage} alt="Profile" /> */}
                </div>
                <div className="user">
                    <p className="username">userDetails.user.Username</p>
                    <p className="postDate">56 mins ago</p>
                </div>
            </div>
            <div className='profileStatusPostTextContent'>
                <div>
                    {isError ? (
                        <p>Error fetching post</p>
                    ) : isLoading ? (
                        <p>Loading...</p>
                    ) : (
                        post && (
                            <div key={post.id}>
                                <p>{post.content}</p>
                                {/* Render post likes and comments here */}
                                <div className='profileStatusPostInteraction'>
                                    <div className="like"><FaHeart /> {post.likes} Likes</div>
                                    <div className="comment"><AiOutlineMessage /> {post.comments} Comments</div>
                                    <div className="share"><GoShareAndroid /> {post.shares} Shares</div>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
            <div className='profileStatusPostComment'>
                <input
                    type="text"
                    placeholder='Write your message...' />
            </div>
        </div>
    )
}

export default ProfileStatusPost;
