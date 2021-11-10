import React from 'react';
import styles from './styles';
import MainHeading from '../MainHeading';

const PageHeader = ({ header, subtext }) => {
  return (
    <div style={styles.main}>
      <MainHeading text={header} />
      <div>{subtext}</div>
    </div>
  );
};

export default PageHeader;
