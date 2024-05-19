import Isotipo from "../../atoms/Isotipo";
import imagenIsotipo from "../../../assets/images/logo_ev.png";
import "./Imagotipo.css";

const Imagotipo = () => {
    return  (
        <div className="imagotipo-container">
            <div className="imagotipo-imgTitle" >
                <Isotipo pathImg={imagenIsotipo} width={'6rem'} height={'2.75rem'}/>
                <h1 className="imagotipo-title">EdVisto</h1>
            </div>
            <h2 className="imagotipo-subtitle">LEARNING THROUGH STORIES</h2>
        </div>
    )
};

export default Imagotipo;
