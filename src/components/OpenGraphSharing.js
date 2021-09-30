import React from 'react';
import './../css/component.css';
import './../../src/App.css';

const OpenGraphSharing = ({ prevStep, nextStep, handleChange, values }) => {
  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <h5 style={{ fontWeight: '600' }}>SEO {'&'} Sharing</h5>
        <div></div>
      </div>
      <div className='tab-card'>
        <h5 style={{ fontWeight: '600' }}>Open Graph Sharing</h5>
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
                onClick={Previous}
              >
                PREVIOUS
              </button>
              &nbsp;&nbsp;
              <button
                type='button'
                className='btn btn-outline-primary'
                style={{ minWidth: '10vw' }}
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OpenGraphSharing;
