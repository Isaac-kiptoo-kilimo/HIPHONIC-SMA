import LogoIcon from '../assets/logo.png';
import Responsive from '../assets/responsive.png';
import ActiveNotification from '../assets/active-notification.png';
import Profile from '../assets/Avatar1.png';
import Chevron from '../assets/chevron-down.png';
import Message from '../assets/message-circle.png';
import SearchForm from '../components/shared/SearchForm';
import NavIcon from '../components/NavIcon';
import './Navbar.scss'
import Dropdown from '../components/navbar/DropDown';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaChevronDown } from "react-icons/fa6";
import Notification from '../components/Notification/Notification';

const Navbar = () => {
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState({});
  
    useEffect(() => {
      const storedUserDetails = JSON.parse(localStorage.getItem('loggedInUser'));
      setUserDetails(storedUserDetails);
      console.log(storedUserDetails.user.Username);
  
      if (!storedUserDetails || !storedUserDetails.token) {
        navigate('/login');
      }
    }, [navigate]);
    const [isLogoutVisible, setLogoutVisibility] = useState(false);
    const toggleLogout = () => {
        console.log("I am clicked");
        console.log("Correct");
        setLogoutVisibility(!isLogoutVisible);
        console.log("Toggle Logout: ", isLogoutVisible);
      };
      const [showNotifications, setShowNotifications] = useState(false);
      
      const handleNotificationsClick = () => {
        setShowNotifications(!showNotifications);
  };
    return (
        <>
        <div className="navbar">
            <div className="nav-logo">
                <img src={Responsive} alt="Responsive" />
                <img id='logo' src={LogoIcon} alt="LogoIcon" />
            </div>
            <div className="right-nav">
                <div className="nav-input">
                    <SearchForm />
                </div>
                <div>
                    <div className="nav-icons">
                        <NavIcon url={Message} />
                        <div className="notification-icon" onClick={handleNotificationsClick}>
                        <NavIcon url={ActiveNotification} />
                        {showNotifications && <Notification />}
                      </div>
                        <img className="profile"  width={80} src={userDetails.user && userDetails.user.profileImage} alt="profile" />
                        {/* <NavIcon onClick={toggleLogout} url={Chevron}  /> */}
                        <FaChevronDown onClick={toggleLogout}/>

                    </div>
                </div>
            </div>
        </div>
           {isLogoutVisible && (
            <div className="logout">
              <Dropdown />
            </div>
          )}
    
    </>
    );
};

export default Navbar;
