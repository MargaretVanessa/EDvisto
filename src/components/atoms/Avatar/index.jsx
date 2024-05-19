import Avatar from "@mui/material/Avatar";
import PropTypes from 'prop-types';

const AvatarContainer = ({ pathImg, size, nameUser, color }) => {
    return (
        <Avatar 
            src={pathImg} 
            alt={nameUser} 
            sx={{ width: size, height: size, border: `2px solid ${color}` }} />
    );
};

AvatarContainer.propTypes = {
    pathImg: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    nameUser: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}

export default AvatarContainer;
