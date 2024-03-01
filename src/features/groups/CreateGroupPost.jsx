import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import "./CreateGroupPost.scss";
import { useAddGroupPostMutation } from "./groupPostApi";
import { useParams } from "react-router-dom";



const CreateGroupPost = ({ closeModal }) => {
  const { GroupID } = useParams();

const [addGroupPost]=useAddGroupPostMutation()
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const UserID= user?.user?.UserID

  console.log(user);

  GroupID

  const HandleSubmitGroupPost=(e)=>{
    e.preventDefault()
    addGroupPost({description:e.target[0].value,activity_photo:e.target[1].value,UploadedByID:UserID,GroupID:GroupID})
   
   
  }


  const handleClose = () => {
    closeModal();
  };

  const onSubmit=()=>{
    console.log("I can submit");
  }


  return (
    <div className="singlegroup-page">
      {/* <ToasterContainer /> */}
      <div className='container-single-group'>
        <div className="header">
          <h3>Post What you have in mind</h3>
        </div>
        <form onSubmit={HandleSubmitGroupPost}>
          <div className="form-inputs">
            <label htmlFor="description" className='username'>
              <input type="text" id="description" name="description" placeholder="Description" />
            </label>
            
            <label htmlFor="activity_photo" className='password'>
              <input type="text" id="activity_photo" name="activity_photo" placeholder="Activity photo" />
            </label>
           
          </div>
    
          <button type="submit">Post</button>
        </form>
       
      </div>
    </div>
  )
};

export default CreateGroupPost;
