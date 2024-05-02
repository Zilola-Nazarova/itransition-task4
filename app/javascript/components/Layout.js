import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SignOut from './SignOut';

const Layout = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <Navbar sticky="top" expand="lg" className="bg-dark px-5 border-bottom border-secondary">
        <Container fluid className="px-0">
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto my-2 my-lg-0">
              { user && user.isAuthenticated
                ? <SignOut />
                : (
                  <>
                    <Link class="btn btn-primary m-1 text-light" to="/signin">Sign in</Link>
                    <Link class="btn btn-primary m-1 text-light" to="/signup">Sign up</Link>
                  </>
                )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div id="wrapper" className="bg-light p-5 text-center">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
