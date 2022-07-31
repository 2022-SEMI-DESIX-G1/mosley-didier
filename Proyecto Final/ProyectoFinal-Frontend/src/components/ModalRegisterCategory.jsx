import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import FormTitle from './FormTitle';


function ModalRegisterCategory(props) {
  const [inputs, setInputs] = useState({
    category_name:''
  });

  const [services, setServices] = useState(null);

  const {category_name} = inputs;

  const HandleChange = (e) => {
    // console.log(e.target.value)
    setInputs({ ...inputs,
       [e.target.name]: e.target.value });
  };

  useEffect(() => {
    (async () => {
      const servicesReq = await axios("http://localhost:9000/category", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log({ servicesReq });
      if (servicesReq?.data?.data?.length >= 0)
        setServices(servicesReq?.data?.data);
    })();
  }, []);

  const onSubmit = async(e)=>{
    e.preventDefault();

    setLoading(true);
      //subir servicio
       axios
        .post("http://localhost:9000/services", services)
        .then((res) => {
          const { data } = res;
          console.log("datos", data)
          serciceId = data.data._id;
          /*alert(localStorage.getItem('user_name'));
              alert(localStorage.getItem('id_user'));
              alert(document.getElementById('option').value)*/
        })
        .catch((error) => {
          console.error(error);
          alert("Hubo un Error EL POST");
        });
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Registrar Categoria</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Modal.Title id="contained-modal-title-vcenter">
          <FormTitle titulo=' '/>
        </Modal.Title>
        <Form>
          <Form.Group>
            <Form.Label>Introduzca una Categoria</Form.Label>
            <Form.Control 
              placeholder='Nueva categoria...'
              onChange={(e) => HandleChange(e)}
              value={category_name}
              name="category_name"
              id="category_name"
             />
          </Form.Group>

          <div className='d-flex align-items-center boton my-2'>
                <Button size="lg" type="submit" className='boton border-0'>
                    Guardar
                </Button>
            </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalRegisterCategory;