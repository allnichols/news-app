import React from 'react';
import styles from './NavItems.module.css';
import NavItem from './NavItem/NavItem';

const navItems = (props) => (
  <ul className={styles.NavItems}>
      <NavItem link='/' active>Home</NavItem>
      <NavItem>Technology</NavItem>

  </ul>
)

export default navItems;
