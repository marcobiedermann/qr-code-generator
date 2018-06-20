import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import IndexPage from './pages/Index';
import store from './store';

const Root = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={IndexPage} />
      </div>
    </Router>
  </Provider>
);

render(<Root />, document.getElementById('root'));
