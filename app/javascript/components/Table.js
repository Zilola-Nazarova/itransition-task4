import React from 'react';

const Table = ({ data }) => (
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
      { data.map((user, i) => (
        <tr>
          <th>{ i }</th>
          <th>{ user.id }</th>
          <th>{ user.name }</th>
          <th>{ user.blocked ? 'active' : 'blocked' }</th>
          <th>{ user.last_login }</th>
        </tr>
      )) }
    </tbody>
  </table>
);

export default Table;
