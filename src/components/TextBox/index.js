import React from 'react';

const TextBox = ({ label, placeholder, value, onChange }) => {
  return (
    <div class='form-group col-md-6 col-sm-12'>
      <label>{label}</label>
      <input
        type='text'
        class='form-control'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextBox;
