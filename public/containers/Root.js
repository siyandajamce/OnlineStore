import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import App from '../components/App';
import Edit from '../containers/Edit';
import AddMenu from '../containers/AddMenu';
import SignInForm from './SignInForm';


const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={SignInForm} />
       <Route path="/main" component={App} />
      <Route path="/shops/:id/edit" component={Edit}/>
      <Route path="/menu" component={AddMenu}/>

    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
