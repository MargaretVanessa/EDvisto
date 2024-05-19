// import LayoutLogin from "../../templates/LayoutLogin";
// import ModalContainer from "../../atoms/Modal";
import Dialog from "../../atoms/Dialog";
import PageRegister from "../../organisms/FormRegister";

const Register = () => {
    return (
        // <ModalContainer>
        //     <PageRegister />
        // </ModalContainer>

        <Dialog>
            <PageRegister />
        </Dialog>
    );
};

export default Register;
