import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore((prevState = {
	version: 1,
}, action) => {
	if(action.type === 'ADD') {
		return {
			...state,
			version: state.version + action.value
		};
	}
	return state;
})

ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
