import React from 'react';
import AccountRegistration from './AccountRegistration';
import GSTDetails from './GSTDetails';

const Registration = ({
  values,
  prevStep,
  nextStep,
  handleChange,
  toggleChange,
}) => {
  return (
    // <AccountRegistration
    //   values={values}
    //   prevStep={prevStep}
    //   nextStep={nextStep}
    //   handleChange={handleChange}
    //   toggleChange={toggleChange}
    // />

    <GSTDetails />
  );
};

export default Registration;
