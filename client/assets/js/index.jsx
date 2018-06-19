import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import IndexPage from './pages/Index';

const Root = () => (
  <Router>
    <div>
      <Route exact path="/" component={IndexPage} />
    </div>
  </Router>
);

render(<Root />, document.getElementById('root'));
