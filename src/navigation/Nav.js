import React from 'react';
import styles from './Nav.module.css';
import { NavLink } from 'react-router-dom';

const nav = (props) => (

  <ul className={styles.Nav}>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/Technology'>Technology</NavLink></li>
      <li><NavLink to='/Science'>Science</NavLink></li>
      <li><NavLink to='/Business'>Business</NavLink></li>
      <li><NavLink to='/Politics'>Politics</NavLink></li>
      <li><NavLink to='/bitcoin'>Bitcoin</NavLink></li>

  </ul>

)

export default nav;
