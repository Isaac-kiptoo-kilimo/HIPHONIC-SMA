import React, { useState } from "react";
import NavIcon from "../shared/NavIcon";
import FriendIcon from "../../assets/friend-icon.png";
import { createPortal } from 'react-dom';

import "./PostsCard.scss";
import CreateGroupPost from "../../features/groups/CreateGroupPost";


const PostsCard = ({group}) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowPost = () => {
    setShowModal(true);
  };


  const closeModal = () => {
    setShowModal(false);
  };
  return (
      <div className="post-card-head">
        <div className="post-card-left-items">
          <div className="main-post-card-user">
          <div className="post-card-user">
            <h4>UD</h4>
          </div>
          </div>
          <div className="post-card-user-desc">
            <h4>{group.GroupName}</h4>
            <p>
              Bandung • <span>7 posts a day</span>
            </p>
          </div>
        </div>
       <div className="post-icon-card">
       <NavIcon url={FriendIcon} onClick={handleShowPost} />
       </div>
       {
          showModal && createPortal(
            <CreateGroupPost closeModal={closeModal}  />,
            document.body
          )
        }
      </div>

  );
};

export default PostsCard;
