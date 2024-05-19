import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';

const ButtonIcon = ({childrenIcon, size}) => {
    return (
        <IconButton sx={{width:size, heigth:size}} >
            {childrenIcon}
        </IconButton>
    )
}

ButtonIcon.propTypes = {
    childrenIcon: PropTypes.node.isRequired,
    size: PropTypes.string.isRequired,
}

export default ButtonIcon
