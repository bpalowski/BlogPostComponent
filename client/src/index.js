import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';

import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux'

import store from './state/store/index'


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

