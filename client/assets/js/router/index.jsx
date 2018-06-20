import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import history from './history';
import IndexPage from '../pages/Index';

const Router = () => (
  <ConnectedRouter history={history}>
    <div>
      <Route exact path="/" component={IndexPage} />
    </div>
  </ConnectedRouter>
);

export default Router;