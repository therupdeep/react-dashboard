import React from 'react';
import TextBoxWithoutLabel from '../../../components/TextBoxWithoutLabel';
import MobileNoTextBox from '../components/MobileNoTextBox';
import PasswordTextBox from '../components/PasswordTextbox';
import PasswordConditions from '../components/PasswordConditions';
import UpdatesCheckbox from '../components/UpdatesCheckbox';
import Button from '../../../components/Button';

const AccountRegistration = ({
  values,
  prevStep,
  nextStep,
  handleChange,
  toggleChange,
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
        backgroundColor: 'rgb(255,228,225)',
      }}
    >
      <div class='card' style={{ width: '30rem' }}>
        <div class='card-body'>
          <h5 class='card-title'>Welcome to</h5>
          <h6 class='card-subtitle mb-2 text-muted'>
            Create your account to start selling
          </h6>
          <form>
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
            <PasswordConditions />
            <UpdatesCheckbox
              defaultChecked={values.getUpdates}
              name='getUpdates'
              onChange={toggleChange}
            />
            <Button
              text='Create Account'
              onClick={Continue}
              buttonStyle={{ width: '100%' }}
            />
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
