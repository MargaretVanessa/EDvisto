import './LayoutProyect.css';
import theme from  '../../../theme/theme.js';
import { ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Background from '.././../atoms/Background';
import Header from "../../organisms/Header";

const LayoutProyect = ({color, children}) => {

    console.log(color)
    return (
        <ThemeProvider theme={theme}>
            <div className="layoutProyect">
                <Header/>
                {children}
                <div className="layoutProyect-backround">
                    <Background color={color}/>
                </div>
            </div>
        </ThemeProvider>
    )
}

LayoutProyect.propTypes = {
    color: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.object)
}

export default LayoutProyect
