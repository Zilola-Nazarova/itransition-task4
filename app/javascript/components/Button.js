import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = ({ children, link, color }) => (
  <Link
    class={`btn-${color} btn px-3 mx-2`}
    to={link}
  >
    { children }
  </Link>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Button;
