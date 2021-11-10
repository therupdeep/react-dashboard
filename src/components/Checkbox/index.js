import React from 'react';

const Checkbox = ({ toggleChange, label, name, defaultValue }) => {
  return (
    <div class='form-group'>
      <div class='form-check'>
        <input
          class='form-check-input'
          type='checkbox'
          id='gridCheck'
          defaultChecked={defaultValue}
          name={name}
          onChange={toggleChange}
        />
        <label class='form-check-label' for='gridCheck'>
          {label}
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
