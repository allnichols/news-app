import React from 'react';
import styles from './NavItem.module.css';

const navItem = (props) => (
  <li className={styles.NavItem}>
    <a href={props.link}> {props.children} </a> 

  </li>
)

export default navItem;