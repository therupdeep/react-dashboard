import React from 'react';
import './../css/component.css';

const VariationsModal = () => {
  return (
    <div className='variant-modal-card'>
      <div>
        <div className='bg-white'>
          <div style={{ display: 'flex', padding: '1rem 0 1rem 2rem' }}>
            <h5
              style={{
                fontWeight: '600',
              }}
            >
              Variant Options
            </h5>
            &nbsp;
            <span style={{ lineHeight: '1.7' }}>(0 options, 0 variants)</span>
          </div>
          <hr style={{ margin: '0' }} />
        </div>
        <div
          style={{
            paddingLeft: '2rem',
            paddingTop: '1rem',
          }}
        >
          <div>
            Use Variant Options to generate Variants, each with a unique SKU
            that can be used to track inventory. Assign attributes such as
            Image, Default Price, and Weight on the Variant level.
          </div>
          <div style={{ paddingTop: '2rem', display: 'flex' }}>
            <div className='bg-white'>
              <button type='button' className='btn btn-outline-primary'>
                <i class='fas fa-plus'></i>&nbsp; Add Variant Option
              </button>
            </div>
            &nbsp;&nbsp;&nbsp;
            <div className='bg-white'>
              <button type='button' className='btn btn-outline-primary'>
                <i class='fas fa-plus'></i>&nbsp; Add Shared Variant Option
              </button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ paddingBottom: '1rem' }} className='bg-white'>
        <hr style={{ marginTop: '0', marginBottom: '1rem' }} />
        <div className='text-end' style={{ paddingRight: '1rem' }}>
          <button type='button' className='btn' style={{ color: '#3469fa' }}>
            Cancel
          </button>
          <button type='button' className='btn btn-primary'>
            Save Variants
          </button>
        </div>
      </div>
    </div>
  );
};

export default VariationsModal;
