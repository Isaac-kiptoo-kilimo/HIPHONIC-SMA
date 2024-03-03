import React from "react";
import { ClipLoader } from "react-spinners";
import VideoCard from "./MyVideoPost"

const VideoPostList = ({videos}) => {
    return (
    <div className="video-list">
        < VideoCard/>
        
        {/*
      {videos.map((video, index) => (
        <VideoCard key={index} video={video} />
      ))}
      
    */}
    </div>
    )
}

export default VideoPostList