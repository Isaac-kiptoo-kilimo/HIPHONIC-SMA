import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import "./UpdateUser.scss";
import { useUpdateUserMutation } from "./userApi";
import { useRef } from "react";

const UpdateUser = ({ user, closeModal }) => {
  const [updatePost] = useUpdateUserMutation();

  const [title, setTitle] = useState(user ? user.title : "");
  const [body, setBody] = useState(user ? user.body : "");
  const modalCardRef = useRef(null);


  const handleUpdate = (e) => {
    e.preventDefault();
    updatePost({ title: title, body: body, id: post.id });
    // console.log("love it", { post_title: title, post_content: content }, "id");
    closeModal();
  };

  const handleClose = () => {
    closeModal();
  };

  const handleBackgroundClick = (e) => {
    if (modalCardRef.current && !modalCardRef.current.contains(e.target)) {
      closeModal();
    }
  };
  return (
    <section onClick={handleBackgroundClick} className="modal-card">
      <div ref={modalCardRef} className="close">
        <MdOutlineCancel className="close-icon" onClick={handleClose} />
      </div>

      <form className="form" onSubmit={handleUpdate}>
      <h2>Update Your Profile</h2>

        <div className="input-group">
          <input
            type="text"
            name="Username"
            id="Username"
            placeholder="Username"
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            name="TagName"
            id="TagName"
            placeholder="TagName"
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            name="Location"
            id="Location"
            placeholder="Location"
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            name="company_name"
            id="company_name"
            placeholder="company name"
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            name="website_link"
            id="website_link"
            placeholder="Website Link"
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            name="profileImage"
            id="profileImage"
            placeholder="Profile Image Link"
          />
        </div>
      
    
     
        {/* <label className="form-input" htmlFor="updatePostTitle">
          Title:
          <input type="text"  value={title}
            onChange={(e) => setTitle(e.target.value)} />
        </label> */}
        {/* <label className="form-input" htmlFor="updatePostContent">
          Content:
          <textarea value={body} onChange={(e) => setBody(e.target.value)} />
        </label> */}
        <button type="submit">Update User</button>
      </form>
    </section>
  );
};

export default UpdateUser;
