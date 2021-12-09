import React from 'react';
import styles from '../../styles';

const NavItem = ({ text, iconClass, navItemStyle }) => {
  return (
    <li class='nav-item' style={navItemStyle}>
      <div class='nav-link' style={styles.navLink}>
        <i class={iconClass}></i>
        <div>{text}</div>
      </div>
    </li>
  );
};

export default NavItem;
