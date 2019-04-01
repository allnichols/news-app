import React, { Component } from 'react';
import './App.css';
import MainNews from './MainNews/MainNews';
import Toolbar from './navigation/Toolbar';
import MobileNav from './navigation/MobileNav/MobileNav';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {

  state = {
    mobileToggle:false,
  }

  toggleMobileMenuHandler = () =>{
    this.setState( { mobileToggle: !this.state.mobileToggle} );
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <MobileNav  open={this.state.mobileToggle}/>
          <Toolbar clicked={this.toggleMobileMenuHandler}/>
          <MainNews />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
