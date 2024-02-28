import React, { useEffect } from "react";
import "./FriendsCard.scss";
import wade from "../../assets/wade.png";
import jane from "../../assets/jane.png";
import esther from "../../assets/esther.png";
import brooklyn from "../../assets/brooklyn.png";
import Angela from "../../assets/angela.png";
import Leslie from "../../assets/leslie.png";
import Jenny from "../../assets/jenny.png";
import Robert from "../../assets/robert.png";
import Cody from "../../assets/cody.png";
import Kristina from "../../assets/kristina.png";
import FriendIcon from "../../assets/friend-icon.png";
import Button from "../shared/Button";
import { useGetFriendsQuery } from "../../features/friends/friendApi";


const FriendsCard = () => {
  const loggedInUserDetails = JSON.parse(localStorage.getItem("loggedInUser"));
  const User1ID = loggedInUserDetails?.user?.UserID;

  const { data: friendships, error, isLoading, isError, isFetching } = useGetFriendsQuery(User1ID);
  console.log(User1ID);
  console.log(friendships);

  // const contacts = [
  //   {
  //     image: Angela,
  //     name: "Angela Lee",
  //     username: "@anglee",
  //   },
  //   {
  //     image: wade,
  //     name: "Wade Warren",
  //     username: "@wadee",
  //   },
  //   {
  //     image: jane,
  //     name: "Jane Cooper",
  //     username: "@jane",
  //   },
  //   {
  //     image: esther,
  //     name: "Esther Howard",
  //     username: "@esther",
  //   },
  //   {
  //     image: brooklyn,
  //     name: "Brooklyn Simmons",
  //     username: "@Brooklyn",
  //   },
  //   {
  //     image: Leslie,
  //     name: "Leslie Alendarer",
  //     username: "@Leslie",
  //   },
  //   {
  //     image: Jenny,
  //     name: "Jenny Wilson",
  //     username: "@Jenny",
  //   },
  //   {
  //     image: Robert,
  //     name: "Robert Fox",
  //     username: "@Robert",
  //   },
  //   {
  //     image: Cody,
  //     name: "Cody Fisher",
  //     username: "@Cody",
  //   },
  //   {
  //     image: Kristina,
  //     name: "Kristin Watson",
  //     username: "@Kristina",
  //   },
  // ];
  return (
    <div className="friendsContainer">
      <div className=""></div>
      <div className="friends-menu">
        {friendships &&
          friendships.map((friend, index) => (
            <div className="friendsCard">
              <div className="friend" key={index}>
                <div className="friends-card-top">
                 <div className="img-name">
                 <img width={60} src={friend.profileImage} alt={friend.ProfileImage} />
                  <div className="friends-name">
                   <p>{friend.Username}</p>
                   <p>{friend.TagName}</p>
                  </div>
                 </div>
                  <img src={FriendIcon} alt="icon" />
                </div>
                <div className="btn">
                  <Button msg="Message" />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default FriendsCard;
