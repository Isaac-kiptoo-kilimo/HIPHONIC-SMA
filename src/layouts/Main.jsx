//Styling file
import './Main.scss'

// import pages
import Profile from '../pages/profile/Profile';

const mainContent = () => {
    return (
      <div className="mainPageContent">
        <Profile />
      </div>
    );
}

export default mainContent