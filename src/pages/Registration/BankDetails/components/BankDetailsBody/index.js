import React from 'react';
import TextboxWithButton from '../../../components/TextboxWithButton';
import Button from './../../../../../components/Button';

const BankDetailsBody = ({ values, handleChange }) => {
  return (
    <form style={{ padding: '1rem 2rem' }}>
      {/* Global component = Info */}
      <Info />
      <TextBoxWithoutLabel
        placeholder='Account Number'
        value={values.otp}
        onChange={handleChange('otp')}
      />
      <TextBoxWithoutLabel
        placeholder='Confirm Account Number'
        value={values.emailId}
        onChange={handleChange('emailId')}
      />
      <TextBoxWithoutLabel
        placeholder='IFSC Code'
        value={values.emailId}
        onChange={handleChange('emailId')}
      />
      <BottomText />
      <Button
        text='Continue'
        buttonStyle={{ width: '100%', marginTop: '40vh' }}
      />
    </form>
  );
};

export default BankDetailsBody;
