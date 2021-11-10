import React from 'react';
import './../css/component.css';
import Checkbox from '../components/Checkbox';

const Inventory = ({
  prevStep,
  nextStep,
  toggleChange,
  handleChange,
  values,
}) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <h5 style={{ fontWeight: '600' }}>Product Information</h5>
        <div>Information to help define a product</div>
      </div>
      <div className='tab-card'>
        <h5 style={{ fontWeight: '600' }}>Inventory</h5>
        <br />
        <div>
          <form>
            <Checkbox
              toggleChange={toggleChange}
              label='Track Inventory'
              name='trackInventory'
              defaultValue={values.trackInventory}
            />
            {/* conditional rendering based on checked value of track inventory checkbox */}
            {values.trackInventory ? (
              <div>
                <div style={{ paddingLeft: '1.5rem' }}>
                  <div className='form-check'>
                    <input
                      class='form-check-input'
                      type='radio'
                      name='levelofInventoryTracking'
                      id='productLevel'
                      value='productLevel'
                      checked={
                        values.levelofInventoryTracking === 'productLevel'
                      }
                      onChange={toggleChange}
                    />
                    <label class='form-check-label' for='productLevel'>
                      On the product level
                    </label>
                  </div>
                  <div className='form-check'>
                    <input
                      class='form-check-input'
                      type='radio'
                      name='levelofInventoryTracking'
                      id='variantLevel'
                      value='variantLevel'
                      checked={
                        values.levelofInventoryTracking === 'variantLevel'
                      }
                      onChange={toggleChange}
                    />
                    <label className='form-check-label' for='variantLevel'>
                      On the variant level
                    </label>
                  </div>
                </div>
                <div class='row'>
                  <div class='form-group col-md-6 col-sm-12'>
                    <label for='stock'>Stock</label>
                    <input
                      type='number'
                      class='form-control'
                      value={values.stock}
                      onChange={handleChange('stock')}
                    />
                  </div>
                  <div class='form-group col-md-6 col-sm-12'>
                    <label for='lowStock'>Low Stock</label>
                    <input
                      type='number'
                      class='form-control'
                      value={values.lowStock}
                      onChange={handleChange('lowStock')}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )}
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
                onClick={Previous}
              >
                PREVIOUS
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

export default Inventory;
