import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { clearToken } from '../redux/auth/authenticationSlice';

const SignOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signout = async () => {
    await dispatch(clearToken());
    Cookies.remove('token', { path: '' });
    Cookies.remove('username', { path: '' });
    navigate('/');
  };

  return (
    <button class="btn btn-primary m-1" onClick={() => signout()}>Sign Out</button>
  );
};

export default SignOut;
