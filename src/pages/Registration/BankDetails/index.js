import React from 'react';
import HeaderNav from '../components/HeaderNav';
import BankDetailsBody from './components/BankDetailsBody';

const BankDetails = ({
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
          <HeaderNav step={values.registrationStep} />
          <BankDetailsBody
            values={values}
            handleChange={handleChange}
            nextStep={nextStep}
          />
        </div>
      </div>
    </div>
  );
};

export default BankDetails;
