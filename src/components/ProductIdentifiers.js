import React from 'react';
import './../css/component.css';

const ProductIdentifiers = ({ prevStep, nextStep, handleChange, values }) => {
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
        <h5 style={{ fontWeight: '600' }}>Product Identifiers</h5>
        <br />
        <div>
          <form>
            <div class='row'>
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
              <div class='form-group col-md-6 col-sm-12'>
                <label for='ManufacturerPartNumber'>
                  Manufacturer Part Number (MPN)
                </label>
                <input
                  type='text'
                  class='form-control'
                  value={values.ManufacturerPartNumber}
                  onChange={handleChange('ManufacturerPartNumber')}
                />
              </div>
            </div>
            <div class='row'>
              <div class='form-group col-md-6 col-sm-12'>
                <label for='ProductUPCorEAN'>Product UPC/EAN</label>
                <input
                  type='text'
                  class='form-control'
                  value={values.ProductUPCorEAN}
                  onChange={handleChange('ProductUPCorEAN')}
                />
              </div>
              <div class='form-group col-md-6 col-sm-12'>
                <label for='GlobalTradeNumber'>Global Trade Number(GTN)</label>
                <input
                  type='text'
                  class='form-control'
                  value={values.GlobalTradeNumber}
                  onChange={handleChange('GlobalTradeNumber')}
                />
              </div>
            </div>
            <div class='row'>
              <div class='form-group col-md-6 col-sm-12'>
                <label for='BinPickingNumber'>Bin Picking Number(BPN)</label>
                <input
                  type='text'
                  class='form-control'
                  value={values.BinPickingNumber}
                  onChange={handleChange('BinPickingNumber')}
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

export default ProductIdentifiers;
