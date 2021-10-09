import React from 'react';
import './../css/component.css';

const Sidemenu = ({ step }) => {
  const mystyle = (number) => {
    if (number === step) return 'nav-link active';
    else return 'nav-link';
  };
  return (
    <div
      style={{ minWidth: '10vw', width: 'auto', padding: '0px 20px 0px 20px' }}
    >
      <nav className='nav flex-column col'>
        <div className='nav-link menu-heading' style={{ fontWeight: '600' }}>
          PRODUCT INFORMATION
        </div>

        <div className={mystyle(1)}>Basic Information</div>
        <div className={mystyle(2)}>Description</div>
        <div className={mystyle(3)}>Images {'&'} Videos</div>
        <div className={mystyle(4)}>Product Identifiers</div>
        <div className={mystyle(5)}>Pricing</div>
        <div className={mystyle(6)}>Inventory</div>

        <div className='nav-link menu-heading' style={{ fontWeight: '600' }}>
          PRODUCT OPTIONS
        </div>

        <div className={mystyle(7)}>Variations</div>
        <div className={mystyle(8)}>Customizations</div>

        <div className='nav-link menu-heading' style={{ fontWeight: '600' }}>
          STOREFRONT
        </div>

        <div className={mystyle(9)}>Storefront Details</div>
        <div className={mystyle(10)}>Custom Fields</div>
        <div className={mystyle(11)}>Related Products</div>

        <div className='nav-link menu-heading' style={{ fontWeight: '600' }}>
          FULFILLMENT
        </div>

        <div className={mystyle(12)}>Dimensions {'&'} Weight</div>
        <div className={mystyle(13)}>Shipping Details</div>
        <div className={mystyle(14)}>Purchasability</div>
        <div className={mystyle(15)}>Gift Wrapping</div>
        <div className={mystyle(16)}>Customs Information</div>

        <div className='nav-link menu-heading' style={{ fontWeight: '600' }}>
          SEO AND SHARING
        </div>

        <div className={mystyle(17)}>SEO</div>
        <div className={mystyle(18)}>Open Graph Sharing</div>
      </nav>
    </div>
  );
};

export default Sidemenu;
