import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signup } from '../redux/auth/authenticationSlice';
import Button from './Button';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formRef = useRef();
  const [authMessage, setAuthMessage] = useState('');
  const status = useSelector((store) => store.auth);
  const { isLoading, error, message } = status;
  const sendForm = async (e) => {
    'use server'
    e.preventDefault();
    const user = {
      "user": {
        "name": formRef.current[0]['value'],
        "email": formRef.current[1]['value'],
        "password": formRef.current[2]['value'],
      },
    };
    formRef.current.reset();
    await dispatch(signup(user));
  };
  useEffect(() => {
    if (message) {
      setAuthMessage(message);
      navigate("/auth/signin");
    } else if (isLoading) {
      setAuthMessage("pending");
    } else if (error) {
      setAuthMessage(error);
    }   
  }, [status]);

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={(e) => sendForm(e)} ref={formRef} id="signin-form">
        <label htmlFor="name">Name: </label>
        <input name="name" id="name" placeholder="John Doe" />
        <label htmlFor="email">Email: </label>
        <input name="email" id="email" placeholder="name@example.com" />
        <label htmlFor="password">Password: </label>
        <input name="password" id="password" value="" />
        <button type="submit" disabled={isLoading}>Sign Up</button>
        <p>{authMessage}</p>
      </form>
      <p>Already signed up?</p>
      <Button link="/signin">Sign In</Button>
    </div>
  );
}

export default SignUp;