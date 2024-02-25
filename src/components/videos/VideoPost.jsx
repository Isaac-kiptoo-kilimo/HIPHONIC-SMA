//import stylefile
import './VideoPost.scss'

//import stylefile
import { HiPlay } from "react-icons/hi2";

// /import assets
import Play from '../../assets/Play.png'

export const VideoPost = () => {
    return (
    <div className="videoPost">
        <div className="videoPreview">
        <button className='playButton'>
            <img src={Play} alt="" />
        </button>
        </div>
        <div className="videoPreviewInteractions">
            <div>Category</div>
            <div>Likes</div>
        </div>
        <div className="videoPostButton"><button>See all</button></div>
    </div>
    )
}