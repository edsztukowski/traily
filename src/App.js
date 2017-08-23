import React, { Component } from 'react';
import './App.css';
var Home = require('./Home')

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
