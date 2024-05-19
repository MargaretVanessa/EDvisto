import Isotipo from "../../atoms/Isotipo";
import Avatar from "../../atoms/Avatar";
import logo from "../../../assets/images/logo_ev.png";
import imgUser from "../../../assets/images/img_perfil.jpg";
import theme from "../../../theme/theme.js";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <Isotipo pathImg={logo} width={'5rem'} height={'2.25rem'}/>
      <Avatar pathImg={imgUser} size={48} nameUser={'Cameron Rodriguez'} color={theme.palette.primary.main}/>
    </header>
  )
}

export default Header
