// Import style file
import './MyVideoPost.scss';

// Import components
import User from '../profile/userInfocard';

// Import icons
import { HiDotsHorizontal } from "react-icons/hi";

// Import assets
import Play from '../../assets/Play.png';

// Import React
import React, { useState, useEffect } from 'react';

// Import assets
import Avatar from "../../assets/Avatar.png";

// Import the necessary query hook
import { useGetOneVideoPostQuery } from '../../features/posts/postApi';

const Video = ({ post }) => {
    const [userDetails, setUserDetails] = useState({});

    // Fetch user from the logged-in user
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    // Fetch video posts by the logged-in user
    useEffect(() => {
        const storedUserDetails = JSON.parse(localStorage.getItem('loggedInUser'));
        setUserDetails(storedUserDetails);
    }, []);

    // Video fetch
    const videoUploader = JSON.parse(localStorage.getItem("loggedInUser"));
    const userID = videoUploader.user.UserID;
    const { data } = useGetOneVideoPostQuery(userID);

    // Function to check if the post is from the logged-in user
    const isUserPost = (post) => {
        return loggedInUser && post.UserID === loggedInUser.user.UserID;
    };

    return (
        <div className='myVideo'>
            <div className='videosBottomProfile'>
                <div className="profilePic">
                <img className="avatar"src={userDetails.user && userDetails.user.profileImage} alt="noimage" />
                </div>
                <div className="user">
                    <p className="username">{userDetails.user && userDetails.user.Username}</p>
                    <p className="postDate">Date</p>
                </div>
                <div style={{ color: "#94A3B8" }}><HiDotsHorizontal /></div>
            </div>

            <div className='videosBottomtext'>
                <div className="images">
                    {/* Map video posts */}
                    {data && data.map((video) => (
                        <div key={video.id} className="image-container">
                            <video controls>
                                <source src={video.videoUrl} type="video/mp4" />
                            </video>
                            
                            {/* Display comments */}
                            {video.content && (
                                <div className="comment">
                                    {/* <p>{video.content}</p> */}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <p>content</p>
            </div>
            <div className='videosBottomPreview'>
                <img src={Play} alt="Play button" />
            </div>
        </div>
    );
};

export default Video;
