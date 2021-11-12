import React from 'react';
import TextBoxWithoutLabel from '../../components/TextBoxWithoutLabel';
import Button from '../../components/Button';

const Registration = ({ values, handleChange }) => {
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
          <div className='row'>
            <TextBoxWithoutLabel
              size='col-md-9 col-sm-9'
              placeholder='Mobile Number'
              value={values.mobileNo}
              onChange={handleChange('mobileNo')}
            />
            <Button
              text='Send OTP'
              classes='form-group col-md-3 col-sm-3 col-12'
            />
          </div>
          <div className='row'>
            <TextBoxWithoutLabel
              placeholder='Enter OTP'
              value={values.otp}
              onChange={handleChange('otp')}
            />
          </div>
          <div className='row'>
            <TextBoxWithoutLabel
              placeholder='Email ID'
              value={values.emailId}
              onChange={handleChange('emailId')}
            />
          </div>
          <div className='row'>
            <TextBoxWithoutLabel
              placeholder='Set Password'
              value={values.password}
              onChange={handleChange('password')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
