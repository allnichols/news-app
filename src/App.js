import React, { Component } from 'react';
import './App.css';
import MainNews from './MainNews/MainNews';
import Toolbar from './navigation/Toolbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <MainNews />
      </div>
    );
  }
}

export default App;
