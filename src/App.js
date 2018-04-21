import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import './App.css';

import ServerMonitorPage from './pages/ServerMonitorPage';
import ReleaseControlPage from './pages/ReleaseControlPage';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <div className="navbar-menu">
            <div class="navbar-start">
              <Link className="navbar-item" to="/">ServerMonitorPage</Link>
              <Link className="navbar-item" to="/ReleaseControlPage">ReleaseControlPage</Link>
            </div>
          </div>
          <Route exact path="/" component={ServerMonitorPage}/>
          <Route path="/ReleaseControlPage" component={ReleaseControlPage}/>
        </div>
      </Router>
    );
  }
}

export default App;
