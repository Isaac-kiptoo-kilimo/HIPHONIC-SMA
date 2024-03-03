import React from "react";
import "./RecentActivityCard.scss";
import NavIcon from "../shared/NavIcon";
import PostImageCard from "./PostImageCard";
import RecentImage from "../../assets/recent-image1.png";
import RecentImage2 from "../../assets/recent-image2.png";
import RecentUser from "../../assets/recent-user.png";
import { useGetGroupPostsQuery } from "../../features/groups/groupPostApi";
import { format } from 'date-fns';
import ActivityPoster from "../shared/ActivityPoster";

const RecentActivityCard = () => {
  const {data,error, isLoading, isError, isFetching}=useGetGroupPostsQuery();
  console.log("data 4",data);

  return (
   <div>
     {data && data.map(activity=>(
      <div className="recent-card-container">
      <div className="recent-user">
        <div className="recent-icon">
          <div className="icon-user-initial">
            <h3>DE</h3>
          </div>
         <div className="img-recent">
         <ActivityPoster url={activity.profileImage} />
         </div>
        </div>
        <div className="recent-user-desc">
          <h4>{activity.GroupName}</h4>
          <p>
            {activity.Username} • <span>{ format(activity.CreatedDate, 'm')}mins ago</span>
          </p>
        </div>
      </div>
      <div className="recent-content-desc">
        <p>
          {activity.description}
        </p>
      </div>
      <div className="recent-images">
        <PostImageCard PostImage={activity.activity_photo} />
        <PostImageCard PostImage={activity.activity_photo} />
              </div>
    </div>
    ))}
   </div>
  );
};

export default RecentActivityCard;
