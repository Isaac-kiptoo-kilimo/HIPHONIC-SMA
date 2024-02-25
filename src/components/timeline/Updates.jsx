//stylefile
import './Updates.scss'

//import assets
import Avatar from '../../assets/Avatar.png'

const Updates = () => {
    return (
    <div className='UpdatesContainer'>
    <div className="myUpdate">
        <div className="updateUrofilePic"><img src={Avatar} alt="" /></div>
        <div className="updateUserName">You</div>
    </div>
    <div className="friendsUpdates">
        <div className="updateUrofilePic"> <img src={Avatar} alt="" /> </div>
        <div className="updateUserName">anglee</div>
    </div>
    </div>
    )
}
export default Updates;