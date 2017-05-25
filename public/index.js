import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger'
import Root from './containers/Root';
import reducer from './reducers';
import './index.css';
const logger = createLogger({});
const store = createStore(reducer, applyMiddleware(logger));

render(

    <Root store={store} />,
  document.getElementById('root')
);
