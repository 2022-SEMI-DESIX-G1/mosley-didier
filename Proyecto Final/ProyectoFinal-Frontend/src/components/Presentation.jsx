import NavigationBar from "./NavigationBar";
import ServiceCard from "./ServiceCard";
import Container from "react-bootstrap/esm/Container";
import MainNavBar from "./MainNavBar";

export default function Presentation(){
    return(
        <div className="main-container">
            <MainNavBar/>
            <Container className='d-flex justify-content-center flex-column presentation'>
                <div className="info text-light w-75 text-left my-5">
                    <h1>Encuentra los mejores servicios para tu negocio</h1>
                    <span>Contamos con una alta variedad de servicios y ofertas en casi todas las áreas. ¿Qué esperas? anímate y digitaliza la manera en que trabajas.</span>
                </div>
                <div className="s-container d-flex my-3 overflow-auto">
                    <ServiceCard title="Postea tus servicios" mininfo="Ponte en la suma ahora >" href='#s1'/>
                    <ServiceCard title="Busca proyectos en los que puedas trabajar" mininfo="¿Qué son los camaroncitos?" href='#s2'/>
                    <ServiceCard title="Ayudanos a fichar talentos" mininfo="¿Cómo asi?" href='#s3'/>                   
                </div>
            </Container>
            
        </div>
    )
}