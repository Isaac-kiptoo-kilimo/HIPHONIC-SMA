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
import { useAuthenticateUserMutation } from '../userApi';

const Login = () => {
  const schema = yup.object().shape({
    Email: yup.string().email().required('Email is required'),
    Password: yup
      .string()
      .required('Password is required')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/,
        'Must Contain 4 Chars, 1 Uppercase, 1 Lowercase, 1 Number & 1 special Char'
      ),
  });

  const navigate = useNavigate();
  const [storedUser, setStoredUser] = useState([]);
  const [loginError, setLoginError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState('');
  const [authenticateUser]=useAuthenticateUserMutation()
  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem('userDetails')) || [];
    setStoredUser(userDetails);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const loginUser = async(data) => {
    await authenticateUser({
      Email: data.Email,
      Password: data.Password
    });


    if (authenticateUser) {
      console.log('User logged in:', authenticateUser);

      localStorage.setItem('loggedInUser', JSON.stringify(authenticateUser));

      
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
            
            <form className="form sign-in" onSubmit={handleSubmit(loginUser)}>
            <h2>Sign In</h2>
            <div className="input-group">
              <div className='bx bxs-user'><MdEmail /></div>
                <input type="email" id='Email' name='Email' {...register('Email')} placeholder="Email" />
                <p>{errors.Email?.message}</p>
              </div>
              <div className="input-group">
              <div className='bx bxs-user'><RiLockPasswordLine /></div>
                <input type="password" id='Password' name='Password' {...register('Password')} placeholder="Password" />
                <p>{errors.Password?.message}</p>
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
