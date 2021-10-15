import React from 'react';
import './../css/component.css';

const Pricing = ({
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
        <h5 style={{ fontWeight: '600' }}>Pricing</h5>
        <br />
        <div>
          <form>
            <div class='row'>
              <div class='form-group col-md-6 col-sm-12'>
                <label for='defaultPrice'>
                  Default Price <span style={{ color: 'red' }}>* </span>
                  (including tax)
                </label>
                <input
                  type='text'
                  class='form-control'
                  placeholder='&#xF156; 0'
                  value={values.defaultPrice}
                  onChange={handleChange('defaultPrice')}
                  style={{
                    fontFamily: 'FontAwesome, PT Sans',
                  }}
                />
              </div>
            </div>
            <div class='row'>
              <div class='form-group col-md-6 col-sm-12'>
                <label for='taxClass'>
                  Tax Class <i class='fas fa-question-circle'></i>
                </label>
                <select
                  class='form-control'
                  onChange={handleChange('taxClass')}
                >
                  <option
                    selected={values.taxClass === 'DefaultTaxClass'}
                    value='DefaultTaxClass'
                  >
                    Default Tax Class
                  </option>
                  <option selected={values.taxClass === '...'} value='...'>
                    ...
                  </option>
                </select>
              </div>
              <div class='form-group col-md-6 col-sm-12'>
                <label for='taxCode'>Tax Provider Tax Code</label>
                <input
                  type='text'
                  class='form-control'
                  placeholder='IMPERIAL-LUXURY-TAX-01'
                  value={values.taxCode}
                  onChange={handleChange('taxCode')}
                />
              </div>
            </div>
            <div class='row'>
              {/* conditional rendering based on checked value of showAdvancedPricing boolean value */}
              {values.showAdvancedPricing ? (
                <div>
                  <div
                    class='form-group div-link'
                    style={{ display: 'inline' }}
                  >
                    <i class='fas fa-angle-down'></i>
                    <span
                      style={{ color: '#0d6efd' }}
                      title='showAdvancedPricing'
                      onClick={toggleChange}
                    >
                      {' '}
                      Hide Advanced Pricing
                    </span>
                  </div>
                  <div class='row'>
                    <div class='form-group col-md-6 col-sm-12'>
                      <label for='cost'>Cost</label>
                      <input
                        type='text'
                        class='form-control'
                        placeholder='&#xF156; 0'
                        value={values.cost}
                        onChange={handleChange('cost')}
                        style={{
                          fontFamily: 'FontAwesome, PT Sans',
                        }}
                      />
                    </div>
                    <div class='form-group col-md-6 col-sm-12'>
                      <label for='msrp'>MSRP</label>
                      <input
                        type='text'
                        class='form-control'
                        placeholder='&#xF156; 0'
                        value={values.msrp}
                        onChange={handleChange('msrp')}
                        style={{
                          fontFamily: 'FontAwesome, PT Sans',
                        }}
                      />
                    </div>
                  </div>
                  <div class='row'>
                    <div class='form-group col-md-6 col-sm-12'>
                      <label for='salePrice'>Sale Price</label>
                      <input
                        type='text'
                        class='form-control'
                        placeholder='&#xF156; 0'
                        value={values.salePrice}
                        onChange={handleChange('salePrice')}
                        style={{
                          fontFamily: 'FontAwesome, PT Sans',
                        }}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div
                    class='form-group div-link'
                    style={{ display: 'inline' }}
                  >
                    <i class='fas fa-angle-right'></i>
                    <span
                      style={{ color: '#0d6efd' }}
                      title='showAdvancedPricing'
                      onClick={toggleChange}
                    >
                      {' '}
                      Show Advanced Pricing
                    </span>
                  </div>
                </div>
              )}
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

export default Pricing;
