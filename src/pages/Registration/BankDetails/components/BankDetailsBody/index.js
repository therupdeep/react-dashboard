import React from 'react';
import Button from './../../../../../components/Button';
import Info from '../../../components/Info';
import FloatingLabelTextField from '../../../../../components/FloatingLabelTextField';

const BankDetailsBody = ({ values, handleChange, nextStep }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <form style={{ padding: '1rem 2rem' }}>
      <Info text='Bank account should be in the name of registered business name or trade name as per GSTIN' />
      <FloatingLabelTextField
        label='Account Number'
        value={values.acc_no}
        onChange={handleChange('acc_no')}
      />
      <FloatingLabelTextField
        label='Confirm Account Number'
        value={values.acc_no2}
        onChange={handleChange('acc_no2')}
      />
      <FloatingLabelTextField
        label='IFSC Code'
        value={values.ifsc_code}
        onChange={handleChange('ifsc_code')}
      />
      <div>
        <span>Don't remember IFSC Code? </span>
        <span style={{ color: '#1769aa', fontWeight: 'bold' }}>
          Find IFSC Code
        </span>
      </div>
      <Button
        text='Verify Bank Details'
        buttonStyle={{ width: '100%', marginTop: '10vh' }}
        onClick={Continue}
      />
    </form>
  );
};

export default BankDetailsBody;
