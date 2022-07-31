import Slider from "react-slick";
import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CardExample from "../components/CardExample";
import axios from 'axios';

export default class PauseOnHover extends Component {
    state = {
      datitos: [],
    };
  

  componentDidMount() {
    axios.get(`http://localhost:9000/services/all`).then((res) => {
      console.log("mis datitos bonitos", res?.data);
      const datitos = res?.data?.data;
      this.setState({ datitos });
    });
  }

  

  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
    };
    const infoTemporal = [
      {
        portada:
          "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe",
        perfil:
          "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
        nombre: "Jostin Gamboa ",
        cargo: "Software Dev",
        desc: "Some quick example text to build on the card title and make up thebulk of the cards content.",
        precio: "25.00",
      },
      {
        portada:
          "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe",
        perfil:
          "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
        nombre: "Jostin Gamboa ",
        cargo: "Software Dev",
        desc: "Some quick example text to build on the card title and make up thebulk of the cards content.",
        precio: "25.00",
      },
      {
        portada:
          "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe",
        perfil:
          "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
        nombre: "Jostin Gamboa ",
        cargo: "Software Dev",
        desc: "Some quick example text to build on the card title and make up thebulk of the cards content.",
        precio: "25.00",
      },
      {
        portada:
          "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe",
        perfil:
          "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
        nombre: "Jostin Gamboa ",
        cargo: "Software Dev",
        desc: "Some quick example text to build on the card title and make up thebulk of the cards content.",
        precio: "25.00",
      },
      {
        portada:
          "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe",
        perfil:
          "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
        nombre: "Jostin Gamboa ",
        cargo: "Software Dev",
        desc: "Some quick example text to build on the card title and make up thebulk of the cards content.",
        precio: "25.00",
      },
      {
        portada:
          "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe",
        perfil:
          "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
        nombre: "Jostin Gamboa ",
        cargo: "Software Dev",
        desc: "Some quick example text to build on the card title and make up thebulk of the cards content.",
        precio: "25.00",
      },
      {
        portada:
          "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe",
        perfil:
          "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
        nombre: "Jostin Gamboa ",
        cargo: "Software Dev",
        desc: "Some quick example text to build on the card title and make up thebulk of the cards content.",
        precio: "25.00",
      },
      {
        portada:
          "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe",
        perfil:
          "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
        nombre: "Jostin Gamboa ",
        cargo: "Software Dev",
        desc: "Some quick example text to build on the card title and make up thebulk of the cards content.",
        precio: "25.00",
      },
    ];

    return (
      <div>
        <h2>¡Contrata a los mejores!</h2>

            {/* <CardExample
              portada={"texto"}
              perfil={"texto"}
              nombre={"texto"}
              cargo={"texto"}
              desc={"texto"}
              precio={"tesxto"}
              key={"pruueba"}

            /> */}
        <Slider {...settings}>
          {/* {console.log("STATE", this.state.datitos)} */}
          {(this.state?.datitos?.length >= 0)
           && (this.state.datitos.map((info) => {
              console.log("info", info)
            return   <CardExample
                  portada={info.service_photo}
                  perfil={info.service_photo}
                  nombre={info.author_name}
                  cargo={info.type}
                  desc={info.service_description}
                  precio={info.price}
                  key={info.author_id}
                />
           }
          ))}
        </Slider>
      </div>
    );
  }
}