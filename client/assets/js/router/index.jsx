import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import history from './history';
import Layout from '../components/Layout';
import IndexPage from '../pages/Index';

const Router = () => (
  <ConnectedRouter history={history}>
    <Layout>
      <Switch>
        <Route exact path="/" component={IndexPage} />
      </Switch>
    </Layout>
  </ConnectedRouter>
);

export default Router;
