import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import FormTitle from "./FormTitle";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ModeloRegistrarServicios() {
  const [inputs, setInputs] = useState({
    service_name: "",
    service_description: "",
    author_name: "",
    author_id: "",
    price: "",
    service_photo: "",
    category_name: "",
  });

  //http://localhost:9000/category/all
  /*const inpFile = document.getElementById('photo').files[0];
                const formData = new FormData();
                formData.append("inpFile",inpFile)
      */

  const [mensaje, setMensaje] = useState();
  const [services, setServices] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { service_name, service_description, price,category_name } = inputs;

  const HandleChange = (e) => {
    // console.log(e.target.value)
    setInputs({ ...inputs,
       [e.target.name]: e.target.value });
  };
  useEffect(() => {
    (async () => {
      const servicesReq = await axios("http://localhost:9000/category/all", {
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
  const onSubmit = async (e) => {
    e.preventDefault();
    // if (service_name !== "" 
    // && service_description !== "" 
    // && price !== "") {
      console.log(service_name,service_description,price,inputs)
      if(service_name && service_description && price){
      // let category_data = document.getElementById("option").value;
      /** METODO DE IMAGEN */
      const inpFile = document.getElementById("photo").files[0];
      const formData = new FormData();
      formData.append("inpFile", inpFile);
      let serciceId;

      const services = {
        service_name,
        service_description,
        price,
        author_name: localStorage.getItem("user_name"),
        author_id: localStorage.getItem("id_user"),
        service_photo: "foto.jpg",
        type: category_name//category_data,
      };
      setLoading(true);
      //subir servicio
       axios
        .post("http://localhost:9000/services", services)
        .then((res) => {
          const { data } = res;
          console.log("datos", data);
          serciceId = data.data._id;
        })
        .catch((error) => {
          console.error(error);
          alert("Hubo un Error EL POST");
        });
//"http://localhost:9000/img/62db6ea74c615eb4daee4dd7"
//subir imagen  62db6ea74c615eb4daee4dd7
       axios
        .put(`http://localhost:9000/img/${serciceId}`,{formData})
        .then((res) => {
          const{imgData} = res;
          console.log(imgData);
          navigate(`/homepage`);
          /*alert(localStorage.getItem('user_name'));
              alert(localStorage.getItem('id_user'));
              alert(document.getElementById('option').value)*/
        })
        .catch((error) => {
          console.error(error);
          alert("Hubo un Error en el PUT");
        });

      setLoading(false);
    }
  };

  return (
    <Form onSubmit={(e) => onSubmit(e)} className="p-5 ">
      <FormTitle titulo="Registro de Servicios" />

      <Form.Group className="mb-3">
        <Form.Label>Nombre del Servicio</Form.Label>
        <Form.Control
          type="text"
          placeholder="ejm: Desarrollo Web 💻"
          className="border-0"
          onChange={(e) => HandleChange(e)}
          value={service_name}
          name="service_name"
          id="service_name"
          autoComplete="off"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripción del Servicio</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          className="border-0"
          onChange={(e) => HandleChange(e)}
          value={service_description}
          name="service_description"
          id="service_description"
          type="text"
          autoComplete="off"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Precio del Servicio</Form.Label>
        <Form.Control
          type="text"
          placeholder="B/.12.50"
          className="border-0"
          onChange={(e) => HandleChange(e)}
          value={price}
          name="price"
          id="price"
          autoComplete="off"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Tipo de Servicio</Form.Label>
        {/* {console.log(inputs.category_name)} */}

        <Form.Select
          id="option"
          // onChange={(e) => {
          //   // console.log(e.target.value);
          //   setInputs({
          //     ...inputs,
          //     category_name: e.target.value,
          //   });
          // }}
          name="category_name"
          onChange={(e) => HandleChange(e)}
          value={inputs?.category_name ?? ""}
        >
          <option selected key="" value="" >prueba</option>
          {/* <option>Programación</option>
          <option>Jardinería</option>
          <option>Abogados</option> */}
          {services &&
            services.map(({ category_name, _id }) => (
              <option key={_id} value={_id}>{category_name}</option>
            ))}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type="file" className="" id="photo" accept=".jpg" />
      </Form.Group>

      <div className="d-flex align-items-center boton">
        <Button size="lg" type="submit" className="boton border-0">
          Guardar
        </Button>
      </div>
    </Form>
  );
}

export default ModeloRegistrarServicios;
