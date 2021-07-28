import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store/store'
import {Provider} from 'react-redux'
import Users from './Users';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Users />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

