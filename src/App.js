import React, { Component } from 'react';
import './App.css';
import MainNews from './MainNews/MainNews';

import { BrowserRouter } from 'react-router-dom';



class App extends Component {

  state = {
    mobileToggle:false,
  }

  toggleMobileMenuHandler = () =>{
    this.setState( { mobileToggle: !this.state.mobileToggle} );
    console.log(this.state.mobileToggle);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <MainNews
          open={this.state.mobileToggle}
          clicked={this.toggleMobileMenuHandler} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
