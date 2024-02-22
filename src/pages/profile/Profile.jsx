// import stylefile
import './Profile.scss'

//import components
import CompleProfile from '../../components/profile/CompleteProfile'
import ProfileIntro from '../../components/profile/ProfileIntro'
import ProfilePhotos from '../../components/profile/ProfilePhotos'
import ProfileStatusInput from '../../components/profile/ProfileStatusInput'
import ProfileStatusPost from '../../components/profile/ProfileStatusPost'

const Profile = () => {
    return (
      <div className="profileContainer">
        <div className="ProfileContentTop">
          This is the top section of the profile. To be worked on by Isaac
        </div>
        <div className="ProfileContentBottom">
          <div className="ProfileContentBottomLeft">
            <div className="completeProfile">
              <CompleProfile />
            </div>
            <div className="intro">
              <ProfileIntro />
            </div>
            <div className="photos">
              <ProfilePhotos />
            </div>
          </div>
          <div className="ProfileContentBottomRight">
            <div className="statusInput">
              <ProfileStatusInput />
            </div>
            <div className="statusPost">
              <ProfileStatusPost />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Profile;