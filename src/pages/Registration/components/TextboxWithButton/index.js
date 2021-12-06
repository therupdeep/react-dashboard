import React from 'react';
import Button from '../../../../components/Button';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f0a4c2',
    },
  },
});

const TextboxWithButton = ({ label, buttonText, value, onChange }) => {
  return (
    <ThemeProvider theme={theme}>
      <div className='row'>
        <div class='form-group col-md-9 col-sm-9 col-12'>
          <TextField
            required
            id='outlined-basic'
            label={label}
            variant='outlined'
            value={value}
            size='small'
            fullWidth
            onChange={onChange}
          />
        </div>
        <Button
          text={buttonText}
          classes='form-group col-md-3 col-sm-3 col-12'
          buttonStyle={{ width: '100%' }}
        />
      </div>
    </ThemeProvider>
  );
};

export default TextboxWithButton;
