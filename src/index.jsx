import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/app';
import Reducers from './reducers'

let store = createStore(Reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.attach'));
