// Login.jsx
import React from 'react';
// import './Login.scss';

const Login = () => {
  return (
    <div>
      <div className="row">
        <div className="col align-items-center flex-col ">
          <div className="form-wrapper align-items-center">
            <div className="form sign-in">
              <div className="input-group">
                <i className='bx bxs-user'></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-group">
                <i className='bx bxs-lock-alt'></i>
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
            </div>
          </div>
          <div className="form-wrapper">

          </div>
        </div>
      </div>
      <div className="row content-row">
        <div className="col align-items-center flex-col">
          <div className="text sign-in">
            <h2>
              Welcome
            </h2>
          </div>
          <div className="img sign-in">

          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
