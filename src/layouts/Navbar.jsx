import LogoIcon from '../assets/logo.png';
import Responsive from '../assets/responsive.png';
import ActiveNotification from '../assets/active-notification.png';
import Profile from '../assets/Avatar1.png';
import Chevron from '../assets/chevron-down.png';
import Message from '../assets/message-circle.png';
import SearchForm from '../components/shared/SearchForm';
import NavIcon from '../components/NavIcon';
import './Navbar.scss'

const Navbar = () => {
    return (
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
                        <NavIcon url={ActiveNotification} />
                        <img className="profile" width={80} src={Profile} alt="profile" />
                        <NavIcon url={Chevron} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
