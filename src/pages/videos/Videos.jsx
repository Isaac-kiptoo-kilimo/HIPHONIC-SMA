//import stylefile
import './Videos.scss'

//import components
import { VideoPost } from "../../components/videos/VideoPost";
import MyVideo from "../../components/videos/MyVideoPost"

//import icons
import { CiSearch } from "react-icons/ci";

const Videos = () => {
    return (
    <div className="Videos">
        <div className="videosTop">
            <div className="videosTopHeader">
                <div style={{fontWeight:"700"}}>Video</div>
                <div><CiSearch /></div>
            </div>
            <div className="videosTopContent">
                <div className="videosTopContentheader">
                    <div>Categories to explore</div>
                    <div style={{color:"#2563EB"}}>See all</div>
                </div>
                <div className="videosTopContentCards">
                    <VideoPost />
                </div>
            </div>
        </div>
        <div className="videosBottom">
            <MyVideo />
        </div>
    </div>
    )
}
export default Videos;