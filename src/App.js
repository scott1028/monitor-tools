import React, { Component } from 'react';
import { connect } from 'react-redux'
import 'bulma/css/bulma.css'
import './App.css';

import ServerMonitorPage from './pages/ServerMonitorPage';
import ReleaseControlPage from './pages/ReleaseControlPage';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const DEFAULT = {
  value: 1,
};

class App extends Component {
  componentDidMount(){
    document.addEventListener('DOMContentLoaded', function () {
      // Get all "navbar-burger" elements
      var $navbarBurgers = Array.prototype.slice.call(
        document.querySelectorAll('.navbar-burger'), 0);

      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
          $el.addEventListener('click', function () {

            // Get the target from the "data-target" attribute
            var target = $el.dataset.target;
            var $target = document.getElementById(target);

            // Toggle the class on both the "navbar-burger" and the "navbar-menu"
            $el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

          });
        });
      }
    });
  }
  render() {
    return (
      <Router>
        <RounteCmp
          onClick={() => {
            this.props.dispatch({
              type: 'ADD',
              value: DEFAULT.value,
            });
            DEFAULT.value += 3;
            console.log(DEFAULT.value);
          }}
          version={this.props.version}
        />
      </Router>
    );
  }
}

const RounteCmp = ({onClick, version}) => {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="navbar-brand">
          <a className="navbar-item"
             href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png"
                 alt="Bulma: a modern CSS framework based on Flexbox"
                 width="112"
                 height="28" />
          </a>
          <div className="navbar-burger burger"
               data-target="navbarTop">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navbarTop"
             className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item"
                  to="/">ServerMonitorPage</Link>
            <Link className="navbar-item"
                  to="/ReleaseControlPage">ReleaseControlPage</Link>
            <div className="navbar-item"
                 onClick={onClick}>Version: {version}</div>
          </div>
        </div>
      </nav>
      <Route exact path="/" component={ServerMonitorPage} />
      <Route path="/ReleaseControlPage" component={ReleaseControlPage} />
    </div>
  )
}

export default connect(state => {
  return {
    version: state.version,
  }
})(App);
