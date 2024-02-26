
import { useEffect,React } from 'react';
import FriendsCard from '../../components/friends/FriendsCard';
import './FriendsPage.scss';
import Button from '../../components/shared/Button';


const FriendsPage=()=>{

  

    return (
       <div className="friends-right-content">
         <div className="friends-middle-content">
          <div className="friends-btn">
            <Button msg="Your Friends"/>
            <Button msg="Suggestions"/>
          </div>
         <div className="top">
          <FriendsCard/>
        </div>
       
      </div>             
 </div>
    )
};

export default FriendsPage;

