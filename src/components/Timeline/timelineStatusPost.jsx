import React, { useEffect, useState } from 'react';
import { useGetPostsQuery } from '../../features/posts/postApi.js';
import { useAddCommentMutation } from '../../features/Comments/CommentsApi.js';

//icons
import { TbMoodSmile } from "react-icons/tb";
import { IoIosLink } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { GoShareAndroid } from "react-icons/go";

//import assets

//stylefile
import './timelineStatusPost.scss'

//import components
import User from "./TimelineUser.jsx"

const ProfileStatusPost = ({post}) => {
    //Comment action
    const [commentContent, setCommentContent] = useState('');
        const user = JSON.parse(localStorage.getItem('loggedInUser'));
        const [addComment] = useAddCommentMutation();
        const handlePostContentChange = (e) => {
            setCommentContent(e.target.value);
        }
        const handleSubmit = (e) => {
            e.preventDefault();

            if (commentContent.trim() !== '') {
                const commentWithUserId = {Content: commentContent, UserID: user.user.UserID};
                addComment(commentWithUserId)
                .then((response) => {
                    console.log('Comment sent!:', response);
                    setCommentContent('')
                })
                .catch((error) => {
                    console.error('Error sending the comment:', error);
                });
            } else {
                console.log('No post content entered');
            }
        }

    return (
        <div className="profileStatusPost">
            <div>
                <User />
            </div>
            <div className='profileStatusPostTextContent'>
                <p>{post.content}</p>
            </div>
            <div className='profileStatusPostImageContent'>
                {/* {UserID} */}
            </div>
            <div className='profileStatusPostInteraction'>
                <div className="like"><FaHeart />{post.likes} Likes</div>
                <div className="comment"><AiOutlineMessage/>{post.comments} Comments</div>
                <div className="share"><GoShareAndroid/> 201 Share</div>
            </div>
            <div className='profileStatusPostComment'>
            <form onSubmit={handleSubmit} className='commentForm'>
                <input 
                    className='commentInputArea'
                    type="text" 
                    placeholder='Write your message...'
                    value={commentContent}
                    onChange={handlePostContentChange}
                    required
                    />
                </form>
                <div className="btnIcons">
                    <TbMoodSmile />
                    <IoIosLink />
                </div>
            </div>
        </div>
    )
}
export default ProfileStatusPost;
