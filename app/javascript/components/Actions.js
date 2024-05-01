import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUsers,
  blockUsers,
  unblockUsers,
  deleteUsers,
} from '../redux/users/usersSlice';
import { generateData } from '../helpers/helpers';
import Action from './Action';

const Actions = ({ onAction }) => {
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
    <div className="d-sm-flex pb-2">
      <Action onClick={(e) => handleAction(blockUsers, e)} color="light">
        <i className="bi bi-lock" />
        Block
      </Action>
      <Action onClick={(e) => handleAction(unblockUsers, e)} color="light">
        <i className="bi bi-unlock" />
      </Action>
      <Action onClick={(e) => handleAction(deleteUsers, e)} color="danger">
        <i className="bi bi-trash" />
      </Action>
    </div>
  );
};

Actions.propTypes = {
  onAction: PropTypes.func.isRequired,
};

export default Actions;
