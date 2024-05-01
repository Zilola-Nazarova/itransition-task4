import React from 'react';
import { useDispatch } from 'react-redux';
import TableData from './TableData';
import { selectAll } from '../redux/users/usersSlice';

const Table = ({allSelected, onAction}) => {
  const dispatch = useDispatch();

  return(
    <table class="table table-dark table-striped-columns table-hover m-0 align-middle">
      <thead class="align-middle">
        <tr>
          <th scope="col" class="checkbox">
            <input
              class="form-check-input"
              type="checkbox"
              id="all"
              name="all"
              checked={allSelected}
              onChange={() => {dispatch(selectAll()); onAction()}}
            />
          </th>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Registered at</th>
          <th scope="col">Last seen at</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <TableData />
      </tbody>
    </table>
  );
};

export default Table;
