import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';
import FormTitle from './FormTitle';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from 'react';

export default function ModeloLogin(){
   
    const [inputs, setInputs] = useState({ user_mail: "", user_password: "" });
    const [mensaje, setMensaje] = useState();
    const [loading, setLoading] = useState(false);
  
    const navigate = useNavigate();
  
    const { user_mail, user_password } = inputs;
  
    const HandleChange = (e) => {
      setInputs({ ...inputs, [e.target.name]: e.target.value });
    };
  
    const onSubmit = async (e) => {
      e.preventDefault();
      if (user_mail !== "" && user_password !== "") {
        const Usuario = {
          user_mail,
          user_password,
        };
        setLoading(true);
        await axios
          .post("http://localhost:9000/login", Usuario)
          .then((res) => {
            const { data } = res;
            setMensaje(data.mensaje);
            setTimeout(() => {
              setMensaje("");
              localStorage.setItem("id_user", data.docs._id);
              localStorage.setItem("user_name", data.docs.user_name);
              localStorage.setItem("user_type", data.docs.type);
              navigate(`/homepage`);
              
            }, 1500);
          })
          .catch((error) => {
            console.error(error);
            setMensaje("user_mail u user_password incorrecta");
            setTimeout(() => {
              setMensaje("");
            }, 1500);
          });
        setInputs({ user_mail: "", user_password: "" });
        setLoading(false);
      }
    }
    
   
    return(
        <Form onSubmit={(e) => onSubmit(e)}  className="p-5 ">
            <FormTitle titulo="Bienvenido a"/>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>user_mail Electrónico</Form.Label>
                <Form.Control type="email" placeholder="Introduce el user_mail" className='border-0'
                  onChange={(e) => HandleChange(e)}
                  value={user_mail}
                  name="user_mail"
                  id="user_mail"
                  autoComplete="off"
                />
                <Form.Text className="text-muted">
                    Tranqui, nunca compartimos tus datos ;
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>user_password</Form.Label>
                <Form.Control type="password" placeholder="Pon la user_password aqui" className='border-0'
                 onChange={(e) => HandleChange(e)}
                 value={user_password}
                 name="user_password"
                 id="user_password"
                 autoComplete="off"
                />
            </Form.Group>
            
            <div className='d-flex align-items-center '>
                <Button size="lg" type="submit" className='boton border-0'>
                    Iniciar Sesión
                </Button>
            </div>
            
            <Form.Group className='text-center'>
                <Form.Text>¿No tienes cuenta? <Link to="/registro">Regístrate</Link></Form.Text>
            </Form.Group>
        </Form>
    )
 }
 