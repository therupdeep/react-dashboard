import React from 'react';
import styles from '../../styles';

const NavItem = ({ text, iconClass }) => {
  return (
    <li class='nav-item' style={styles.navItem}>
      <div class='nav-link' style={styles.navLink}>
        <i class={iconClass}></i>
        <div>{text}</div>
      </div>
    </li>
  );
};

export default NavItem;
