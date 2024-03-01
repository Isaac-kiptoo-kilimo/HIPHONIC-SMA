//ProfileStatusInput
import React, { useState, useEffect } from 'react';
import { useAddPostMutation } from '../../features/posts/postApi';
import Avatar from '../../assets/Avatar.png';
// import './ProfileStatusInput.scss';

const VideoForm = () => {
  const [postContent, setPostContent] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const user = JSON.parse(localStorage.getItem('loggedInUser'));
  const [addPost] = useAddPostMutation();

  const handlePostContentChange = (e) => {
    setPostContent(e.target.value);
  };

  const handleVideoUrlChange = (e) => {
    setVideoUrl(e.target.value);
  };

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (postContent.trim() !== '') {
      const postWithUserData = {
        content: postContent,
        videoUrl: videoUrl,
        imageUrl: imageUrl,
        UserID: user.user.UserID,
      };

      addPost(postWithUserData)
        .then((response) => {
          console.log('Post created successfully:', postWithUserData);
          setPostContent('');
          setVideoUrl('');
          setImageUrl('');
        })
        .catch((error) => {
          console.error('Error creating post:', error);
        });
    } else {
      console.log('No post content entered');
    }
  };

  return (
    <div className="ProfileStatusInput">
      <div className="ProfileStatusInputTopContainer">
        <div className="ProfileStatusInputTop">
          <div className="profilePic">
            <img src={Avatar} alt="User Avatar" />
          </div>
          <form className='statusPoster' onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter video URL"
              value={videoUrl}
              onChange={handleVideoUrlChange}
            />
            <input
              type="text"
              placeholder="Enter image URL"
              value={imageUrl}
              onChange={handleImageUrlChange}
            />
            <textarea
              placeholder="Write your post content..."
              value={postContent}
              onChange={handlePostContentChange}
            />
            <button type="submit">Post</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VideoForm;
