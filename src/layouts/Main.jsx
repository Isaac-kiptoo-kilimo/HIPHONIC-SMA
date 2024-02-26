//Styling file
import './Main.scss'

// import pages
import Profile from '../pages/profile/Profile';
import Videos from '../pages/videos/Videos'
import Timeline from '../pages/timeline/Timeline'
import Photos from '../pages/photos/photos'

import { Route, Routes } from 'react-router-dom';

//Importing layouts
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import RightBar from './RightBar';

const mainContent = () => {
    return (
      <div className='mainContainer'>
      <div className="navbar">
          <Navbar />
      </div>
        <div className="mainBottom">
          <div className="sidebar">
          <Sidebar />
          </div>
          <div className="mainPageContent">
         <Routes>
       <Route path='/profile' element={ <Profile />}/>
       <Route path='/timeline' element={ <Timeline />}/>
       <Route path='/videos' element={ <Videos />}/>
       <Route path='/photos' element={ <Photos />}/>
         </Routes>
         </div>
           <div className="rightBar">
            < RightBar/>
          </div>
         </div>
     </div>

      

    );
}

export default mainContent