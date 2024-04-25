import React from 'react';
import { useDispatch } from 'react-redux';
import TableData from './TableData';
import { selectAll } from '../redux/users/usersSlice';

const Table = ({allSelected, onAction}) => {
  const dispatch = useDispatch();

  return(
    <table>
      <thead>
        <tr>
          <th>
            <input
              class="form-check-input"
              type="checkbox"
              id="all"
              name="all"
              checked={allSelected}
              onChange={() => {dispatch(selectAll()); onAction()}}
            />
          </th>
          <th>#</th>
          <th>ID</th>
          <th>Name</th>
          <th>Status</th>
          <th>Last seen:</th>
        </tr>
      </thead>
      <tbody>
        <TableData />
      </tbody>
    </table>
  );
};

export default Table;
