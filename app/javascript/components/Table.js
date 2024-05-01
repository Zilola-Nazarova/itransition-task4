import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import TableData from './TableData';
import { selectAll } from '../redux/users/usersSlice';

const Table = ({ allSelected, onAction }) => {
  const dispatch = useDispatch();

  return (
    <table className="table table-dark table-striped-columns table-hover m-0 align-middle">
      <thead className="align-middle">
        <tr>
          <th scope="col">
            <input
              className="checkbox"
              aria-label="Mute volume"
              type="checkbox"
              id="all"
              name="all"
              checked={allSelected}
              onChange={() => { dispatch(selectAll()); onAction(); }}
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
      <tbody className="table-group-divider">
        <TableData />
      </tbody>
    </table>
  );
};

Table.propTypes = {
  allSelected: PropTypes.bool.isRequired,
  onAction: PropTypes.func.isRequired,
};

export default Table;
