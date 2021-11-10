import React from 'react';
import './../css/component.css';
import PageHeader from '../components/PageHeader';
import BasicInformationCard from './BasicInformation/components/BasicInformationCard';

const BasicInformation = ({ nextStep, toggleChange, handleChange, values }) => {
  return (
    <div>
      <PageHeader
        header='Product Information'
        subtext='Information to help define a product'
      />
      <BasicInformationCard
        nextStep={nextStep}
        toggleChange={toggleChange}
        handleChange={handleChange}
        values={values}
      />
    </div>
  );
};

export default BasicInformation;
