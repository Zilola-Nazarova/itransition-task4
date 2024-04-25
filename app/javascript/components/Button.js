import React from 'react';
import { Link } from "react-router-dom";

const Button = ({children, link}) => {
  return (
    <Link to={link}>{ children }</ Link>
  );
}

export default Button;
