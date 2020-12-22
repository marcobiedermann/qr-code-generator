import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography color="inherit" variant="title">
        QR Code Generator
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
