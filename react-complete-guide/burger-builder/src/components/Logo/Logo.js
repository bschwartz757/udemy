import React from 'react';
import styles from './Logo.css';
import siteLogo from '../../assets/images/burger-logo.png';

const logo = (props) => (
  <div className={styles.Logo}>
    <img src={siteLogo} alt="Burger Logo" />
  </div>
)

export default logo;