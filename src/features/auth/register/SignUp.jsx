// SignUp.jsx
import React from 'react';
import './SignUp.scss';
import SocialMedia1 from '../../../assets/social-media1.jpg'
import SocialMedia2 from '../../../assets/social-media2.jpg'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiPasswordFill } from "react-icons/pi";
import { RiLockPasswordLine } from "react-icons/ri";

const SignUp = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col align-items-center flex-col sign-up">
          <div className="form-wrapper align-items-center">
            <div className="form sign-up">
              <div className="input-group">
              
                <div className='bx bxs-user'><FaUser /></div>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-group">
              <div className='bx bxs-user'><MdEmail /></div>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-group">
              <div className='bx bxs-user'><RiLockPasswordLine /></div>
                <input type="password" placeholder="Password" />
              </div>
              <div className="input-group">
              <div className='bx bxs-user'><PiPasswordFill /></div>
                <input type="password" placeholder="Confirm password" />
              </div>
              <button>
                Sign up
              </button>
              <p>
                <span>
                  Already have an account?
                </span>
                <b className="pointer">
                  Sign in here
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row content-row">
        <div className="col align-items-center flex-col">
          <div className="img sign-up">
            <img src={SocialMedia1} alt="" />
            {/* <img src={SocialMedia2} alt="" /> */}
          </div>
          <div className="text sign-up">
            <h2>
              Join with us
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
