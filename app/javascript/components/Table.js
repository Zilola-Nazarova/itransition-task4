import React from 'react';
import { useDispatch } from 'react-redux';
import { getUsers } from '../redux/users/usersSlice';
import { deleteUsers } from '../redux/users/usersSlice';
import { updateUsers } from '../redux/users/usersSlice';

const Table = ({ users }) => {
  const dispatch = useDispatch();
  const deleteUser = async (id) => {
    await dispatch(deleteUsers(id));
    dispatch(getUsers());
  }
  const toggleStatus = async (id) => {
    await dispatch(updateUsers(id));
    dispatch(getUsers());
  }

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>ID</th>
          <th>Name</th>
          <th>Status</th>
          <th>Last seen:</th>
        </tr>
      </thead>
      <tbody>
        { users.map((user, i) => (
          <tr key={user.id}>
            <td>{ i }</td>
            <td>{ user.id }</td>
            <td>{ user.name }</td>
            <td>{ user.blocked ? 'blocked' : 'active' }</td>
            <td>{ user.last_login }</td>
            <td>
              <button type="button" onClick={() => {deleteUser(user.id)}}>
                Delete
              </button>
              <button type="button" onClick={() => {toggleStatus(user.id)}}>
                { user.blocked ? 'Unblock' : 'Block' }
              </button>
            </td>
          </tr>
        )) }
      </tbody>
    </table>
  );
};

export default Table;
