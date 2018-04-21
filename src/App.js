import React, { Component } from 'react';
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
        <div>
          <ul>
            <li><Link to="/">ServerMonitorPage</Link></li>
            <li><Link to="/ReleaseControlPage">ReleaseControlPage</Link></li>
          </ul>
          <hr />
          <Route exact path="/" component={ServerMonitorPage}/>
          <Route path="/ReleaseControlPage" component={ReleaseControlPage}/>
        </div>
      </Router>
    );
  }
}

export default App;
