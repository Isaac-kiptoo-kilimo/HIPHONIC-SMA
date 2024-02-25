//Styling file
import './Main.scss'

// import pages
import Profile from '../pages/profile/Profile';

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
        
         </Routes>
         </div>
           <div className="rightBar">
            < RightBar/>
          </div>
         </div>
     </div>

      

      </div>

    );
}

export default mainContent