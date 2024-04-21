import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../redux/users/usersSlice';
import Table from './Table';

const Users = () => {
  const { message, isLoading, error } = useSelector((store) => store.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div>Loading......</div>
    );
  }
  if (error) {
    return (
      <p>
        Something went wrong!
        <br />
        { error }
      </p>
    );
  }
  return (message && <Table users={message}/>);
};

export default Users;
