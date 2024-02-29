import React from "react";
import MaskGroup1 from "../../assets/mask-group.png";
import MaskGroup2 from "../../assets/mask-group2.png";
import "./JoinGroupCard.scss";
import GroupHeader from "./GroupHeader";
import PostsCard from "./PostsCard";
import { NavLink } from "react-router-dom";
import PostImageCard from "./PostImageCard";
import Button from "../shared/Button";
import MembersIcons from "../shared/MembersIcons";
import EventOne from "../../assets/event-one.png";
import EventTwo from "../../assets/event-two.png";
import EventThree from "../../assets/event-three.png";
import { useGetGroupsQuery } from "../../features/groups/groupApi";
import ClipLoader from "react-spinners/ClipLoader";

const JoinGroupCard = () => {
  const {data,error, isLoading, isError, isFetching}=useGetGroupsQuery()
  // const groupArray=groups.groups
  // console.log(groups);


  if (isLoading || isFetching) {
    return <ClipLoader color={"#000"} loading={isLoading} size={150} />;
  }
  if (isError) {
    return <div>😐: {error.data.message}</div>;
  }
  return (
    <div className="group-container">
      <GroupHeader />
      <div className="group-sub-titles">
        <div className="sub-titles-left">
          <h4>Suggested for you</h4>
          <p>Groups you might be interested in.</p>
        </div>
        <div className="sub-titles-right">
          <NavLink className="navlink">See All</NavLink>
        </div>
      </div>
      <div className="group-card-container">
      {
  [...data].sort((a, b) => b.id - a.id).map(group => (
    <div className="card-contents" key={group.GroupID}>
      <PostsCard group={group}/>
      <PostImageCard PostImage={group.group_image} />
      <div className="group-page-icon">
        <div className="group-btn-card">
          <Button msg="Join Group" />
        </div>
        <div className="group-bottom">
          <MembersIcons MbrIcon={EventThree} />
          <MembersIcons MbrIcon={EventOne} />
          <MembersIcons MbrIcon={EventTwo} />
          <div className="group-para">
            <p>2K</p>
          </div>
        </div>
      </div>
    </div>
  ))
}
      
      </div>
    </div>
  );
};

export default JoinGroupCard;
