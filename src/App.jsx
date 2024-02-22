//Importing styling file
import './App.scss'

//Importing layouts
import Navbar from './layouts/Navbar';
import Sidebar from './layouts/Sidebar';
import MainContent from './layouts/Main';
import RightBar from './layouts/RightBar';

function App() {

  return (
    <div className='mainContainer'>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="mainBottom">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="mainContent">
          < MainContent/>
        </div>
        <div className="rightBar">
          < RightBar/>
        </div>
      </div>
    </div>
  );
}

export default App
