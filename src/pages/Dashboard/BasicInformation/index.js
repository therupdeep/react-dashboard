import React from 'react';
import PageHeader from '../../../components/PageHeader';
import BasicInformationCard from './components/BasicInformationCard';
import Navbar from '../Navbar';
import Sidemenu from '../SideMenu';

const BasicInformation = ({ nextStep, toggleChange, handleChange, values }) => {
  const style = {
    homepage: {
      backgroundColor: 'rgba(0, 0, 0, 0.02)',
      paddingTop: '10px',
    },
    flex: {
      display: 'flex',
    },
  };
  return (
    <div style={style.homepage}>
      <Navbar />
      <div style={style.flex}>
        <Sidemenu step={values.step} />
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
      </div>
    </div>
  );
};

export default BasicInformation;
