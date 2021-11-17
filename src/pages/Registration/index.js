import React from 'react';
import TextBoxWithoutLabel from '../../components/TextBoxWithoutLabel';
import MobileNoTextBox from './components/MobileNoTextBox';
import PasswordTextBox from './components/PasswordTextbox';
import Button from '../../components/Button';

const Registration = ({ values, handleChange, toggleChange }) => {
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
      <div class='card' style={{ width: '30rem' }}>
        <div class='card-body'>
          <h5 class='card-title'>Welcome to</h5>
          <h6 class='card-subtitle mb-2 text-muted'>
            Create your account to start selling
          </h6>
          <MobileNoTextBox
            value={values.mobileNo}
            onChange={handleChange('mobileNo')}
          />
          <TextBoxWithoutLabel
            placeholder='Enter OTP'
            value={values.otp}
            onChange={handleChange('otp')}
          />
          <TextBoxWithoutLabel
            placeholder='Email ID'
            value={values.emailId}
            onChange={handleChange('emailId')}
          />
          <PasswordTextBox
            showPassword={values.showPassword}
            value={values.password}
            onChange={handleChange('password')}
            toggleChange={toggleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Registration;
