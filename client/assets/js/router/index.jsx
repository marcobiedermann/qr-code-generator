import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import history from './history';
import IndexPage from '../pages/Index';

const Router = () => (
  <ConnectedRouter history={history}>
    <div>
      <Switch>
        <Route exact path="/" component={IndexPage} />
      </Switch>
    </div>
  </ConnectedRouter>
);

export default Router;
