import React, { Component } from 'react';
import './App.css';
var Home = require('./Home');
var TrailResults = require('./TrailResults')
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path = "/results" component={TrailResults} />
            <Route render={function() {
              return <p>Not Found</p>
            }} />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
