import React from 'react';

const TextBoxWithoutLabel = ({ placeholder, value, onChange }) => {
  return (
    <div className='row'>
      <div class={`form-group col-12`}>
        <input
          type='text'
          class='form-control'
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default TextBoxWithoutLabel;
