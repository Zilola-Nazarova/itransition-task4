import React from 'react';
import { Link } from "react-router-dom";

const Button = ({children, link, style}) => {
  return (
    <Link
      class={`btn-${style} btn px-3 mx-2`}
      to={link}
    >{ children }
    </ Link>
  );
}

export default Button;
