import React, { Component } from 'react';
import './App.css';
import MainNews from './MainNews/MainNews';
import Toolbar from './navigation/Toolbar';
import MobileNav from './navigation/MobileNav/MobileNav';

class App extends Component {

  state = {
    mobileToggle:false,
  }

  toggleMobileMenuHandler = () =>{
    this.setState( { mobileToggle: !this.state.mobileToggle} );
    console.log('clicked', this.state.mobileToggle);
  }

  render() {
    return (
      <div className="App">
        <MobileNav  open={this.state.mobileToggle}/>
        <Toolbar clicked={this.toggleMobileMenuHandler}/>
        <MainNews />
      </div>
    );
  }
}

export default App;
