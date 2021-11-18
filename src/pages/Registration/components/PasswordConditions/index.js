import React from 'react';

const PasswordConditions = () => {
  return (
    <div style={{ display: 'flex' }}>
      <ul>
        <li>Minimum 8 characters</li>
        <li>1 Special Character (@#$%!^{'&'}*)</li>
      </ul>
      <ul style={{ paddingLeft: '4rem' }}>
        <li>1 Uppercase</li>
        <li>1 Number</li>
      </ul>
    </div>
  );
};

export default PasswordConditions;
