import React from 'react';
import styles from './NavItems.module.css';
import NavItem from './NavItem/NavItem';
import {Route, NavLink, Switch} from 'react-router-dom';
import Topics from '../../Topics/Topics';

const navItems = (props) => (
  <ul className={styles.NavItems}>

      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/Topic'>Technology</NavLink></li>

      <Switch>
        <Route path='/Topic' exact/>
      </Switch>

  </ul>
)

export default navItems;
