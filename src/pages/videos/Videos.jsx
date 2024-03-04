import React, { useState } from 'react';

//React icons
import { CiSearch } from 'react-icons/ci';
import { MdFileUpload } from "react-icons/md";
import { ClipLoader } from 'react-spinners';

//Stylefile
import './Videos.scss';

//Component
import VideoPostsList from "../../components/videos/VideoPostsLists"
import { VideoPost } from '../../components/videos/VideoPost';
import NewVideo from '../../components/videos/VideoForm';
import VideoCategories from '../../components/videos/VideoCategories'

//Mutations
import { useGetVideosQuery } from '../../features/Video/videoApi';

const Videos = () => {
  // All the videos functions
  const {data} = useGetVideosQuery()

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
            {/* <VideoPost /> */}
            <VideoCategories />
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
      <div className='allVideos'></div>
    </div>
  );
};

export default Videos;
