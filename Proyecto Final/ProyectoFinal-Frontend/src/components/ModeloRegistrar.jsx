import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';
import FormTitle from './FormTitle';
import { useNavigate } from "react-router-dom";
import axios from "axios";


function ModeloRegistrar(){

        const [inputs, setInputs] = useState({
            user_name: "",
            user_mail: "",
            user_password:"",
            phone: "",
            birthday: "",
            type: "",
        });
        const [mensaje, setMensaje] = useState();
        const [loading, setLoading] = useState(false);
      
        const navigate = useNavigate();
      
        const { user_name, user_mail, user_password, phone, birthday,type } = inputs;
      
        const HandleChange = (e) => {
          setInputs({ ...inputs, [e.target.name]: e.target.value });
        };
      
        const onSubmit = async (e) => {
          e.preventDefault();
          if (user_name !== "" && user_password !== "" && user_mail !== "") {
            const Usuario = {
                user_name,
                user_password,
                user_mail,
            };
            setLoading(true);
            await axios
              .post("http://localhost:9000/register", Usuario)
              .then((res) => {
                const { data } = res;
                setMensaje(data.mensaje);
                setInputs({ nombre: "", contraseña: "", correo: "" });
                setTimeout(() => {
                  setMensaje("");
                  navigate("/login");
                }, 1500);
              })
              .catch((error) => {
                console.error(error);
                setMensaje("Hubo un error");
                setTimeout(() => {
                  setMensaje("");
                }, 1500);
              });
      
            setLoading(false);
          }
          
        };
    return(
        <Form onSubmit={(e) => onSubmit(e)} className="p-5 ">
            <FormTitle titulo="Regístrate en"/>

            <div className='d-flex justify-content-between'>
                <Form.Group className='mb-3'>
                    <Form.Label>Nombre Completo</Form.Label>
                    <Form.Control placeholder='Fulano Gamboa'  className='border-0'
                        onChange={(e) => HandleChange(e)}
                        value={user_name}
                        name="user_name"
                        id="user_name"
                        type="text"
                        autoComplete="off"
                     />
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Fecha de Nacimiento</Form.Label>
                    <Form.Control type='date' className='border-0'
                     onChange={(e) => HandleChange(e)}
                     value={birthday}
                     name="birthday"
                     id="birthday"
                     autoComplete="off"
                    />
                </Form.Group>
            </div>
            <Form.Group className='mb-3'>
                <Form.Label>Teléfono</Form.Label>
                <Form.Control type="" placeholder='777-0000'  className='border-0'
                  onChange={(e) => HandleChange(e)}
                  value={phone}
                  name="phone"
                  id="phone"
                  autoComplete="off"
                />
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>Tipo de Usuario</Form.Label>
                <Form.Select  onChange={(e) => HandleChange(e)}
                        value={type}
                        name="type"
                        id="type"     
                       >
                    <option>Vendedor</option>
                    <option>Comprador</option>
                </Form.Select>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control type="email" placeholder="tucorreo@ejemplo.com" className='border-0'
                 onChange={(e) => HandleChange(e)}
                 value={user_mail}
                 name="user_mail"
                 id="user_mail"
                 autoComplete="off"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Crea una contraseña aqui" className='border-0'
                   onChange={(e) => HandleChange(e)}
                   value={user_password}
                   name="user_password"
                   id="user_password"
                   autoComplete="off"
                />
            </Form.Group>
            
            <div className='d-flex align-items-center boton'>
                <Button size="lg" type="submit" className='boton border-0'>
                    Registrarse
                </Button>
            </div>
            
            <Form.Group className='text-center'>
                <Form.Text>¿Ya tienes cuenta? <Link to="/login">Inicia Sesión</Link></Form.Text>
            </Form.Group>
        </Form>
        )
}

export default ModeloRegistrar;