import React from 'react';
import NavItems from '../NavItems/NavItems';
import styles from './MobileNav.module.css'

const mobileNav = (props) => {


  let classes = [styles.Mobile, styles.Close];
  if (props.open) {
      classes = [styles.Mobile, styles.Open];
  }

  return(

    <div
    show={props.open.toString()}
    className={classes.join(' ')}>
      <nav>
        <NavItems />
      </nav>
    </div>

  );


}

export default mobileNav;
