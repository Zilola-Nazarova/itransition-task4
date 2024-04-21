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

  return (
    <>
      { isLoading && <div>Loading......</div> }
      { message && <Table users={message} /> }
      { error
        && (
          <p>
            Something went wrong!
            <br />
            { error }
          </p>
        )}
    </>
  );
};

export default Users;
