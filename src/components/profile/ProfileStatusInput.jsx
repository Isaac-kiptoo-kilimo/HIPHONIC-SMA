//import icons
import { FaUser as User } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { IoImageOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";

//import assets
import Avatar from "../../assets/Avatar.png"

//stylefile
import './ProfileStatusInput.scss'

const ProfileStatusInput = () => {
    return (
        <div className="ProfileStatusInput">
            <div className='ProfileStatusInputTopContainer'>
                <div className="ProfileStatusInputTop">
                    <div className="profilePic"><img src= {Avatar} alt= { User } /></div>
                    <div className="publicContainer"><CiGlobe /> <p>Public</p> <FaChevronDown /></div>
                </div>
                <input className="statusInputArea" type="text" placeholder="What's on your mind?" />
            </div>
            <div className='ProfileStatusInputBottom'>
                <div><AiOutlineYoutube /> Live Video</div>
                <div> <IoImageOutline /> Image/Video</div>
                <div><FaRegStar/> Activity</div>
            </div>
        </div>
    )
}
export default ProfileStatusInput;