import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import ServerMonitorPage from './pages/ServerMonitorPage';
import ReleaseControlPage from './pages/ReleaseControlPage';

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

export default RounteCmp;
