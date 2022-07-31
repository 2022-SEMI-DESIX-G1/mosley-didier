import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsFillCartPlusFill } from "react-icons/bs";
import ImgPerfil from "./ImgPerfil";
import axios from 'axios';


function CardExample({ portada, perfil, nombre, cargo, desc, precio, key }) {

  const onClickShop = async () => {
    const {data}= await axios.get('http://localhost:9000/create-payment/'+precio.toString());
    const paymentProduct = await axios.post('http://localhost:9000/create-payment');
    window.location.href=paymentProduct.data.data.links[1].href
  }

  return (
    <div className="d-flex justify-content-around" key={key}>
      <Card style={{ width: "19rem" }} className="mb-5">
        <Card.Img
          variant="top"
          style={{
            objectFit:"cover"
          }}
          src={"http://localhost:9000/images/"+portada}
          className="img-portada"
        />
        <Card.Body>
          <div className="d-flex">
            {/* //aqui va perfil */}
            <ImgPerfil fuente="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80" />
            <Card.Title>
              {nombre} <br />
              <span className="gr-text fs-6">{cargo != '1' ? 'Comprador':'Vendedor'}</span>
            </Card.Title>
          </div>
          <Card.Text>
            {desc}
          </Card.Text>
          <hr />
          <div className="d-flex justify-content-between">
            
            <Button variant="error" onClick={onClickShop}>
              <BsFillCartPlusFill className="gr-text fs-3" />
            </Button>
            <Card.Title>
              <span className="fs-6 text-uppercase">Precio desde: </span>
              <span className="gr-text">B/. {(Math.round(Number(precio ?? 0) *100) /100).toFixed(2)}</span>
            </Card.Title>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardExample;
