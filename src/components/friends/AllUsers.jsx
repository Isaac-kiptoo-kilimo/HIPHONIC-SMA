import React from "react";
import Button from "../shared/Button";
import "./AllUsers.scss";

const AllUsers = ({ user }) => {
  return (
    <article className="Friendscard" key={user.userID}>
     <div>
     <img width={60} src={user && user.profileImage} alt="avatar" />
     </div>

      <div className="friends-content">
        <h3>{user.Username}</h3>
        <div className="friendship-btn">
          <div className="friends-btn">
            <div className="add-friend-btn">
              <Button msg="Add friend" />
            </div>
            <div className="remove-friend-btn">
              <Button msg="Remove" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default AllUsers;
