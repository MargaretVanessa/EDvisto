import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import Modal from "@mui/material/Modal";
import theme from '../../../theme/theme.js';

const style = {
    // position: "absolute",
    // top: "50%",
    // left: "50%",
    // transform: "translate(-50%, -50%)",
    width: "100%",
    height: "100vh",
    bgcolor: `${theme.palette.gray.main}`,
    p: 4,
};

const ModalContainer = ({ children }) => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(true);

    const handleClose = (path) => {
        setOpen(false);
        navigate(path);
    };

    return (
        <div>
            <Modal
                open={open}
                onClose={()=> handleClose("/")}
                role="modal"
                aria-labelledby="Registro"
                aria-describedby="Formulario de Registro de EdVisto"
                disableEnforceFocus
                sx={style}
            >
                {children}
            </Modal>
        </div>
    );
};

ModalContainer.propTypes = {
    children: PropTypes.node.isRequired,
}


export default ModalContainer;
