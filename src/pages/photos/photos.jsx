import React, { useState, useEffect } from 'react';
import './Photos.scss';
import PhotoForm from '../../components/photos/PhotoForm';
import { FaRegComment } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

const Photos = () => {
  const [imagePaths, setImagePaths] = useState([]);

  useEffect(() => {
    // Retrieve imagePaths from localStorage when component mounts
    const storedImagePaths = localStorage.getItem('imagePaths');
    if (storedImagePaths) {
      setImagePaths(JSON.parse(storedImagePaths));
    }
  }, []);

  const addPhotoUrl = (photoUrl) => {
    // Update state with new photo URL and also store it in localStorage
    const newImagePaths = [...imagePaths, photoUrl];
    setImagePaths(newImagePaths);
    localStorage.setItem('imagePaths', JSON.stringify(newImagePaths));
  };

  return (
    <div className="photobum">
      <div className="yourphotos">
        <h1>Your Photos</h1>
      </div>
      <div className="photos-content">
        <h5>Photos About You</h5>
        <p>Your Photos</p>
        <p>Albums</p>
      </div>
      <div className='photoform'>
        <PhotoForm addPhotoUrl={addPhotoUrl} />
      </div>
      <div className="total">
        <h5>Total Photos</h5>
        <p>{imagePaths.length} Total Photos About You</p>
      </div>
      <div className="images">
        {imagePaths.map((path, index) => (
          <img key={index} src={path} alt={`Photo ${index + 1}`} />
        ))}
        <div className='photo-reaction'>
          <div >
            <CiHeart /> 
            <div>
              <FaRegComment />  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photos;



