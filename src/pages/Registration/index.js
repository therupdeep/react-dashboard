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
  const step = values.registrationStep;

  switch (step) {
    case 1:
      return (
        <AccountRegistration
          values={values}
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
          toggleChange={toggleChange}
          handleClickShowPassword={handleClickShowPassword}
        />
      );
    case 2:
      return (
        <GSTDetails
          values={values}
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
          toggleChange={toggleChange}
        />
      );

    case 3:
      return (
        <PickupAddress
          values={values}
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
          toggleChange={toggleChange}
        />
      );

    case 4:
      return (
        <BankDetails
          values={values}
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
          toggleChange={toggleChange}
        />
      );

    case 5:
      return (
        <SupplierDetails
          values={values}
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
          toggleChange={toggleChange}
        />
      );
  }
};

export default Registration;
