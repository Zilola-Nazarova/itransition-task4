import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers, select } from '../redux/users/usersSlice';

const TableData = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector((store) => store.users);
  useEffect(() => {
    dispatch(getUsers(user.token))
  }, [dispatch, user.token]);

  return(
    <>
      { isLoading && <tr><td colspan="6">Loading......</td></tr> }
      { error
        && <tr>
          <td colspan="6">
            Something went wrong!
            <br />
            { error }
          </td>
        </tr>
      }
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
                onChange={() => dispatch(select(user.id)) }
              />
            </td>
            <td>
              <label class="form-check-label" for={user.id}>{ i + 1 }</label>
            </td>
            <td>{ user.id }</td>
            <td>{ user.name}</td>
            <td>{ user.blocked ? 'blocked' : 'active' }</td>
            <td>{ user.last_sign_in_at }</td>
          </tr>
        ))
      }
    </>   
  )
}

export default TableData;
