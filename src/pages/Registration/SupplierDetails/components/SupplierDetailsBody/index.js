import React from 'react';
import Checkbox from '../../../../../components/Checkbox';
import TextboxWithButton from '../../../components/TextboxWithButton';
import Button from './../../../../../components/Button';

const SupplierDetailsBody = ({ values, handleChange }) => {
  return (
    <form style={{ padding: '1rem 2rem' }}>
      {/* Global component = Info */}
      <Info />
      <TextBoxWithoutLabel
        placeholder='Store Name'
        value={values.otp}
        onChange={handleChange('otp')}
      />
      <TextBoxWithoutLabel
        placeholder='Your Full Name'
        value={values.emailId}
        onChange={handleChange('emailId')}
      />
      <Checkbox />
      <Button
        text='Continue'
        buttonStyle={{ width: '100%', marginTop: '40vh' }}
      />
    </form>
  );
};

export default SupplierDetailsBody;
