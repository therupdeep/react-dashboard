import React from 'react';
import HeaderNav from '../components/HeaderNav';
import PickupAddressBody from './components/PickupAddressBody';

const PickupAddress = ({
  values,
  prevStep,
  nextStep,
  handleChange,
  toggleChange,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundImage:
          'url("https://cdn.pixabay.com/photo/2017/09/06/11/41/clean-2721102_1280.jpg")',
      }}
    >
      <div class='card' style={{ width: '32rem' }}>
        <div class='card-body' style={{ padding: '0' }}>
          <HeaderNav />
          <PickupAddressBody
            values={values}
            handleChange={handleChange}
            toggleChange={toggleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default PickupAddress;
