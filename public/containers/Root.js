import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import AddShopPage from '../containers/AddShopPage';
import Edit from '../containers/Edit';
import AddMenuPage from '../containers/AddMenuPage';
import SignInForm from './SignInForm';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={SignInForm} />
      <Route path="/add-shop" component={AddShopPage} />
      <Route path="/shops/:id/edit" component={Edit}/>
      <Route path="/shops/:id/menu" component={AddMenuPage}/>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
