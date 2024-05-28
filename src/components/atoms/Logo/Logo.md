Logo
El componente Logo es una representación de un logotipo para EdVisto.

Props
pathImg: string
Obligatorio
La ruta de la imagen del logotipo.
width: string
Obligatorio
El ancho del logotipo.
height: string
Obligatorio
La altura del logotipo.
Uso
import PropTypes from 'prop-types';

const Logo = ({ pathImg, width, height }) => {
    return (
        <img
            src={pathImg}
            alt="Isotipo de EdVisto"
            style={{ width: width, height: height }}
        />
    );
};

Logo.propTypes = {
    pathImg: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
}

export default Logo;
LogoEdVistoDisponible LogoEdDisponible

Ejemplo de Uso
import Logo from './components/atoms/Logo';
import logoImg from './assets/images/logos/logo_Edvisto.png'; //ruta de la imagen del logo
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme.js'; 

const MyComponent = () => {
    return (
        <ThemeProvider theme={theme}>
            <Logo pathImg={logoImg} width={'17rem'} height={'4rem'}/>
        </ThemeProvider>
    );
};

export default MyComponent;
```