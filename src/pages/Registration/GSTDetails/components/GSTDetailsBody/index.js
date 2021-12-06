import React from 'react';
import TextboxWithButton from '../../../components/TextboxWithButton';
import Button from './../../../../../components/Button';

const GSTDetailsBody = ({ values, handleChange, nextStep }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <form style={{ padding: '1rem 2rem' }} onSubmit={Continue}>
      <TextboxWithButton
        label='Enter GSTIN'
        buttonText='Verify'
        value={values.gstIN}
        onChange={handleChange('gstIN')}
      />
      <Button
        text='Continue'
        buttonStyle={{ width: '100%', marginTop: '40vh' }}
      />
    </form>
  );
};

export default GSTDetailsBody;
