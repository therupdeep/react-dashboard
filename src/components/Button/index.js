import React from 'react';

const Button = ({ buttonStyle, classes, onClick, text }) => {
  return (
    <div className={`${classes}`}>
      <button
        type='submit'
        className='btn btn-outline-primary'
        style={buttonStyle}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
