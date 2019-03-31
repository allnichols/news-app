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
      </nav>
  </header>
);

export default toolbar;
