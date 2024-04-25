import React from 'react';
import { Link } from "react-router-dom";

const Button = ({children, link}) => {
  return (
    <Link
      class="btn btn-primary px-3 mx-2"
      to={link}
    >{ children }
    </ Link>
  );
}

export default Button;
