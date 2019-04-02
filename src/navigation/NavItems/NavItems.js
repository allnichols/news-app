import React from 'react';
import styles from './NavItems.module.css';
import { NavLink } from 'react-router-dom';

const navItems = (props) => (
  <ul className={styles.NavItems}>

      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/Topic'>Technology</NavLink></li>

  </ul>
)

export default navItems;
