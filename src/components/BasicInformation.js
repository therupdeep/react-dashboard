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
        <h5 style={{ fontWeight: '600', color: 'black' }}>
          Product Information
        </h5>
        <div>Information to help define a product</div>
      </div>
      <div className='tab-card'>
        <h5 style={{ fontWeight: '600', color: 'black' }}>Basic Information</h5>
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
              <div class='form-group col-md-6 col-sm-12'>
                <label for='productName'>
                  Product Name <span style={{ color: 'red' }}>*</span>
                </label>
                <input
                  type='text'
                  class='form-control'
                  placeholder='Sample Product Name'
                  value={values.productName}
                  onChange={handleChange('productName')}
                  required
                />
              </div>
              <div class='form-group col-md-6 col-sm-12'>
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
              <div class='form-group col-md-6 col-sm-12'>
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
              <div class='form-group col-md-6 col-sm-12'>
                <label for='defaultPrice'>
                  Default Price <span style={{ color: 'red' }}>* </span>
                  (including tax)
                </label>
                <div style={{ display: 'flex' }}>
                  <i
                    class='fas fa-rupee-sign'
                    style={{
                      padding: '.375rem 0rem',
                      fontSize: '1rem',
                      lineHeight: '1.5',
                      marginLeft: '0px',
                    }}
                  ></i>
                  <input
                    type='text'
                    class='form-control'
                    placeholder='35'
                    value={values.defaultPrice}
                    onChange={handleChange('defaultPrice')}
                    style={{ fontFamily: "'Arial', Font Awesome 5 Free" }}
                  />
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  {'> '} More pricing
                </div>
              </div>
            </div>
            <div class='row'>
              <div class='form-group col-md-6 col-sm-12'>
                <label for='Brand'>Brand</label>
                <select class='form-control' onChange={handleChange('brand')}>
                  <option selected={values.brand === ''} value=''></option>
                  <option selected={values.brand === '...'} value='...'>
                    ...
                  </option>
                </select>
              </div>
              <div class='form-group col-md-6 col-sm-12'>
                <label for='Weight'>
                  Weight <span style={{ color: 'red' }}>* </span>
                  <i class='fas fa-question-circle'></i>
                </label>
                <div style={{ display: 'flex' }}>
                  <input
                    type='text'
                    class='form-control'
                    placeholder='0'
                    value={values.weight}
                    onChange={handleChange('weight')}
                  />
                  <span
                    style={{
                      padding: '.375rem 0rem',
                      marginLeft: '-40px',
                      fontSize: '1rem',
                    }}
                  >
                    KGS
                  </span>
                </div>
              </div>
            </div>
            <div class='row'>
              <div class='form-group col-md-12 col-sm-12'>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '10px',
                  }}
                >
                  <label for='Categories'>Categories</label>
                  <div style={{ color: '#0d6efd', marginRight: '20px' }}>
                    <i class='fas fa-plus'></i> Add category
                  </div>
                </div>
                <div className='form-control'>
                  <div class='form-check'>
                    <input class='form-check-input' type='checkbox' value='' />
                    <label class='form-check-label' for='flexCheckDefault'>
                      Default checkbox
                    </label>
                  </div>
                  <div class='form-check'>
                    <input
                      class='form-check-input'
                      type='checkbox'
                      value=''
                      id='flexCheckChecked'
                      checked
                    />
                    <label class='form-check-label' for='flexCheckChecked'>
                      Checked checkbox
                    </label>
                  </div>
                </div>
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
