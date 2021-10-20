import React from 'react';

const Navbar = () => {
  return (
    <div
      style={{
        padding: '0px 20px 0px 20px',
        backgroundColor: 'rgba(255,255,255,0.6)',
      }}
      className='fixed-top'
    >
      <div style={{ display: 'flex' }}>
        <i class='fas fa-arrow-left' style={{ lineHeight: '1.5' }}></i>
        <div className='menu-heading'>
          &nbsp;&nbsp;<b>VIEW PRODUCTS</b>
        </div>
      </div>
      <h4 style={{ marginBottom: '0', paddingTop: '5px' }}>Add Product</h4>
      <hr />
    </div>
  );
};

export default Navbar;
