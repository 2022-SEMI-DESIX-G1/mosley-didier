import Forms from "../components/Forms";
import ModeloRegistrar from "../components/ModeloRegistrar";

function Registrar(){
    return(
        <div>
            <Forms imgbg='portada2' modelo={<ModeloRegistrar/>}/>
        </div>
    )
}

export default Registrar;