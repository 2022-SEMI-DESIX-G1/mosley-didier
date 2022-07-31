import Forms from "../components/Forms";
import ModeloRegistrarServicios from "../components/ModeloRegistrarServicios";

function RegistrarServicios(){
    return(
        <div>
            <Forms imgbg='portada3' modelo={<ModeloRegistrarServicios/>}/>
        </div>
    )
}

export default RegistrarServicios;