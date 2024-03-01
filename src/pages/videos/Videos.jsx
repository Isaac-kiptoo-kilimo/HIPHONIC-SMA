import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import VideoForm from '../../components/videos/VideoForm';
import { VideoPost } from '../../components/videos/VideoPost';
import MyVideo from '../../components/videos/MyVideoPost';
import './Videos.scss';

const Videos = () => {
  const [showAddVideoForm, setShowAddVideoForm] = useState(false);

  const toggleAddVideoForm = () => {
    setShowAddVideoForm(!showAddVideoForm);
  };

  return (
    <div className="Videos">
      <div className="videosTop">
        <div className="videosTopHeader">
          <div style={{ fontWeight: '700' }}>Video</div>
          <div>
            <CiSearch />
          </div>
        </div>
        <div className="videosTopContent">
          <div className="videosTopContentheader">
            <div>Categories to explore</div>
            <button onClick={toggleAddVideoForm}>Add video</button>
            <button style={{ color: '#2563EB' }}>See all</button>
          </div>
          <div className="videosTopContentCards">
            <VideoPost />
          </div>
        </div>
      </div>
      <div className="videosBottom">
        {showAddVideoForm && <VideoForm />}
        <MyVideo />
      </div>
    </div>
  );
};

export default Videos;
