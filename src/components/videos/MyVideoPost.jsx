//import stylefile
import './MyVideoPost.scss'

//import components
import User from '../profile/userInfocard'

//import icons
import { HiDotsHorizontal } from "react-icons/hi";

//import assets
import Play from '../../assets/Play.png'

const Video = () => {
    return (
        <div className='myVideo'>
            <div className='videosBottomProfile'>
                <div><User /></div>
                <div style={{color:"#94A3B8"}}><HiDotsHorizontal /></div>
            </div>
            <div className='videosBottomtext'>
                <p>The HAPPINESS you get when you serve your food to family members and their smile and your satisfaction is beyond. Do some experiment, feel the energy, share the happiness, fulfill your urge and finally relieve your stress.</p>
            </div>
            <div className='videosBottomPreview'>
                <img src={Play} alt="" />
            </div>
        </div>
    )
}

export default Video;