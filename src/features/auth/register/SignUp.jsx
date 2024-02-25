// SignUp.jsx
import React, { useEffect, useState } from 'react';
import './SignUp.scss';
import { useFormAction, useNavigate } from "react-router-dom";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import SocialMedia1 from '../../../assets/social-media1.jpg';
import { useForm } from "react-hook-form";
import SocialMedia2 from '../../../assets/social-media2.jpg'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiPasswordFill } from "react-icons/pi";
import { RiLockPasswordLine } from "react-icons/ri";

const SignUp = () => {
     
  const [navToLogin, setNavToLogin] = useState('/register');
  const [mockUsersData, setMockUsersData] = useState({ users: [] });

  const navigate=useNavigate()

  const schema = yup.object().shape({
    Username: yup.string().required("Username is required"),
    email: yup.string().email().required("Email is required"),
    password: yup
      .string()
      .required("password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/,
        "Must Contain 4 Chars, 1 Uppercase, 1 Lowercase, 1 Number & 1 special Char"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);

  const loginNavigation = () => {
    setNavToLogin(navToLogin);
    navigate("/");
  };

  useEffect(() => {
    const allUsers = JSON.parse(localStorage.getItem('allUsers')) || [];
    console.log("testing existing users",allUsers);
    setMockUsersData({ users: allUsers });
    console.log('Existing users:', allUsers);
  }, []);


   const RegisterUser = (data) => {
    const newUserId = mockUsersData.users.length + 1;

    const newUser = {
      id: newUserId,
      Username: data.Username,
      email: data.email,
      password: data.password,
    };

    setMockUsersData(prevState => ({ users: [...prevState.users, newUser] }));

    localStorage.setItem('allUsers', JSON.stringify([...mockUsersData.users, newUser]));

    setTimeout(() => {
      console.log("User registered:", newUser);
      navigate("/");
    }, 1000);
  };
  return (
    <div className='container'>
      <div className="row">
        <div className="col align-items-center flex-col sign-up">
          <div className="form-wrapper align-items-center">
            <form className="form sign-up" onSubmit={handleSubmit(RegisterUser)}>
              <div className="input-group">
              
                <div className='bx bxs-user'><FaUser /></div>
                <input type="text"  {...register("Username")} placeholder="Username" />
                <p>{errors.Username?.message}</p>
              </div>
              <div className="input-group">
              <div className='bx bxs-user'><MdEmail /></div>
                <input type="email"  {...register("email")} placeholder="Email" />
                <p>{errors.email?.message}</p>
              </div>
              <div className="input-group">
              <div className='bx bxs-user'><RiLockPasswordLine /></div>
                <input type="password"  {...register("password")} placeholder="Password" />
                <p>{errors.password?.message}</p>
              </div>
              <div className="input-group">
              <div className='bx bxs-user'><PiPasswordFill /></div>
                <input type="password"  {...register("password")} placeholder="Confirm password" />
                <p>{errors.password?.message}</p>
              </div>
              <button type='submit'>
                Sign up
              </button>
              <p>
                <span >
                  
                  Already have an account?
                </span>
                <b onClick={loginNavigation} className="pointer">
                  Sign in here
                </b>
              </p>
            </form>
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
