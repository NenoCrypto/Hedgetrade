import React from 'react';
import { Typography, Container } from '@material-ui/core';

const Footer: React.FC = () => (
  <footer>
    <Container>
      <Typography variant="body2" color="textSecondary" align="center">
        {'© '}{new Date().getFullYear()}{' My Application. All rights reserved.'}
      </Typography>
    </Container>
  </footer>
);

export default Footer;
