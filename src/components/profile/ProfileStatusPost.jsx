//icons
import { TbMoodSmile } from "react-icons/tb";
import { IoIosLink } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { GoShareAndroid } from "react-icons/go";

//import assets
import Avatar from '../../assets/Avatar.png'

//stylefile
import './ProfileStatusPost.scss'

const ProfileStatusPost = () => {
    return (
        <div className="profileStatusPost">
            <div className='profileStatusPostHeader'>
                <div className="profilePic">
                <img src={Avatar} alt="" />
                </div>
                <div className="user">
                <p className="username">Angela Lee</p>
                <p className="postDate">56 mins ago</p>
                </div>
            </div>
            <div className='profileStatusPostTextContent'>
                <p style={{color:'#64748B'}}>Here are some photography works that I made on the weekend with some of my friends, happy for that!</p>
            </div>
            <div className='profileStatusPostImageContent'>
                2 fetched pics
            </div>
            <div className='profileStatusPostInteraction'>
                {/* //color #94A3B8 */}
                <div className="like"><FaHeart /> 2.6K Likes</div>
                <div className="comment"><AiOutlineMessage/> 297 Comments</div>
                <div className="share"><GoShareAndroid/> 201 Share</div>
            </div>
            <div className='profileStatusPostComment'>
                <input 
                    type="text" 
                    placeholder='Write your message...' />
                <div className="btnIcons">
                    <TbMoodSmile />
                    <IoIosLink />
                </div>
            </div>
        </div>
    )
}
export default ProfileStatusPost;