import React from 'react';
import TextboxWithButton from '../components/TextboxWithButton';
import PasswordTextBox from '../components/PasswordTextbox';
import PasswordConditions from '../components/PasswordConditions';
import UpdatesCheckbox from '../components/UpdatesCheckbox';
import Button from '../../../components/Button';
import FloatingLabelTextField from '../../../components/FloatingLabelTextField';

const AccountRegistration = ({
  values,
  prevStep,
  nextStep,
  handleChange,
  toggleChange,
  handleClickShowPassword,
}) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundImage:
          'url("https://cdn.pixabay.com/photo/2017/09/06/11/41/clean-2721102_1280.jpg")',
      }}
    >
      <div class='card' style={{ width: '30rem' }}>
        <div class='card-body'>
          <h5 class='card-title'>Welcome to</h5>
          <h6 class='card-subtitle mb-2 text-muted'>
            Create your account to start selling
          </h6>
          <form onSubmit={Continue}>
            <TextboxWithButton
              label='Mobile Number'
              buttonText='Send OTP'
              value={values.mobileNo}
              onChange={handleChange('mobileNo')}
            />
            <FloatingLabelTextField
              label='Enter OTP'
              value={values.otp}
              onChange={handleChange('otp')}
            />
            <FloatingLabelTextField
              label='Email ID'
              value={values.emailId}
              onChange={handleChange('emailId')}
            />
            <PasswordTextBox
              showPassword={values.showPassword}
              value={values.password}
              onChange={handleChange('password')}
              handleClickShowPassword={handleClickShowPassword}
            />
            <PasswordConditions />
            <UpdatesCheckbox
              defaultChecked={values.getUpdates}
              name='getUpdates'
              onChange={toggleChange}
            />
            <Button text='Create Account' buttonStyle={{ width: '100%' }} />
            <div style={{ textAlign: 'center', paddingTop: '10px' }}>
              By clicking you agree to our Terms And Conditions
            </div>
          </form>
          {/* <i class="fab fa-whatsapp"></i> */}
        </div>
      </div>
    </div>
  );
};

export default AccountRegistration;
