import PropTypes from 'prop-types';
import Box from "@mui/material/Box";

const BoxContainer = ({ color, type, height, width, radius }) => {
    return (
        <Box component={type} height={height} width={width} sx={{ border: `3px solid ${color}`, borderRadius:radius }}>
        </Box>
    );
};

BoxContainer.propTypes = {
    color: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['div', 'form', 'section']),
    height: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    radius: PropTypes.string,
};

export default BoxContainer;