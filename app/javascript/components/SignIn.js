import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signin } from '../redux/auth/authenticationSlice';
import Button from './Button';
import Form from 'react-bootstrap/Form';

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formRef = useRef();
  const [authMessage, setAuthMessage] = useState('');
  const [validated, setValidated] = useState(false);
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
      setAuthMessage(message);
      navigate("/");
    } else if (isLoading) {
      setAuthMessage("pending");
    } else if (error) {
      setAuthMessage(error);
    }
  }, [status]);
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
        <label htmlFor="email">Email: </label>
        <Form.Control name="email" type="email" id="email" placeholder="name@example.com" required/>
        <Form.Control.Feedback type="invalid">
          Please enter a valid email.
        </Form.Control.Feedback>
        <label htmlFor="password">Password: </label>
        <Form.Control type="password" name="password" id="password" required/>
        <Form.Control.Feedback type="invalid">
          Please enter a password.
        </Form.Control.Feedback>
        <button
          class="btn btn-primary px-3 mt-4"
          type="submit"
        >
          Sign In
        </button>
        <p class="text-danger">{authMessage}</p>
      </Form>
      <p class="m-1">Don't have an account yet?</p>
      <Button link="/signup" style="secondary">Sign Up</Button>
    </div>
  );
}

export default SignIn;
