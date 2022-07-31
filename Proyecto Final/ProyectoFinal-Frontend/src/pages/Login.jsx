import Forms from "../components/Forms";
import ModeloLogin from "../components/ModeloLogin";

function Login(){
    return(
        <div>
           <Forms imgbg='portada' modelo={<ModeloLogin/>}/> 
        </div>
        )
}

export default Login;