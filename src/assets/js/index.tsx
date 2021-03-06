import React from 'react';
import { render } from 'react-dom';
import 'typeface-roboto/index.css';
import Layout from './components/Layout';
import IndexPage from './pages/Index';

const Root = () => (
  <Layout>
    <IndexPage />
  </Layout>
);

render(<Root />, document.getElementById('root'));
