import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import Ellipse from '../../atoms/Ellipse';
import imgEva from '../../../assets/images/eva/eva_pet.png';
import './Empty.css';

const Empty = ({title, subtitle, color}) => {
  return (
    <div className='empty_container'>
        {title && <Typography variant='h1' color={color}>{title}</Typography>}
        {subtitle && <Typography variant='h1' color={color}>{subtitle}</Typography>}
        <div className='img_container'>            
            <Ellipse background={color} width={'28.25rem'} height={'28.25rem'} opacity={'50%'}/> 
            <img  className='img_empty' src={imgEva} alt="Imagen de la mascota de EdVisto" width={'22.65rem'}  height={'22.65rem'} />
        </div>
    </div>
  )
}

Empty.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    color: PropTypes.string.isRequired,
  };
  

export default Empty