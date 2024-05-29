import Isotipo from '../../atoms/Isotipo/index.jsx';
import Avatar from '../../atoms/Avatar/index.jsx';
import logo from '../../../assets/images/logo_ev.png';
import imgUser from '../../../assets/images/img_perfilT.png';
import './Header.css';
import theme from "../../../theme/theme.js";

const HeaderTeacher = () => {
  return (
    <header className="header-container">
      <Avatar pathImg={imgUser} size={48} nameUser={'Cameron Rodriguez'} color={theme.palette.primary.main}/>
    </header>
  )
}

export default HeaderTeacher