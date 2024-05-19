import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

const list = [
  {
    editProfile: {
      string: "Editar perfil",
      path: "/editProfile"
    }
  },
  {
    logout: {
      string: "Cerrar sesión",
      path: "/"
    }
  }
];

const MenuContainer = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
};

  return (
    <Menu>
      {
        list.map((item, i) => (
          <MenuItem key={i} onClick={handleClick}>
            {item}
          </MenuItem>
        ))
      }
    </Menu>
  )
}

MenuContainer.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string)
}

export default MenuContainer
