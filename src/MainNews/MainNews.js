import React,{Component} from 'react';
import TopNewsMain from './TopNewsMain';
import MobileNav from '../navigation/MobileNav/MobileNav';
import Topics from '../Topics/Topics';
import {Route, Switch} from 'react-router-dom';
import styles from './Toolbar.module.css';





class MainNews extends Component{

  state = {
    mobileToggle:false,
  }

  toggleMobileMenuHandler = () =>{
    this.setState( { mobileToggle: !this.state.mobileToggle} );
  }

  render(){


    return(
    <React.Fragment>
      <header className={styles.Toolbar}>
          <div>
            <h2>The News</h2>
          </div>

          <nav>

            <MobileNav open={this.state.mobileToggle} />

          <div className={styles.Burger}  onClick={this.toggleMobileMenuHandler}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          </nav>
      </header>
      <Switch>
        <Route path='/' exact component={TopNewsMain} />
        <Route path='/Topic' exact component={Topics} />
      </Switch>

    </React.Fragment>
    )

  }



}

export default MainNews;
