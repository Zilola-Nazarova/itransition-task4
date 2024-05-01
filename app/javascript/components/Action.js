import React from 'react';
import PropTypes from 'prop-types';

const Action = ({ children, onClick, color }) => (
  <button
    type="button"
    className={`btn btn-${color} m-1`}
    onClick={onClick}
  >
    {children}
  </button>
);

Action.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

export default Action;
