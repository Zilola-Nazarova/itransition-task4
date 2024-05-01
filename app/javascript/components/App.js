import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { setToken, clearToken } from '../redux/auth/authenticationSlice';
import ProtectedLayout from './ProtectedLayout';
import SignIn from './SignIn';
import SignUp from './SignUp';
import NoPage from './NoPage';
import Layout from './Layout';

const App = () => {
  const dispatch = useDispatch();
  const token = Cookies.get('token');
  const username = Cookies.get('username');
  if (token) {
    dispatch(setToken({ username, token }));
  } else {
    dispatch(clearToken());
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="/" element={<ProtectedLayout />} />
      </Route>
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default App;
