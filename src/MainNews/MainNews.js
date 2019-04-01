import React,{Component} from 'react';
import TopNewsMain from './TopNewsMain';
import {Route, NavLink, Switch} from 'react-router-dom';
import styles from './Toolbar.module.css';
import mobile from './MobileNav.module.css';




class MainNews extends Component{

  render(){


    let classes = [mobile.Mobile, mobile.Close];
    if (this.props.open) {
        classes = [mobile.Mobile, mobile.Open];
    }

    return(
      <header className={styles.Toolbar}>
          <div>
            <h2>The News</h2>
          </div>

        <div show={this.props.open.toString()} className={classes.join('')}>
          <nav>
          <ul className={styles.NavItems}>

              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/Topic'>Technology</NavLink></li>

          </ul>
            <div className={styles.Burger}  onClick={this.props.clicked}>
              <span></span>
              <span></span>
              <span></span>
            </div>

          </nav>
        </div>
      </header>
    )

  }



}

export default MainNews;
