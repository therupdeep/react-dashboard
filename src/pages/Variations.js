import React, { useState } from 'react';
import './../css/component.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Variations = ({
  prevStep,
  nextStep,
  toggleChange,
  toggleSharedChange,
  handleAddValue,
  handleChangeVariantValue,
  handleChangeTable,
  handleAddRow,
  handleRemoveSpecificRow,
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
  // Fullscreen modal on clicking add variant on the variations page
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  // Vertically centered modal on clicking add shared modal button
  const [sharedModalShow, setSharedModalShow] = useState(false);

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
        <Modal.Header>
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
                  ({values.variantOptions.length} options,{' '}
                  {values.variantOptions.length} variants)
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
              {/* Conditional rendering based on whether the add variant option button has been pressed or not */}
              {values.variantOptions.length > 0 ? (
                <div>
                  <table
                    class='table table-borderless'
                    style={{ marginTop: '1rem' }}
                  >
                    <thead>
                      <tr class='table-light'>
                        <th className='text-start'> Name </th>
                        <th className='text-start'> Type </th>
                        <th className='text-start'> Values </th>
                      </tr>
                    </thead>
                    <tbody>
                      {values.variantOptions.map((item, idx) => (
                        <tr id='addr0' key={idx}>
                          <td>
                            <input
                              type='text'
                              name='name'
                              placeholder='e.g. Color, Size, etc.'
                              value={values.variantOptions[idx].name}
                              onChange={handleChangeTable(idx)}
                              className='form-control'
                            />
                          </td>
                          <td>
                            <select
                              class='form-control'
                              onChange={handleChangeTable(idx)}
                              name='type'
                            >
                              <option
                                selected={
                                  values.variantOptions[idx].type ===
                                  'Radio Buttons'
                                }
                                value='Radio Buttons'
                              >
                                Radio Buttons
                              </option>
                              <option
                                selected={
                                  values.variantOptions[idx].type === '...'
                                }
                                value='...'
                              >
                                ...
                              </option>
                            </select>
                          </td>
                          <td>
                            {/* Mapping Number of values in variantOptions */}
                            {values.variantOptions[idx].variantValues.map(
                              (unit, index) => (
                                <td>
                                  <input
                                    type='text'
                                    name='variantValues'
                                    value={
                                      values.variantOptions[idx].variantValues[
                                        index
                                      ]
                                    }
                                    placeholder='Enter value here'
                                    onChange={handleChangeVariantValue(
                                      idx,
                                      index
                                    )}
                                    className='form-control'
                                    key={index}
                                  />
                                </td>
                              )
                            )}
                            <div>
                              <button
                                type='button'
                                onClick={handleAddValue(idx)}
                                className='btn'
                                style={{ color: '#0d6efd' }}
                              >
                                + Add Another Value
                              </button>
                            </div>
                          </td>
                          <td>
                            <div className='form-check'>
                              <input
                                class='form-check-input'
                                type='radio'
                                name='isDefault'
                                id='default'
                                value='default'
                                checked={
                                  values.variantOptions[idx].isDefault ===
                                  'default'
                                }
                                onChange={handleChangeTable(idx)}
                              />
                              <label className='form-check-label' for='default'>
                                Default
                              </label>
                            </div>
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
                  <hr style={{ width: '100%' }} />
                  <div style={{ paddingTop: '2rem', display: 'flex' }}>
                    <div className='bg-white'>
                      <button
                        type='button'
                        onClick={handleAddRow}
                        className='btn btn-outline-primary'
                      >
                        <i class='fas fa-plus'></i>&nbsp; Add Variant Option
                      </button>
                    </div>
                    &nbsp;&nbsp;&nbsp;
                    <div className='bg-white'>
                      <button type='button' className='btn btn-outline-primary'>
                        <i class='fas fa-plus'></i>&nbsp; Add Shared Variant
                        Option
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div style={{ paddingTop: '2rem', display: 'flex' }}>
                  <div className='bg-white'>
                    <button
                      type='button'
                      onClick={handleAddRow}
                      className='btn btn-outline-primary'
                    >
                      <i class='fas fa-plus'></i>&nbsp; Add Variant Option
                    </button>
                  </div>
                  &nbsp;&nbsp;&nbsp;
                  <div className='bg-white'>
                    <Button
                      variant='outline-primary'
                      onClick={() => setSharedModalShow(true)}
                    >
                      <i class='fas fa-plus'></i>&nbsp; Add Shared Variant
                    </Button>
                  </div>
                </div>
              )}
            </div>
            {/* Add shared variant modal */}
            <Modal
              show={sharedModalShow}
              onHide={() => setSharedModalShow(false)}
              size='lg'
              aria-labelledby='contained-modal-title-vcenter'
              centered
            >
              <Modal.Header>
                <Modal.Title id='contained-modal-title-vcenter'>
                  Add Shared Option
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <table class='table table-borderless'>
                  <thead>
                    <tr>
                      <div class='form-check'>
                        <input
                          class='form-check-input'
                          type='checkbox'
                          id='gridCheck'
                          checked={values.setSelectAll}
                          name='setSelectAll'
                          onChange={toggleChange}
                          style={{ margin: '0.25em 0.25em 0 0' }}
                        />
                        <label class='form-check-label' for='gridCheck'>
                          {values.sharedOptions.length} variant Options
                        </label>
                      </div>
                    </tr>
                    <tr class='table-light'>
                      <th className='text-end' style={{ width: '20%' }}>
                        Option Name
                      </th>
                      <th className='text-start' style={{ width: '20%' }}>
                        Display Label
                      </th>
                      <th className='text-start' style={{ width: '20%' }}>
                        Type
                      </th>
                      <th className='text-start' style={{ width: '20%' }}>
                        Values
                      </th>
                      <th className='text-start' style={{ width: '20%' }}>
                        Products
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {values.sharedOptions.map((unit, idex) => (
                      <tr id='addr0' key={idex}>
                        <td>
                          <div class='form-check text-center'>
                            <input
                              class='form-check-input'
                              type='checkbox'
                              id='gridCheck'
                              checked={values.sharedOptions[idex].selected}
                              name='sharedOptions'
                              onChange={toggleSharedChange(idex)}
                            />
                            <label class='form-check-label' for='gridCheck'>
                              {values.sharedOptions[idex].optionName}
                            </label>
                          </div>
                        </td>
                        <td>{values.sharedOptions[idex].displayLabel}</td>
                        <td>{values.sharedOptions[idex].type}</td>
                        <td>{values.sharedOptions[idex].values}</td>
                        <td>{values.sharedOptions[idex].products}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Modal.Body>
              <Modal.Footer>
                <div className='text-end'>
                  <button
                    type='button'
                    className='btn'
                    style={{ color: '#3469fa' }}
                    onClick={() => setSharedModalShow(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type='button'
                    className='btn btn-primary'
                    onClick={() => setSharedModalShow(false)}
                  >
                    Add
                  </button>
                </div>
              </Modal.Footer>
            </Modal>
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
