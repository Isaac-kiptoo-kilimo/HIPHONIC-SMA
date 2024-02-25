//import stylefile
import './Timeline.scss'

// import components
import Updates from '../../components/timeline/Updates.jsx'
import PostContent from '../../components/profile/ProfileStatusPost.jsx'
import Addupdate from '../../components/profile/ProfileStatusInput.jsx'

const Timeline =() => {
    return (
    <div className="Timeline">
        <div className="TimelineTop">
            <div className="TimelineHeader">
                <span>Your Timeline</span>
            </div>
            <div className="TimelineList">
                <Updates />
            </div>
        </div>
        <div className="Addupdate">
            <Addupdate />
        </div>
        <div className="PostContent">
            <PostContent />
        </div>
    </div>
    )
}
export default Timeline;