import React, { useState} from 'react';
import PropTypes from 'prop-types';
import BoxContainer from '../../atoms/Box';
import FolderEmpty from '../../atoms/Icon/FolderEmpty';
import Search from '../../atoms/Icon/Search';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Empty from '../../molecules/Empty/Empty';
import BasicButton from '../../atoms/Buttons/BasicButton';
import Folder from '../../atoms/Icon/CreateProyect';
import CreateProyect from '../../organisms/CreateProyect/index';
//import Dashboard from '../../molecules/Dashboard/Dashboard';
import theme from "../../../theme/theme";
import SelEvaluationBox from "../../organisms/SelfEvaluationBox/SelEvaluationBox"

const tabStyles = {
    minHeight: '2.5rem',
    minWidth: '25rem',
    padding: '6px 40px 6px 40px',
    borderRadius: '4px 30px 0px 0px',
    backgroundColor: theme.palette.accent.main,
    color: theme.palette.primary.contrastText,
    textTransform: 'none',
    display: 'flex',
    gap: '1.5rem',
    '& .MuiTab-wrapper': {
      flexDirection: 'row',
      gap: '0.5rem',
      alignItems: 'center',
    },
  };

  const selectedTabStyles = {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  };

  const CustomTabPanel = (props) => {
    const { children, value, index, ...other } = props; //destructuración de props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{display: 'flex', justifyContent: 'center'}}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const BaseTabs = ({projects}) => {
  const [value, setValue] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{height:'50rem', width:'60rem', border: 'none',}}>
      <Box sx={{height:'2.5rem'}}>
        <Tabs value={value} indicatorColor='accent' textColor={'inherit'} aria-label="Tabs-proyect" sx={{height:'2.5rem', width:'100%'}}>
          <Tab icon={<FolderEmpty color={theme.palette.background.main} width={24}/>} iconPosition="start" label="Proyectos" sx={{ ...tabStyles, ...(value === 1 && selectedTabStyles),  color: `${value === 1 ? theme.palette.text.main : theme.palette.background.main}` }}/>
          <Tab icon={<Search color={theme.palette.background.main} width={24}/>} iconPosition="start" label="Investigar"  sx={{ ...tabStyles, ...(value === 1 && selectedTabStyles),  color: `${value === 0 ? theme.palette.text.main : theme.palette.background.main}` }}/>
        
        </Tabs>
       
      </Box>
      
      <BoxContainer color={`${value === 1 ? theme.palette.secondary.main : theme.palette.accent.main}`} type={'section'} height={'48rem'} width={'70rem'} radius={'0 1.25rem 1.25rem 1.25rem'} sx={{overflow: 'auto'}}>     
   
      </BoxContainer>
    </Box>
  );
}

export default BaseTabs;
