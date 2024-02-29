import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import "./CreateGroupPost.scss";
import { useAddGroupPostMutation } from "./groupPostApi";



const CreateGroupPost = ({ closeModal }) => {
const [addGroupPost]=useAddGroupPostMutation()
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const UserID= user?.user?.UserID

  console.log(user);

 

  const HandleSubmitGroupPost=(e)=>{
    e.preventDefault()
    addGroupPost({post_description:e.target[0].value,post_image:e.target[2].value,postedByID:UserID})
   
    closeModal();
  }


  const handleClose = () => {
    closeModal();
  };


  return (
    <section  className="modal-card">
      <div className="close">
        <MdOutlineCancel className="close-icon" onClick={handleClose} />
      </div>

      <form className="form" onSubmit={HandleSubmitGroupPost} >
      <h2>Post Programmes</h2>
      
        <div className="input-group">
          <input
            type="text"
            name="description"
            id="post_description"
            placeholder="post Description"          
          />
          
        </div>
        <div className="input-group">
          <input
            type="text"
            name="group_image"
            id="post_image"
            
            placeholder="post image"
            
          />
        </div> 
      
        <button type="submit">post</button>
      </form>
    </section>
  );
};

export default CreateGroupPost;
