//import stylefile
import './VideoPost.scss'

//import stylefile
import { HiPlay } from "react-icons/hi2";

// /import assets
import Play from '../../assets/Play.png'

export const VideoPost = () => {
    return (
    <div className='videoPostContainer'>
    <div className="videoPost">
        <div className="videoPreview">
        <video style={{borderRadius:"16px"}} height="100px" width="100%" controls autoPlay>
            <source src="https://www.shutterstock.com/shutterstock/videos/1076924570/preview/stock-footage-human-circulatory-system-heart-anatomy-animation-concept-d.webm"/>
        </video>
        </div>
        <div className="videoPreviewInteractions">
            <div>Category: My videos</div>
            <div>Likes</div>
        </div>
        <div className="videoPostButton">
            <button>See all</button>
        </div>
    </div>
    <div className='allCategoriesVideos'>Mout the videos in the cartegory here</div>
    </div>
    )
}

export default VideoPost;