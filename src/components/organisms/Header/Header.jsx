import Isotipo from '../../atoms/Isotipo/index.jsx';
import Avatar from '../../atoms/Avatar/index.jsx';
import logo from '../../../assets/images/logo_ev.png';
import imgUser from '../../../assets/images/img_perfil.jpg';
import './Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <Isotipo pathImg={logo} width={'5rem'} height={'2.25rem'}/>
      <Avatar pathImg={imgUser} size={48} nameUser={'Cameron Rodriguez'} color={theme.palette.primary.main}/>
    </header>
  )
}

export default Header