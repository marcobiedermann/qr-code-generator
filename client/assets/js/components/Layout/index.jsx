import { CssBaseline } from '@material-ui/core';
import {
  createMuiTheme,
  MuiThemeProvider,
} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import Header from '../Header';

const theme = createMuiTheme({});

const Layout = props => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline>
      <Header />
      {props.children}
    </CssBaseline>
  </MuiThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
