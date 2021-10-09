import React from 'react';
import './../css/component.css';

const BasicInformation = ({ nextStep, toggleChange, handleChange, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <h5 style={{ fontWeight: '600' }}>Product Information</h5>
        <div>Information to help define a product</div>
      </div>
      <div className='tab-card'>
        <h5 style={{ fontWeight: '600' }}>Basic Information</h5>
        <br />
        <div>
          <form>
            <div class='form-group'>
              <div class='form-check'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  id='gridCheck'
                  defaultChecked={values.isCheckedvisibleOnStorefront}
                  onChange={toggleChange}
                />
                <label class='form-check-label' for='gridCheck'>
                  Visible on Storefront
                </label>
              </div>
            </div>
            <div class='row'>
              <div class='form-group col'>
                <label for='productName'>Product Name</label>
                <input
                  type='text'
                  class='form-control'
                  placeholder='Sample Product Name'
                  value={values.productName}
                  onChange={handleChange('productName')}
                />
              </div>
              <div class='form-group col'>
                <label for='sku'>SKU</label>
                <input
                  type='text'
                  class='form-control'
                  placeholder='THK-1138'
                  value={values.sku}
                  onChange={handleChange('sku')}
                />
              </div>
            </div>
            <div class='row'>
              <div class='form-group col'>
                <label for='productType'>Product Type</label>
                <select
                  class='form-control'
                  onChange={handleChange('productType')}
                >
                  <option
                    selected={values.productType === 'Physical'}
                    value='Physical'
                  >
                    Physical
                  </option>
                  <option selected={values.productType === '...'} value='...'>
                    ...
                  </option>
                </select>
              </div>
              <div class='form-group col'>
                <label for='defaultPrice'>Default Price(including tax)</label>
                <input
                  type='text'
                  class='form-control'
                  placeholder='₹ 35'
                  value={values.defaultPrice}
                  onChange={handleChange('defaultPrice')}
                />
              </div>
            </div>
            <div class='row'>
              <div class='form-group col'>
                <label for='Brand'>Brand</label>
                <select class='form-control' onChange={handleChange('brand')}>
                  <option selected={values.brand === ''} value=''></option>
                  <option selected={values.brand === '...'} value='...'>
                    ...
                  </option>
                </select>
              </div>
              <div class='form-group col'>
                <label for='Weight'>Weight</label>
                <input
                  type='text'
                  class='form-control'
                  placeholder='0'
                  value={values.weight}
                  onChange={handleChange('weight')}
                />
              </div>
            </div>
            <br />
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                type='button'
                className='btn btn-outline-primary'
                style={{ minWidth: '10vw' }}
              >
                SAVE
              </button>
              &nbsp;&nbsp;
              <button
                type='button'
                className='btn btn-outline-primary'
                style={{ minWidth: '10vw' }}
                onClick={Continue}
              >
                NEXT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BasicInformation;
