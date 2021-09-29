import React from 'react';

const Navbar = () => {
  return (
    <div style={{ padding: '0px 20px 0px 20px', opacity: '0.6' }}>
      <div style={{ display: 'flex' }}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='0.85rem'
          fill='currentColor'
          class='bi bi-arrow-left'
          viewBox='0 0 16 16'
          style={{ margin: '4 0 4 0' }}
        >
          <path
            fill-rule='evenodd'
            d='M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z'
          />
        </svg>
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
