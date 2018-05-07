import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import ServerMonitorPage from './pages/ServerMonitorPage';
import ReleaseControlPage from './pages/ReleaseControlPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
