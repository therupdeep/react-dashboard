import React from 'react';
import HeaderNav from '../components/HeaderNav';
import SupplierDetailsBody from './components/SupplierDetailsBody';

const SupplierDetails = ({
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
        backgroundColor: 'rgb(255,228,225)',
      }}
    >
      <div class='card' style={{ width: '32rem' }}>
        <div class='card-body' style={{ padding: '0' }}>
          <HeaderNav />
          <SupplierDetailsBody
            values={values}
            handleChange={handleChange}
            toggleChange={toggleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default SupplierDetails;
