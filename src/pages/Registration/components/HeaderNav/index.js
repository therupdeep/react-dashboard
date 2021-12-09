import React from 'react';
import styles from './styles';
import NavItem from './components/NavItem';

const HeaderNav = ({ step }) => {
  const navItemStyle = (number) => {
    if (number === step) return styles.navItemActive;
    else return styles.navItem;
  };
  return (
    <div>
      <div style={styles.topText}>
        Please complete all steps below to start selling
      </div>

      <ul class='nav' style={styles.list}>
        <NavItem
          text='GST Details'
          iconClass='fas fa-hashtag fa-lg'
          navItemStyle={navItemStyle(2)}
        />
        <NavItem
          text='Pickup Address'
          iconClass='fas fa-map-marker-alt fa-lg'
          navItemStyle={navItemStyle(3)}
        />
        <NavItem
          text='Bank Details'
          iconClass='fas fa-university fa-lg'
          navItemStyle={navItemStyle(4)}
        />
        <NavItem
          text='Supplier Details'
          iconClass='fas fa-user fa-lg'
          navItemStyle={navItemStyle(5)}
        />
      </ul>
    </div>
  );
};

export default HeaderNav;
