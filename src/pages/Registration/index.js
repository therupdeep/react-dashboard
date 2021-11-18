import React from 'react';
import AccountRegistration from './AccountRegistration';

const Registration = ({
  values,
  prevStep,
  nextStep,
  handleChange,
  toggleChange,
}) => {
  return (
    <AccountRegistration
      values={values}
      prevStep={prevStep}
      nextStep={nextStep}
      handleChange={handleChange}
      toggleChange={toggleChange}
    />
  );
};

export default Registration;
