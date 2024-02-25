//Styling file
import './Main.scss'

// import pages
import Profile from '../pages/profile/Profile';
import Timeline from '../pages/timeline/Timeline';

const mainContent = () => {
    return (
      <div className="mainPageContent">
        {/* <Profile /> */}
        <Timeline />
      </div>
    );
}

export default mainContent