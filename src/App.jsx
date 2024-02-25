//Importing styling file
import { Route, Router, Routes } from "react-router-dom";
import "./App.scss";

//Importing layouts
// import Navbar from './layouts/Navbar';
// import Sidebar from './layouts/Sidebar';
// import MainContent from './layouts/Main';
// import RightBar from './layouts/RightBar';
import Login from "./features/user/login/Login";
import SignUp from "./features/user/register/SignUp";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="*" element={<Main/>} /> */}
      </Routes>
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

export default App;
