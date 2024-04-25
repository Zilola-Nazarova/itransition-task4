import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Link } from "react-router-dom";
import SignOut from './SignOut';

const Layout = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <nav class="bg-dark px-5 py-1">
        <ul class="d-flex m-0">
          { user && user.isAuthenticated
            ?
            <li>
              <SignOut /> 
            </li>
            :
            <>
              <li>
                <Link class="btn btn-primary m-1 text-light" to="/signin">Sign in</Link>
              </li>
              <li>
                <Link class="btn btn-primary m-1 text-light" to="/signup">Sign up</Link>
              </li>
            </>
          }
        </ul>
      </nav>
      <div id="wrapper" class="bg-dark text-light border-top p-5 text-center">
        <Outlet />
      </div> 
    </>
  );
};

export default Layout;
