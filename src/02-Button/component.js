import React from 'react';
import './style.css';

// text
// type= primary | secondary | disabled
// onClick = () =>  {}

// button-type
// button-primary

function Button({ children, onClick, type = 'primary' }) {
  if (!['primary', 'disabled'].includes(type)) {
    console.warn('INVALID PROPD PASSED TO BUTTON')
  }
  return (
    <p>
      <button
        onClick={onClick}
        className={`button-${type}`}
        disabled={type === 'disabled'}
      >
        {children}
      </button>
    </p>
  );
}

export default Button;
