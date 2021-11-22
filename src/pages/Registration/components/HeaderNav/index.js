import React from 'react';

const HeaderNav = () => {
  return (
    <div>
      <div style={{ paddingLeft: '20px' }}>
        Please complete all steps below to start selling
      </div>

      <ul class='nav' style={{ flexWrap: 'nowrap' }}>
        <li
          class='nav-item'
          style={{ borderBottom: '1px solid black', width: '8rem' }}
        >
          <div
            class='nav-link text-center'
            aria-current='page'
            href='#'
            style={{ padding: '10px' }}
          >
            <i class='fas fa-hashtag fa-lg'></i>
            <div>GST Details</div>
          </div>
        </li>
        <li
          class='nav-item'
          style={{ borderBottom: '1px solid black', width: '8rem' }}
        >
          <div
            class='nav-link text-center'
            href='#'
            style={{ padding: '10px' }}
          >
            <i class='fas fa-map-marker-alt fa-lg'></i>
            <div>Pickup Address</div>
          </div>
        </li>
        <li
          class='nav-item'
          style={{ borderBottom: '1px solid black', width: '8rem' }}
        >
          <div
            class='nav-link text-center'
            href='#'
            style={{ padding: '10px' }}
          >
            <i class='fas fa-university fa-lg'></i>
            <div>Bank Details</div>
          </div>
        </li>
        <li
          class='nav-item'
          style={{
            borderBottom: '1px solid black',
            width: '8rem',
          }}
        >
          <div class='nav-link text-center' style={{ padding: '10px' }}>
            <i class='fas fa-user fa-lg'></i>
            <div>Supplier Details</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default HeaderNav;
