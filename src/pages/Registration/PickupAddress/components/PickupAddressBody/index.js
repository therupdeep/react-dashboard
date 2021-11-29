import React from 'react';
import Checkbox from '../../../../../components/Checkbox';
import Button from './../../../../../components/Button';
import Info from '../../../components/Info';
import FloatingLabelTextField from '../../../../../components/FloatingLabelTextField';
import Pincode_City from '../../../components/Pincode_City';
import StateMenu from '../../../components/StateMenu';

const PickupAddressBody = ({ values, handleChange, toggleChange }) => {
  return (
    <form style={{ padding: '1rem 2rem' }}>
      <Info text='Products will be picked up from this location for delivery' />
      <Checkbox
        toggleChange={toggleChange}
        label='Use address registered on GST'
        name='address_on_gst'
        defaultValue={values.address_on_gst}
      />
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
      <Pincode_City
        pincode_value={values.pin}
        city_value={values.city}
        pincode_onChange={handleChange('pin')}
        city_onChange={handleChange('city')}
      />
      <StateMenu value={values.st} onChange={handleChange('st')} />
      {/* <StateMenu /> */}
      <Button
        text='Continue'
        buttonStyle={{ width: '100%', marginTop: '10vh' }}
      />
    </form>
  );
};

export default PickupAddressBody;
