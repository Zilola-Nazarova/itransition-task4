import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers, select } from '../redux/users/usersSlice';

const TableData = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector((store) => store.users);
  useEffect(() => {
    dispatch(getUsers(user.token));
  }, [dispatch, user.token]);

  return (
    <>
      { isLoading && <tr><td colSpan="6">Loading......</td></tr> }
      { error
        && (
        <tr>
          <td colSpan="6">
            Something went wrong!
            <br />
            { error }
          </td>
        </tr>
        )}
      { users
      && users.map((user) => (
        <tr key={user.id}>
          <th scope="row">
            <input
              className="checkbox"
              aria-label="Select/Unselect user"
              type="checkbox"
              id={user.id}
              name={user.id}
              checked={user.checked}
              onChange={() => dispatch(select(user.id))}
            />
          </th>
          <td>{ user.id }</td>
          <td>{ user.name}</td>
          <td>{ user.email}</td>
          <td>{ new Date(user.created_at).toDateString() }</td>
          <td>{ user.last_sign_in ? new Date(user.last_sign_in).toDateString() : 'N/A' }</td>
          <td className={user.blocked ? "danger" : ""}>{ user.blocked ? 'blocked' : 'active' }</td>
        </tr>
      ))}
    </>
  );
};

export default TableData;
