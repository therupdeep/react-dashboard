import React from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const PasswordTextBox = ({
  showPassword,
  value,
  onChange,
  handleClickShowPassword,
}) => {
  return (
    <div>
      <div className='form-group'>
        <FormControl fullWidth variant='outlined'>
          <InputLabel htmlFor='outlined-adornment-password'>
            Set Password
          </InputLabel>
          <OutlinedInput
            id='outlined-adornment-password'
            type={showPassword ? 'text' : 'password'}
            value={value}
            onChange={onChange}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  title='showPassword'
                  onClick={handleClickShowPassword}
                  edge='end'
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label='Set Password'
          />
        </FormControl>
        {/* <input
          type={showPassword ? 'text' : 'password'}
          class='form-control'
          placeholder='Set Password'
          value={value}
          onChange={onChange}
          required
        /> */}
      </div>
      {/* <i
        class={showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'}
        style={{
          cursor: 'pointer',
          position: 'absolute',
          right: '25px',
          top: '265px',
        }}
        title='showPassword'
        onClick={toggleChange}
      ></i> */}
    </div>
  );
};

export default PasswordTextBox;
