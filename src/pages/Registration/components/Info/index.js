import React from 'react';
import styles from './styles';

const Info = ({ text }) => {
  return (
    <div style={styles.container}>
      <i class='fas fa-info-circle' style={styles.icon}></i>
      <span style={styles.infoText}> {text}</span>
    </div>
  );
};

export default Info;
