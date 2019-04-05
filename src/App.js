import React, { Component } from 'react';
import './App.css';
import MainNews from './MainNews/MainNews';

import { HashRouter } from 'react-router-dom';



class App extends Component {

  render() {
    return (
      <HashRouter basename='/'>
        <div className="App">

          <MainNews />

        </div>
      </HashRouter>
    );
  }
}

export default App;
