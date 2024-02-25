//Styling file
import './Main.scss'

// import pages
import Profile from '../pages/profile/Profile';
import Timeline from '../pages/timeline/Timeline';
import Videos from '../pages/videos/Videos';

const mainContent = () => {
    return (
      <div className="mainPageContent">
        <Profile />
        <Timeline />
        <Videos />

      </div>
    );
}

export default mainContent