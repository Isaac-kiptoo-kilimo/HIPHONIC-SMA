//Importing styling file
import './App.scss'

//Importing layouts
// import Navbar from './layouts/Navbar';
// import Sidebar from './layouts/Sidebar';
// import MainContent from './layouts/Main';
// import RightBar from './layouts/RightBar';
import Login from './features/auth/login/Login';
import SignUp from './features/auth/register/SignUp';

function App() {

  return (
    <div>
      {/* <Login/> */}
      <SignUp/>
    </div>
    // <div className='mainContainer'>
    //   <div className="navbar">
    //     <Navbar />
    //   </div>
    //   <div className="mainBottom">
    //     <div className="sidebar">
    //       <Sidebar />
    //     </div>
    //     <div className="mainContent">
    //       < MainContent/>
    //     </div>
    //     <div className="rightBar">
    //       < RightBar/>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App
