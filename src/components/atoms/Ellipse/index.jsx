import './Ellipse.css';
import PropTypes from "prop-types";

const Ellipse = ({background, width, height}) => {
  return (
    <div className="ellipse"
      style={{background: background,
        width: width,
        height: height}}>
      
    </div>
  )
}

Ellipse.propTypes = {
  background: PropTypes.string.isRequired, 
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired, 
};


export default Ellipse
