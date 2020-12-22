import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import React, { FC } from 'react';
import Header from '../Header';

const theme = createMuiTheme({});

const Layout: FC = (props) => {
  const { children } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline>
        <Header />
        {children}
      </CssBaseline>
    </MuiThemeProvider>
  );
};

export default Layout;
