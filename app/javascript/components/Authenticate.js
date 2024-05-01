import React from 'react';
import Button from './Button';

const Authenticate = () => (
  <>
    <h2>You are not authenticated</h2>
    <p>Please, sign up or sign in to access the users data.</p>
    <Button link="/signin" color="primary">Sign In</Button>
    <Button link="/signup" color="primary">Sign Up</Button>
  </>
);

export default Authenticate;
