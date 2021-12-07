import React from 'react';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f0a4c2',
    },
  },
});

const FloatingLabelTextField = ({ label, value, onChange, helperText }) => {
  // const validateEmail = (email) => {
  //   var re = /\S+@\S+\.\S+/;
  //   return re.test(email);
  // };
  // const checkifEmail = (label, value) => {
  //   if (label === 'Email ID') {
  //     return !validateEmail(value);
  //   } else return false;
  // };
  return (
    <ThemeProvider theme={theme}>
      <div className='row'>
        <div className='form-group col-12'>
          <TextField
            required
            id='outlined-basic'
            label={label}
            variant='outlined'
            value={value}
            size='small'
            fullWidth
            onChange={onChange}
            helperText={helperText}
          />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default FloatingLabelTextField;
