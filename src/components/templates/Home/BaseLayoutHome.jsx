import React from 'react';
import PropTypes from 'prop-types';
import {Container } from '@mui/material';
import theme from "../../../theme/theme";

const BaseLayoutHome = ({ children }) => {
  return (
    <div style={{background:theme.palette.background.main}}>
      
      <Container sx={{display: 'flex', justifyContent:'center', marginTop:'1.25rem'}}>
          {children}
      </Container>
    </div>
  );
};

BaseLayoutHome.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BaseLayoutHome;
