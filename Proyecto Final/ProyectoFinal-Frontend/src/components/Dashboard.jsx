import  Button  from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import NavigationBar from "../components/NavigationBar";
import {GrFormNext} from 'react-icons/gr';
import SectionCards from "./SectionCards";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Dashboard(){
    let tipo;
    useEffect(()=>{
        tipo = localStorage.getItem("user_type");
        console.log(tipo);
    },[]);

    return(
        <>
        <div className="cont-bg2">
            <NavigationBar />
            <Container>
                <div className="main-info d-flex align-items-end">
                    <div className="">
                        <h1 className="text-light pb-3">Bienvenido a <span className="text-dark">SIGMA</span></h1>
                        {/* Tipo 1 es comprador, 2 vendedor*/}
                        <div className={tipo = '1' ? 'hide pb-3':'pb-3'}>
                                <Link to='/registrarservicios'>
                                    <Button variant="dark" className="mw-15">Iniciar </Button><GrFormNext className="fs-3" />
                                </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
        <SectionCards/>
        </>
    )
}