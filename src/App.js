import React, { Component } from 'react';
import './App.css';
import MainNews from './MainNews/MainNews';

import { BrowserRouter } from 'react-router-dom';



class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <MainNews />
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
