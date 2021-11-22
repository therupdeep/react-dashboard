import React from 'react';
import HeaderNav from '../components/HeaderNav';

const GSTDetails = () => {
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
        </div>
      </div>
    </div>
  );
};

export default GSTDetails;
