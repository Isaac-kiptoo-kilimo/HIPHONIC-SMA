// Login.jsx
import React, { useEffect, useState } from 'react';
import './Login.scss';
import {  useNavigate } from "react-router-dom";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
// import SocialMedia1 from '../../../assets/social-media1.jpg';
import { useForm } from "react-hook-form";
import SocialMedia1 from '../../../assets/social-media2.jpg'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required('Email is required'),
    password: yup
      .string()
      .required('Password is required')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/,
        'Must Contain 4 Chars, 1 Uppercase, 1 Lowercase, 1 Number & 1 special Char'
      ),
  });

  const navigate = useNavigate();
  const [storedUsers, setStoredUsers] = useState([]);
  const [loginError, setLoginError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState('');

  useEffect(() => {
    const allUsers = JSON.parse(localStorage.getItem('allUsers')) || [];
    setStoredUsers(allUsers);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const loginUser = (data) => {
    const user = storedUsers.find(
      (storedUser) => storedUser.email === data.email && storedUser.password === data.password
    );

    if (user) {
      console.log('User logged in:', user);

      localStorage.setItem('loggedInUser', JSON.stringify(user));

      
      setLoginError('');
      setLoginSuccess('Logged In successfully!');

      setTimeout(() => {
        navigate('/profile');
      }, 2000);


    } else {
        setLoginSuccess('');
        setLoginError('Invalid email or password');
    }
  };
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
                <b onClick={() => navigate('/signup')} className="pointer" >
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
