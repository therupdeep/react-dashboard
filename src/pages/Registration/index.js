import React from 'react';
import AccountRegistration from './AccountRegistration';
import BankDetails from './BankDetails';
import GSTDetails from './GSTDetails';
import PickupAddress from './PickupAddress';
import SupplierDetails from './SupplierDetails';

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
    // <PickupAddress
    //   values={values}
    //   prevStep={prevStep}
    //   nextStep={nextStep}
    //   handleChange={handleChange}
    //   toggleChange={toggleChange}
    // />
    // <BankDetails
    //   values={values}
    //   prevStep={prevStep}
    //   nextStep={nextStep}
    //   handleChange={handleChange}
    //   toggleChange={toggleChange}
    // />
    <SupplierDetails
      values={values}
      prevStep={prevStep}
      nextStep={nextStep}
      handleChange={handleChange}
      toggleChange={toggleChange}
    />
  );
};

export default Registration;
