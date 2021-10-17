import React from 'react';
import './../css/component.css';

const Variations = ({ prevStep, nextStep, handleChange, values }) => {
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
        <h5 style={{ fontWeight: '600' }}>Product Options</h5>
        <div>Create product variations and customizations</div>
      </div>
      <div className='tab-card'>
        <h5 style={{ fontWeight: '600' }}>Variations</h5>
        <span>
          Add variant options like size and color to create variants for this
          products
        </span>
        {/* Variant Options section */}
        <div>
          <h5 className='sub-heading'>Variant Options</h5>
          <div style={{ textAlign: 'center' }}>
            <div style={{ padding: '1rem 0' }}>
              No Option has been added yet
            </div>
            <button type='button' className='btn btn-outline-primary'>
              <i class='fas fa-plus'></i>&nbsp; Add Variant Option
            </button>
          </div>
        </div>
        {/* Variants section */}
        <div>
          <h5 className='sub-heading'>Variants</h5>
          <div className='variant-section'>
            Variants will be created after creating Options
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
      </div>
    </div>
  );
};

export default Variations;
