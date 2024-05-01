import React from 'react';
import Button from './Button';

const Authenticate = () => {
  return(
      <>
        <h2>You are not authenticated</h2>
        <p>Please, sign up or sign in to access the users data.</p>
        <Button link="/signin" style="primary">Sign In</Button>
        <Button link="/signup" style="primary">Sign Up</Button>
      </>
  )
};

export default Authenticate;
