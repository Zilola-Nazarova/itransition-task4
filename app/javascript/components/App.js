import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedLayout from './ProtectedLayout';
import SignIn from './SignIn';
import SignUp from './SignUp';
import NoPage from './NoPage';
import Layout from './Layout';

const App = () => {
  return(
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="/" element={<ProtectedLayout />} />
      </Route>
      <Route path="*" element={<NoPage />} />
    </Routes>
  )
};

export default App;
