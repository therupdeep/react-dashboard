import React from 'react';
import Button from '../../../../components/Button';

const MobileNoTextBox = ({ value, onChange }) => {
  return (
    <div className='row'>
      <div class='form-group col-md-9 col-sm-9 col-12'>
        <input
          type='text'
          class='form-control'
          placeholder='Mobile Number'
          value={value}
          onChange={onChange}
        />
      </div>
      <Button text='Send OTP' classes='form-group col-md-3 col-sm-3 col-12' />
    </div>
  );
};

export default MobileNoTextBox;
