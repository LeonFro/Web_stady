import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Types from './pages/Types'
import Items from './pages/Items'
import About from './pages/About'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      arrayType:[],
      arrayItem:[]
    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Router>

          <div>
            <div className="row">
              <div class="col-md-6 col-md-offset-3">
                <div class="btn-group" role="group" aria-label="...">
                  <Link to="/" class="btn btn-default">Types</Link>
                  <Link to="/Items" class="btn btn-default">Items</Link>
                  <Link to="/about" class="btn btn-default">About</Link>
                </div>
              </div>
            </div>
            <Route exact path={`/`} render={() => (
              <Types />
            )} />
            <Route exact path={`/Items`} render={() => (
              <Items />
            )} />
            <Route exact path={`/about`} render={() => (
              <About />
            )} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
