import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, blockUsers, unblockUsers, deleteUsers } from '../redux/users/usersSlice';
import getIDs from '../helpers/helpers';

const Buttons = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((store) => store.users);

  const remove = () => {
    dispatch(deleteUsers({'users': {'ids': getIDs(users)}}));
    dispatch(getUsers());
  };
  const block = () => {
    dispatch(blockUsers({'users': {'ids': getIDs(users)}}));
    dispatch(getUsers());
  };
  const unblock = () => {
    dispatch(unblockUsers({'users': {'ids': getIDs(users)}}));
    dispatch(getUsers());
  };
  return (
    <>
      <button type="button" class="btn btn-primary m-1" data-toggle="tooltip" data-placement="top" title="Block users" onClick={() => { block(); }}>
        <i class="bi bi-lock"></i>Block
      </button>
      <button type="button" class="btn btn-primary m-1" data-toggle="tooltip" data-placement="top" title="Unblock users" onClick={() => { unblock(); }}>
        <i class="bi bi-unlock"></i>
      </button>
      <button type="button" class="btn btn-primary m-1" data-toggle="tooltip" data-placement="top" title="Delete users" onClick={() => { remove() }}>
        <i class="bi bi-trash"></i>
      </button>
    </>
  );
}

export default Buttons;
