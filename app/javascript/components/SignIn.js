import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { setToken, signin } from '../redux/auth/authenticationSlice';
import Button from './Button';

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formRef = useRef();
  const [authMessage, setAuthMessage] = useState('');
  const status = useSelector((store) => store.auth);
  const { isLoading, error, user, message } = status;
  const sendForm = async (e) => {
    'use server'
    e.preventDefault();
    const user = {
      "user": {
        "email": formRef.current[0]['value'],
        "password": formRef.current[1]['value'],
      },
    };
    formRef.current.reset();
    await dispatch(signin(user));
  };
  useEffect(() => {
    if (user && user.token) {
      setAuthMessage(message);
      navigate("/");
    } else if (isLoading) {
      setAuthMessage("pending");
    } else if (error) {
      setAuthMessage(error);
    }
  }, [status]);

  return (
    <div>
      <h1>Sign In</h1>
      <form
        class="mx-auto my-4 w-75 py-3 px-5 bg-dark text-light border border-secondary rounded-4 d-grid gap-1"
        onSubmit={(e) => sendForm(e)}
        ref={formRef}
        id="signin-form"
      >
        <label htmlFor="email">Email: </label>
        <input name="email" id="email" placeholder="name@example.com" />
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password"/>
        <button
          class="btn btn-primary px-3 mt-4"
          type="submit"
        >
          Sign In
        </button>
        <p>{authMessage}</p>
      </form>
      <p class="m-1">Don't have an account yet?</p>
      <Button link="/signup" style="secondary">Sign Up</Button>
    </div>
  );
}

export default SignIn;
