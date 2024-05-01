import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { signin } from '../redux/auth/authenticationSlice';
import Button from './Button';

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formRef = useRef();
  const [authMessage, setAuthMessage] = useState('');
  const [validated, setValidated] = useState(false);
  const {
    isLoading,
    error,
    user,
    message,
  } = useSelector((store) => store.auth);
  const sendForm = async (e) => {
    'use server';

    e.preventDefault();
    const user = {
      user: {
        email: formRef.current[0].value,
        password: formRef.current[1].value,
      },
    };
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
      formRef.current.reset();
      setValidated(false);
      await dispatch(signin(user));
    }
  };
  useEffect(() => {
    if (user && user.token) {
      setAuthMessage(<p className="text-success">{message}</p>);
      navigate('/');
    } else if (isLoading) {
      setAuthMessage(<p>Signing in ...</p>);
    } else if (error) {
      setAuthMessage(<p className="text-danger">{error}</p>);
    }
  }, [isLoading, error, user, message, navigate]);
  useEffect(() => {
    setAuthMessage('');
  }, []);

  return (
    <div>
      <h1>Sign In</h1>
      <Form
        noValidate
        validated={validated}
        className="mx-auto my-4 w-75 py-3 px-5 bg-dark text-light border border-secondary rounded-4 d-grid gap-1"
        onSubmit={(e) => sendForm(e)}
        ref={formRef}
        id="signin-form"
      >
        <Form.Label htmlFor="email">Email: </Form.Label>
        <Form.Control name="email" type="email" id="email" placeholder="name@example.com" required />
        <Form.Control.Feedback type="invalid">
          Please enter a valid email.
        </Form.Control.Feedback>
        <Form.Label htmlFor="password">Password: </Form.Label>
        <Form.Control type="password" name="password" id="password" required />
        <Form.Control.Feedback type="invalid">
          Please enter a password.
        </Form.Control.Feedback>
        <button
          className="btn btn-primary px-3 mt-4"
          type="submit"
        >
          Sign In
        </button>
        {authMessage}
      </Form>
      <p className="m-1">Don&apos;t have an account yet?</p>
      <Button link="/signup" color="secondary">Sign Up</Button>
    </div>
  );
};

export default SignIn;
