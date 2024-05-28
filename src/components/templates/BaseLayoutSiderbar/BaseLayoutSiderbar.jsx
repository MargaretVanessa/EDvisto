import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@mui/material';
import VerticalTabs from '../../molecules/VerticalTabs/VerticalTabs.jsx';

const BaseLayoutSiderbar = ({ children }) => {
  return (
    <div style={{background:"white"}}>
      <Container sx={{display: 'flex', justifyContent:'center', marginTop:'1.25rem'}}>
        <VerticalTabs/>
        {children}
      </Container>
    </div>
  );
};

BaseLayoutSiderbar.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BaseLayoutSiderbar;