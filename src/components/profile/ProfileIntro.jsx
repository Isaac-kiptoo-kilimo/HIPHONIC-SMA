// import stylefile
import './ProfileIntro.scss'

//import react icons
import { FaLocationDot } from "react-icons/fa6";
const ProfileIntro = () => {
    return (
        <div className="intro">
      <div className="Intro-top">
        <div className="intro-title">
          <p style={{ fontWeight: 600 }}>Intro</p>
        </div>
        <div className="intro-dots">
        < FaLocationDot />
        </div>
      </div>
      <div>
        <p style={{ fontWeight: "500", color: "#64748B" }}>
          I am an experienced joiner with well developed skills
        </p>
      </div>
      <div className="list">
        <div className="map-pin">
          {/* <img src={MapPin} alt="" /> */}
          <p>2972 Westheimer Rd.</p>
        </div>
        <div className="Briefcase">
          {/* <img src={Briefcase} alt="" /> */}
          <p>Binford Ltd.</p>
        </div>
        <div className="Calender">
          {/* <img src={Calender} alt="" /> */}
          <p>September 24 2017</p>
        </div>
        <div className="link">
          {/* <img src={Link} alt="" /> */}
          <p>dribble.com/Angela</p>
        </div>
      </div>
    </div>
  );
}
export default ProfileIntro;