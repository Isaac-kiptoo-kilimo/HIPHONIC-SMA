import React, { useState, useEffect } from 'react';
import './Photos.scss';
import PhotoForm from '../../components/photos/PhotoForm';
import { AiFillMessage } from "react-icons/ai";
import { IoHeart } from "react-icons/io5";
import { useGetPhotosQuery } from '../../features/Photos/Photoapi';
import { json } from 'react-router-dom';

const Photos = () => {
  const [imagePaths, setImagePaths] = useState([]);
  const [comments, setComments] = useState([]);


const photoUploader=JSON.parse(localStorage.getItem("loggedInUser"))
const userID=photoUploader.user.UserID
console.log(userID)
const {data}=useGetPhotosQuery(userID)
console.log(data);


  const addPhotoUrl = (photoUrl) => {
    const newImagePaths = [...imagePaths, photoUrl];
    setImagePaths(newImagePaths);
    localStorage.setItem('imagePaths', JSON.stringify(newImagePaths));
  };

  const handleClick = () => {
    setCount(count + 1);
};


  const handleComment = (index, comment) => {
   
    console.log(`Commented on photo at index ${index}: ${comment}`);
    const updatedComments = [...comments];
    updatedComments[index] = comment;
    setComments(updatedComments);
  };
  const[count, setCount] = useState(0)
 

  return (
    <div className="photobum">
      <div className="yourphotos">
        <h1>Your Photos</h1>
        <div className='photoform'>
          <PhotoForm addPhotoUrl={addPhotoUrl} />
        </div>
      </div>
      <div className="photos-content">
        <h5>Photos About You</h5>
        <p>Your Photos</p>
        <p>Albums</p>
      </div>
      <div className="total">
        <h5>Total Photos</h5>
        <p>{imagePaths.length} Total Photos About You</p>
      </div>
      <div className="images">
        {data && data.map((photo) => (
          <div key={photo.id} className="image-container">
            <img src={photo.PhotoURL} alt={`Photo`} />
            <div className='photo-reaction'>
              <div onClick={() => handleClick()}>
                 {count}<IoHeart />
              </div>
              <div>
                <AiFillMessage />
                <form onSubmit={(e) => {
                  e.preventDefault();
                  const comment = e.target.comment.value;
                  handleComment(comment);
                }}>
                  
                </form>
              </div>
            </div>
            {comments && (
              <div className="comment">
                <p>{comments}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;






