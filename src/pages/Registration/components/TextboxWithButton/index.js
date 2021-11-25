import React from 'react';
import Button from '../../../../components/Button';

const TextboxWithButton = ({ placeholder, buttonText, value, onChange }) => {
  return (
    <div className='row'>
      <div class='form-group col-md-9 col-sm-9 col-12'>
        <input
          type='text'
          class='form-control'
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
      <Button
        text={buttonText}
        classes='form-group col-md-3 col-sm-3 col-12'
        buttonStyle={{ width: '100%' }}
      />
    </div>
  );
};

export default TextboxWithButton;
