import React, { useState } from 'react';
import './../css/component.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Variations = ({ prevStep, nextStep, handleChange, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
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
            <Button variant='outline-primary' onClick={() => handleShow(true)}>
              <i class='fas fa-plus'></i>&nbsp; Add Variant Option
            </Button>
            {/* <button type='button' className='btn btn-outline-primary'>
              <i class='fas fa-plus'></i>&nbsp; Add Variant Option
            </button> */}
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
      {/* Add Variant Option Modal */}
      <Modal
        show={show}
        fullscreen={fullscreen}
        onHide={() => setShow(false)}
        style={{ color: 'rgba(0, 0, 0, 0.6)' }}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <div>
              <div style={{ display: 'flex', paddingLeft: '1rem' }}>
                <h5
                  style={{
                    fontWeight: '600',
                  }}
                >
                  Variant Options
                </h5>
                &nbsp;
                <span style={{ lineHeight: '1.7' }}>
                  (0 options, 0 variants)
                </span>
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ padding: '0' }}>
          <div className='variant-modal-body'>
            <div style={{ padding: '1rem 0 0 2rem' }}>
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
            <div className='bg-white' style={{ paddingBottom: '1rem' }}>
              <hr style={{ marginTop: '0', marginBottom: '1rem' }} />
              <div className='text-end' style={{ paddingRight: '1rem' }}>
                <button
                  type='button'
                  className='btn'
                  style={{ color: '#3469fa' }}
                  onClick={() => setShow(false)}
                >
                  Cancel
                </button>
                <button
                  type='button'
                  className='btn btn-primary'
                  onClick={() => setShow(false)}
                >
                  Save Variants
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Variations;
