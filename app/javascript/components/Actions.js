import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, blockUsers, unblockUsers, deleteUsers } from '../redux/users/usersSlice';
import { generateData } from '../helpers/helpers';
import Action from './Action';

const Actions = ({onAction}) => {
  const dispatch = useDispatch();
  const { users } = useSelector((store) => store.users);
  const { user } = useSelector((state) => state.auth);
  const handleAction = async (actionFunction, e) => {
    e.preventDefault();
    const data = generateData(users, user.token);
    await dispatch(actionFunction(data));
    dispatch(getUsers(user.token));
    onAction();
  };

  return (
    <div class="d-sm-flex">
      <Action onClick={(e) => handleAction(blockUsers, e)}>
        <i class="bi bi-lock"></i>Block
      </Action>
      <Action onClick={(e) => handleAction(unblockUsers, e)}>
        <i class="bi bi-unlock"></i>
      </Action>
      <Action onClick={(e) => handleAction(deleteUsers, e)}>
        <i class="bi bi-trash"></i>
      </Action>
    </div>
  );
}

export default Actions;
