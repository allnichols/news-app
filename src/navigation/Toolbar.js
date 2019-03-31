import React from 'react';
import styles from './Toolbar.module.css';
import NavItems from './NavItems/NavItems';

const toolbar = (props) => (
  <header className={styles.Toolbar}>
      <div>
        <h2>The News</h2>
      </div>

      <nav>
        <NavItems/>
        <div className={styles.Burger}  onClick={props.clicked}>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </nav>
  </header>
);

export default toolbar;
