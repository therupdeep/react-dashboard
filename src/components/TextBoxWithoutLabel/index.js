import React from 'react';

const TextBoxWithoutLabel = ({ size, placeholder, value, onChange }) => {
  return (
    <div class={`form-group ${size} col-12`}>
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

export default TextBoxWithoutLabel;
