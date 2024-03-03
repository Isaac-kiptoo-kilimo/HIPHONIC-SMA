import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { VideoPost } from '../../components/videos/VideoPost';
import NewVideo from '../../components/videos/VideoForm';
import { MdFileUpload } from "react-icons/md";
import { ClipLoader } from 'react-spinners';
import { useGetPostsQuery } from '../../features/posts/postApi';
import './Videos.scss';
import VideoPostsList from "../../components/videos/VideoPostsLists"

const Videos = () => {
  // const {data: posts, error}

  // Add video hidden form
      const [isVisible, setIsVisible] = useState(false);

      const toggleVisibility = () => {
          setIsVisible(!isVisible);
      };

  return (
    <div className="Videos">
      <div className="videosTop">
        <div className="videosTopHeader">
          <div style={{ fontWeight:'700'}}>Video</div>
          <div>
            <CiSearch />
          </div>
        </div>
        <div className="videosTopContent">
          <div className="videosTopContentheader">
            <div>Categories to explore</div>
            <button style={{ color: '#2563EB' }}>See all</button>
          </div>
          <div className="videosTopContentCards">
            <VideoPost />
          </div>
        </div>
      </div>

      <div className="videosBottom">

        {/* This is the post list for post by the logged in user  */}
        <div className='myVideo'>
          <VideoPostsList />
        </div>

        {/* This is the input form to add a video post  */}
        <div className='addMyVideo'>
          <MdFileUpload style={{fontSize:'100px'}}  onClick={toggleVisibility}/>
          <p>Click to add a new video</p>
          {isVisible && (
          < NewVideo/>
          )}
        </div>
      </div>
    </div>
  );
};

export default Videos;
