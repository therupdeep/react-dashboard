import React from 'react';
import './../../src/App.css';

const BasicInformation = ({ nextStep, handleChange, values }) => {
  const tabCard = {
    minWidth: '75vw',
    height: '70vh',
    backgroundColor: 'white',
    padding: '25px',
    marginTop: '10px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  };
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
      <div style={tabCard}>
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
                  id='inputEmail4'
                  placeholder='Sample Product Name'
                />
              </div>
              <div class='form-group col'>
                <label for='sku'>SKU</label>
                <input
                  type='text'
                  class='form-control'
                  id='inputPassword4'
                  placeholder='THK-1138'
                />
              </div>
            </div>
            <div class='row'>
              <div class='form-group col'>
                <label for='productType'>Product Type</label>
                <select class='form-control'>
                  <option selected>Physical</option>
                  <option>...</option>
                </select>
              </div>
              <div class='form-group col'>
                <label for='defaultPrice'>Default Price(including tax)</label>
                <input type='text' class='form-control' placeholder='₹ 35' />
              </div>
            </div>
            <div class='row'>
              <div class='form-group col'>
                <label for='Brand'>Brand</label>
                <select class='form-control'>
                  <option></option>
                  <option>...</option>
                </select>
              </div>
              <div class='form-group col'>
                <label for='Weight'>Weight</label>
                <input type='text' class='form-control' placeholder='0' />
              </div>
            </div>
            <br />
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                type='button'
                className='btn'
                style={{
                  color: 'white',
                  backgroundColor: 'orange',
                  minWidth: '10vw',
                }}
              >
                Save
              </button>
              &nbsp;&nbsp;
              <button
                type='button'
                className='btn btn-outline-primary'
                style={{ minWidth: '10vw' }}
                onClick={Continue}
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BasicInformation;
