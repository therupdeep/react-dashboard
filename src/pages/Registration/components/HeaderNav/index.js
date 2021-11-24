import React from 'react';
import styles from './styles';
import NavItem from './components/NavItem';

const HeaderNav = () => {
  return (
    <div>
      <div style={styles.topText}>
        Please complete all steps below to start selling
      </div>

      <ul class='nav' style={styles.list}>
        <NavItem text='GST Details' iconClass='fas fa-hashtag fa-lg' />
        <NavItem
          text='Pickup Address'
          iconClass='fas fa-map-marker-alt fa-lg'
        />
        <NavItem text='Bank Details' iconClass='fas fa-university fa-lg' />
        <NavItem text='Supplier Details' iconClass='fas fa-user fa-lg' />
      </ul>
    </div>
  );
};

export default HeaderNav;
