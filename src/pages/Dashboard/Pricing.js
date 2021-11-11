import React from 'react';
import './../../css/component.css';

const Pricing = ({
  prevStep,
  nextStep,
  handleChangeTable,
  handleAddRow,
  handleRemoveSpecificRow,
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
            <div className='row'>
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
                  {/* Advanced Options section */}
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
                  {/* Bulk pricing section */}
                  <div>
                    <h5 className='sub-heading'>Bulk Pricing</h5>
                    <span>
                      Create bulk pricing rules to offer price discounts based
                      on quantity breaks
                    </span>
                    <div className='row'>
                      <div class='form-group col-md-6 col-sm-12'>
                        <label for='bulkPricingDiscountType'>
                          Discount Type
                        </label>
                        <select
                          class='form-control'
                          onChange={handleChange('bulkPricingDiscountType')}
                        >
                          <option
                            selected={
                              values.bulkPricingDiscountType === '% Discount'
                            }
                            value='% Discount'
                          >
                            % Discount
                          </option>
                          <option
                            selected={values.bulkPricingDiscountType === '...'}
                            value='...'
                          >
                            ...
                          </option>
                        </select>
                      </div>
                    </div>
                    {values.bulkPricingDiscountType === '% Discount' ? (
                      <div>
                        <table
                          class='table table-bordered'
                          style={{ marginTop: '1rem' }}
                        >
                          <thead>
                            <tr class='table-light'>
                              <th className='text-end'> Min Quantity </th>
                              <th className='text-end'> % Discount </th>
                              <th className='text-end'> Unit Price </th>
                            </tr>
                          </thead>
                          <tbody>
                            {values.discountTiers.map((item, idx) => (
                              <tr id='addr0' key={idx}>
                                <td>
                                  <input
                                    type='text'
                                    name='minQuantity'
                                    value={
                                      values.discountTiers[idx].minQuantity
                                    }
                                    onChange={handleChangeTable(idx)}
                                    className='form-control text-end'
                                  />
                                </td>
                                <td>
                                  <input
                                    type='text'
                                    name='discount'
                                    placeholder='0.00%'
                                    value={values.discountTiers[idx].discount}
                                    onChange={handleChangeTable(idx)}
                                    className='form-control text-end'
                                  />
                                </td>
                                <td>
                                  <input
                                    type='text'
                                    name='unitPrice'
                                    value={values.discountTiers[idx].unitPrice}
                                    onChange={handleChangeTable(idx)}
                                    className='form-control text-end'
                                  />
                                </td>
                                <td>
                                  <button
                                    className='btn'
                                    onClick={handleRemoveSpecificRow(idx)}
                                  >
                                    <i class='fas fa-trash'></i>
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        <button
                          onClick={handleAddRow}
                          style={{ color: '#0d6efd' }}
                          className='btn btn-default pull-left'
                        >
                          + Add tier
                        </button>
                      </div>
                    ) : (
                      <div></div>
                    )}
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
