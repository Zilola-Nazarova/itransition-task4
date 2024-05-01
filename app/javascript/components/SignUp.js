import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signup } from '../redux/auth/authenticationSlice';
import Button from './Button';
import Form from 'react-bootstrap/Form';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formRef = useRef();
  const [authMessage, setAuthMessage] = useState('');
  const [validated, setValidated] = useState(false);
  const status = useSelector((store) => store.auth);
  const { isLoading, error, message } = status;
  const sendForm = async (e) => {
    'use server'
    e.preventDefault();
    const user = {
      "user": {
        "name": formRef.current[0]['value'],
        "email": formRef.current[1]['value'],
        "password": formRef.current[2]['value'],
      },
    };
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
      formRef.current.reset();
      setValidated(false);
      await dispatch(signup(user));
    }
  };
  useEffect(() => {
    if (message) {
      setAuthMessage(message);
      navigate("/signin");
    } else if (isLoading) {
      setAuthMessage("pending");
    } else if (error) {
      setAuthMessage(error[0]);
    }   
  }, [status]);
  useEffect(() => {
    setAuthMessage('');
  }, []);

  return (
    <div>
      <h1>Sign Up</h1>
      <Form
        noValidate
        validated={validated}
        className="mx-auto my-4 w-75 py-3 px-5 bg-dark text-light border border-secondary rounded-4 d-grid gap-1"
        onSubmit={(e) => sendForm(e)}
        ref={formRef}
        id="signin-form"
      >
        <label htmlFor="name">Name: </label>
        <Form.Control name="name" id="name" placeholder="John Doe" required />
        <Form.Control.Feedback type="invalid">
          Please enter a username.
        </Form.Control.Feedback>
        <label htmlFor="email">Email: </label>
        <Form.Control name="email" id="email" type="email" placeholder="name@example.com" required />
        <Form.Control.Feedback type="invalid">
          Please enter a valid email.
        </Form.Control.Feedback>
        <label htmlFor="password">Password: </label>
        <Form.Control type="password" name="password" id="password" required/>
        <Form.Control.Feedback type="invalid">
          Please create a password.
        </Form.Control.Feedback>
        <button
          class="btn btn-primary px-3 mt-4"
          type="submit"
          disabled={isLoading}
        >
          Sign Up
        </button>
        <p className="text-danger">{authMessage}</p>
      </Form>
      <p class="m-1">Already signed up?</p>
      <Button link="/signin" style="secondary">Sign In</Button>
    </div>
  );
}

export default SignUp;
