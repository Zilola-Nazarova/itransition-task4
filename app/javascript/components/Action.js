import React from 'react';

const Action = ({children, onClick, style}) => {
  return (
    <button
      type="button"
      class={`btn btn-${style} m-1`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Action;