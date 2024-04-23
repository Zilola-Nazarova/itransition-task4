import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers, select } from '../redux/users/usersSlice';

const TableData = () => {
  const { users, isLoading, error } = useSelector((store) => store.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return(
    <>
      { isLoading && <div>Loading......</div> }
      { error
        && (
          <p>
            Something went wrong!
            <br />
            { error }
          </p>
        )}
        { users
        && users.map((user, i) => (
            <tr key={user.id}>
              <td class="">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id={user.id}
                  name={user.id}
                  checked={user.checked}
                  value={user.id}
                  onChange={() => dispatch(select(user.id)) }
                />
              </td>
              <td>
                <label class="form-check-label" for={user.id}>
                  { i + 1 }
                </label>
              </td>
              <td>{ user.id }</td>
              <td>{ user.name}</td>
              <td>{ user.blocked ? 'blocked' : 'active' }</td>
              <td>{ user.last_login }</td>
            </tr>
          ))
        }
    </>   
  )
}

export default TableData;
