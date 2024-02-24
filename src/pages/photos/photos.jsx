import React from 'react';
import './Photos.scss';

import Mask from '../assets/images/palbum7  (2).png';
import matt from '../assets/images/palbum1.png';
import mapp from '../assets/images/palbum2.png';
import mopp from '../assets/images/palbum7  (1).png';

const imagePaths = [Mask, matt, mapp, mopp, Mask, matt, mapp, mopp, Mask, matt, mapp, mopp, Mask, matt, mapp, Mask, matt,  mapp, mopp, Mask];

const Photos = () => {
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
      <div className="total">
        <h5>Total Photos</h5>
        <p>{imagePaths.length} Total Photos About You</p>
      </div>
      <div className="images">
        {imagePaths.map((path, index) => (
          <img key={index} src={path} alt={`Photo ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Photos;


