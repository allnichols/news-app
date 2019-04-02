import React from 'react';
import styles from './NavItems.module.css';
import { NavLink } from 'react-router-dom';

const navItems = (props) => (

  <ul className={styles.NavItems}>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/Technology'>Technology</NavLink></li>
      <li><NavLink to='/Science'>Science</NavLink></li>
  </ul>
  
)

export default navItems;
