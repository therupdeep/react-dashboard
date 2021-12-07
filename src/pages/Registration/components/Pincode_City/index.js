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

const Pincode_City = ({
  pincode_value,
  city_value,
  pincode_onChange,
  city_onChange,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <div className='row'>
        <div class='form-group col-md-6 col-sm-6 col-12'>
          <TextField
            required
            id='outlined-basic'
            label='Pincode'
            variant='outlined'
            value={pincode_value}
            size='small'
            fullWidth
            onChange={pincode_onChange}
          />
        </div>
        <div class='form-group col-md-6 col-sm-6 col-12'>
          <TextField
            required
            id='outlined-basic'
            label='City'
            variant='outlined'
            value={city_value}
            size='small'
            fullWidth
            onChange={city_onChange}
          />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Pincode_City;
