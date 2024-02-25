// Login.jsx
import React from 'react';
import './Login.scss';
import SocialMedia1 from '../../../assets/social-media2.jpg'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const Login = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col align-items-center flex-col ">
          <div className="form-wrapper">
            
            <form className="form sign-in">
            <h2>Sign In</h2>
            <div className="input-group">
              <div className='bx bxs-user'><MdEmail /></div>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-group">
              <div className='bx bxs-user'><RiLockPasswordLine /></div>
                <input type="password" placeholder="Password" />
              </div>
              <button>
                Sign in
              </button>
              <p>
                <b>
                  Forgot password?
                </b>
              </p>
              <p>
                <span>
                  Don't have an account?
                </span>
                <b className="pointer" >
                  Sign up here
                </b>
              </p>
            </form>
          </div>
          {/* <div className="form-wrapper">

          </div> */}
        </div>
      </div>
      <div className="row content-row">
        <div className="col align-items-center flex-col">
          <div className="text-sign-in">
            <h2>
              Welcome To Hiphonic SMA
            </h2>
          </div>
          <div className="sign-in-img">
          <img src={SocialMedia1} alt="" />

          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
