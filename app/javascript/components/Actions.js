import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, blockUsers, unblockUsers, deleteUsers } from '../redux/users/usersSlice';
import { generateData } from '../helpers/helpers';

const Actions = ({onAction}) => {
  const dispatch = useDispatch();
  const { users } = useSelector((store) => store.users);
  const { user } = useSelector((state) => state.auth);

  const remove = async (e) => {
    e.preventDefault();
    const data = generateData(users, user.token);
    await dispatch(deleteUsers(data));
    dispatch(getUsers(user.token));
    onAction();
  };
  const block = async (e) => {
    e.preventDefault();
    const data = generateData(users, user.token);
    await dispatch(blockUsers(data));
    dispatch(getUsers(user.token));
    onAction();
  };
  const unblock = async (e) => {
    e.preventDefault();
    const data = generateData(users, user.token);
    await dispatch(unblockUsers(data));
    dispatch(getUsers(user.token));
    onAction();
  };

  return (
    <div class="d-sm-flex">
      <button type="button" class="btn btn-primary m-1" data-toggle="tooltip" data-placement="top" title="Block users" onClick={(e) => { block(e); }}>
        <i class="bi bi-lock"></i>Block
      </button>
      <button type="button" class="btn btn-primary m-1" data-toggle="tooltip" data-placement="top" title="Unblock users" onClick={(e) => { unblock(e); }}>
        <i class="bi bi-unlock"></i>
      </button>
      <button type="button" class="btn btn-primary m-1" data-toggle="tooltip" data-placement="top" title="Delete users" onClick={(e) => { remove(e) }}>
        <i class="bi bi-trash"></i>
      </button>
    </div>
  );
}

export default Actions;
