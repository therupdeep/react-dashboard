import React from 'react';
import './../css/component.css';
import './../../src/App.css';

const Description = ({ nextStep, handleChange, values }) => {
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
        <h5 style={{ fontWeight: '600' }}>Description</h5>
        <br />
        <div>
          <form>
            <br />
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                type='button'
                className='btn'
                style={{
                  color: 'white',
                  backgroundColor: '#ff8c00',
                  minWidth: '10vw',
                }}
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

export default Description;
