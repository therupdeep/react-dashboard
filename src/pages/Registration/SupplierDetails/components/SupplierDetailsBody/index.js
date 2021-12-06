import React from 'react';
import Checkbox from '../../../../../components/Checkbox';
import Button from './../../../../../components/Button';
import FloatingLabelTextField from '../../../../../components/FloatingLabelTextField';
import Info from '../../../components/Info';

const SupplierDetailsBody = ({
  values,
  handleChange,
  toggleChange,
  nextStep,
}) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <form style={{ padding: '1rem 2rem' }}>
      <Info text="'Store Name' is visible on the reseller app with your listed products" />
      <FloatingLabelTextField
        label='Store Name'
        value={values.store_name}
        onChange={handleChange('store_name')}
        helperText='Eg. Business Name,Trade Name,etc.'
      />
      <FloatingLabelTextField
        label='Your Full Name'
        value={values.fullname}
        onChange={handleChange('fullname')}
      />
      <div style={{ marginTop: '4rem' }}>
        <Checkbox
          toggleChange={toggleChange}
          label='I agree to comply with Supplier Terms & Conditions'
          name='supplier_terms'
          defaultValue={values.supplier_terms}
        />
        <Button
          text='Submit'
          buttonStyle={{ width: '100%' }}
          onClick={Continue}
        />
      </div>
    </form>
  );
};

export default SupplierDetailsBody;
