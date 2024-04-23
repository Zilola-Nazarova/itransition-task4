import React from 'react';
import TableData from './TableData';

const Table = () => {
  return(
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
        <TableData />
      </tbody>
    </table>
  );
};

export default Table;
