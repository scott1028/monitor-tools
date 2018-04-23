import React, { Component } from 'react';
import './App.css';

import ServerMonitorPage from './pages/ServerMonitorPage';
import ReleaseControlPage from './pages/ReleaseControlPage';
import JobControlPage from './pages/JobControlPage';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';

import { withRouter } from 'react-router'

const Wrapper = withRouter(({value, onChange, history}) => {
  return (
    <div>
      <Tabs
        value={value}
        onChange={onChange(history)}>
        <Tab label="ServerMonitorPage" value="/" />
        <Tab label="ReleaseControlPage" value="ReleaseControlPage" />
        <Tab label="JobControlPage" value="JobControlPage" />
      </Tabs>
      <Route exact path="/" component={ServerMonitorPage}/>
      <Route path="/ReleaseControlPage" component={ReleaseControlPage}/>
      <Route path="/JobControlPage" component={JobControlPage}/>
    </div>
  )
})

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: '/',
    }
    this.onChange = this.onChange.bind(this);
  }
  onChange(history) {
    return (value) => {
      this.setState({
        value
      }, () => {
        history.push(value)
      });
    }
  }
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <Wrapper value={this.state.value} onChange={this.onChange} />
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
