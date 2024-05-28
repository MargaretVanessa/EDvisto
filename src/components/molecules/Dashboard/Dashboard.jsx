import PropTypes from 'prop-types';
import {Box} from '@mui/material';
import CardContainer from '../CardContainer';

const Dashboard = ({projects}) => {

  return (
    <Box sx={{width: '936px', height: '696px', display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'space-between',   overflow: 'hidden'}}>
        {
            projects.map(project => {
                return <CardContainer key={project.projectId} project={project}/>
            })
        }
    </Box>
  )
}

Dashboard.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Dashboard