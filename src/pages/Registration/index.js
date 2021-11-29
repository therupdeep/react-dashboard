import React from 'react';
import AccountRegistration from './AccountRegistration';
import GSTDetails from './GSTDetails';
import PickupAddress from './PickupAddress';

const Registration = ({
  values,
  prevStep,
  nextStep,
  handleChange,
  toggleChange,
  handleClickShowPassword,
}) => {
  return (
    // <AccountRegistration
    //   values={values}
    //   prevStep={prevStep}
    //   nextStep={nextStep}
    //   handleChange={handleChange}
    //   toggleChange={toggleChange}
    //   handleClickShowPassword={handleClickShowPassword}
    // />

    // <GSTDetails
    //   values={values}
    //   prevStep={prevStep}
    //   nextStep={nextStep}
    //   handleChange={handleChange}
    //   toggleChange={toggleChange}
    // />
    <PickupAddress
      values={values}
      prevStep={prevStep}
      nextStep={nextStep}
      handleChange={handleChange}
      toggleChange={toggleChange}
    />
  );
};

export default Registration;
