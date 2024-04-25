import React from 'react';

const Action = ({children, onClick}) => {
  return (
    <button
      type="button"
      class="btn btn-primary m-1"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Action;