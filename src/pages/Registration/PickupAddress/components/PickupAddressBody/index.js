import React from 'react';
import Checkbox from '../../../../../components/Checkbox';
import TextboxWithButton from '../../../components/TextboxWithButton';
import Button from './../../../../../components/Button';
import Info from '../../../components/Info';
import FloatingLabelTextField from '../../../../../components/FloatingLabelTextField';

const PickupAddressBody = ({ values, handleChange }) => {
  return (
    <form style={{ padding: '1rem 2rem' }}>
      <Info text='Products will be picked up from this location for delivery' />
      <Checkbox />
      <FloatingLabelTextField
        label='Room/ Floor/ Building Number'
        value={values.otp}
        onChange={handleChange('otp')}
      />
      <FloatingLabelTextField
        label='Street/ Locality/ Landmark'
        value={values.emailId}
        onChange={handleChange('emailId')}
      />
      {/* <PincodeTextbox />
      <CityTextbox />
      <StateMenu /> */}
      <Button
        text='Continue'
        buttonStyle={{ width: '100%', marginTop: '40vh' }}
      />
    </form>
  );
};

export default PickupAddressBody;
