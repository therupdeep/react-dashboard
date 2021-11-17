import React from 'react';

const PasswordTextBox = ({ showPassword, value, onChange, toggleChange }) => {
  return (
    <div>
      <div className='form-group'>
        <input
          type={showPassword ? 'text' : 'password'}
          class='form-control'
          placeholder='Set Password'
          value={value}
          onChange={onChange}
          required
        />
      </div>
      <i
        class={showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'}
        style={{
          cursor: 'pointer',
          position: 'absolute',
          right: '25px',
          bottom: '38px',
        }}
        title='showPassword'
        onClick={toggleChange}
      ></i>
    </div>
  );
};

export default PasswordTextBox;
