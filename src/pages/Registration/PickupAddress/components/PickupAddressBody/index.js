import React from 'react';
import Checkbox from '../../../../../components/Checkbox';
import TextboxWithButton from '../../../components/TextboxWithButton';
import Button from './../../../../../components/Button';

const PickupAddressBody = ({ values, handleChange }) => {
  return (
    <form style={{ padding: '1rem 2rem' }}>
      <Info />
      <Checkbox />
      <TextBoxWithoutLabel
        placeholder='Room/ Floor/ Building Number'
        value={values.otp}
        onChange={handleChange('otp')}
      />
      <TextBoxWithoutLabel
        placeholder='Street/ Locality/ Landmark'
        value={values.emailId}
        onChange={handleChange('emailId')}
      />
      <PincodeTextbox />
      <CityTextbox />
      <StateMenu />
      <Button
        text='Continue'
        buttonStyle={{ width: '100%', marginTop: '40vh' }}
      />
    </form>
  );
};

export default PickupAddressBody;
