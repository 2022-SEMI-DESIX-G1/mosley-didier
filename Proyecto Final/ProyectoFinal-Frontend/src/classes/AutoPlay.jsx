import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CardExample from "../components/CardExample";

export default class AutoPlay extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear"
          };
      const infoTemporal = [
        {
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },
        {
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },
        {
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },
        {
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },{
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },{
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },{
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },{
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },
        {
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },
        {
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },
        {
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },
        {
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },{
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },{
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },{
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },{
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },
        {
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },
        {
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },
        {
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },
        {
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },{
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },{
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },{
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },{
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },
        {
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },
        {
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },
        {
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },
        {
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },{
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },{
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },{
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        },{
            portada: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/03/javascript.jpg?itok=-I5_Pjbe',
            perfil: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            nombre: 'Jostin Gamboa ',
            cargo: 'Software Dev',
            desc: 'Some quick example text to build on the card title and make up thebulk of the cards content.',
            precio: '25.00'
        }
    ];
      return (
        <div>
          <h2>¿Qué esperas? ¡Ponte a sumar!</h2>
          <Slider {...settings}>
          {
                    infoTemporal.map(info => (
                        <CardExample
                            portada={info.portada}
                            perfil={info.perfil}
                            nombre={info.nombre}
                            cargo={info.cargo}
                            desc={info.desc}
                            precio={info.precio}
                        />
                    ))
                }  
          </Slider>
        </div>
      );
    }
  }