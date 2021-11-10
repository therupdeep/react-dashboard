import React from 'react';

const TextBoxReq = ({ label, placeholder, value, onChange }) => {
  return (
    <div class='form-group col-md-6 col-sm-12'>
      <label>
        {label} <span style={{ color: 'red' }}>*</span>
      </label>
      <input
        type='text'
        class='form-control'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default TextBoxReq;
