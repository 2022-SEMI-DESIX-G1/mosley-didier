import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, Link } from 'react-router-dom';
import Figure from 'react-bootstrap/Figure';
import {FaUser} from 'react-icons/fa';
import {AiFillSetting, AiOutlineLogout} from 'react-icons/ai';
import {BsFillChatLeftFill} from 'react-icons/bs';
import ImgPerfil from './ImgPerfil';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useState, useEffect } from 'react';
import ModalConfiguracion from './ModalConfiguracion';
import ModalRegisterCategory from './ModalRegisterCategory';
import ModalPerfil from './ModalPerfil';
import {BiCategoryAlt} from 'react-icons/bi';


export default function NavigationBar(props){
    const [modalShow, setModalShow] = useState(false);
    const [modalCategoria, setModalCategoria] = useState(false);  
    const [modalPerfil, setModalPerfil] = useState(false);
    let tipo;
    
    useEffect(()=>{
        document.getElementById('username').innerHTML= localStorage.getItem("user_name");
        tipo = localStorage.getItem("user_type");
        console.log(tipo)
    },[])
    
    

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Nav.Link as={Link} to="/">
                        <Navbar.Brand >SIGMA</Navbar.Brand>
                    </Nav.Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">                   
                            <Nav.Link as={Link} to="homepage">Notificaciones</Nav.Link>
                            <NavDropdown title="Categorias" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Tecnología</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Gastronomía
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Moda</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Ver todo
                                </NavDropdown.Item>
                            </NavDropdown>

                            <DropdownButton id="dropdown-basic-button" title='Carrito' variant="danger" className={tipo != '1' ? 'hide':''}>
                                <Dropdown.Item href="#/action-1">
                                    <div className='carrito'>
                                        <div className='img-carrito'>
                                            <img src='https://blog.aulaformativa.com/wp-content/uploads/2014/04/crear-app-movil.jpg' />
                                        </div>
                                        <div className=''>
                                            <h4>Titulo de articulo</h4>
                                            <span>Descripción</span>
                                        </div>
                                    </div>
                                </Dropdown.Item>
                                
                            </DropdownButton>
                        </Nav>
                        <div className="justify-content-end ">
                            <Nav className='perfildown'>
                            <NavDropdown
                                    title={
                                        <div className='d-flex pal-hover'>
                                            <div className='px-2'>
                                                <span id='username' className="text-decoration-none fs-5" href="#"></span><br />
                                                <span className='text-uppercase fs-6 gr-text'>{tipo != '1' ? 'Comprador':'Vendedor'}</span>
                                            </div>


                                            <ImgPerfil fuente='https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80'/>
                                        </div>
                                    }
                                 id="">
                                <NavDropdown.Item onClick={()=>setModalPerfil(true)}><FaUser/> Perfil</NavDropdown.Item>
                                <NavDropdown.Item onClick={()=>setModalShow(true)}><AiFillSetting/> Configuración</NavDropdown.Item>
                                <NavDropdown.Item className={tipo != '1' ? 'hide':''} onClick={()=>setModalCategoria(true)}><BiCategoryAlt/> Agregar Categoria</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item as={Link} to='/' className='text-danger' onClick={()=>localStorage.clear()}><AiOutlineLogout/> Cerrar Sesión</NavDropdown.Item>
                            </NavDropdown>
                                
                            
                            </Nav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <section>
                <Outlet />
            </section>

            <ModalConfiguracion 
                show={modalShow}
                onHide={()=>setModalShow(false)}
            />

            <ModalRegisterCategory
                show={modalCategoria}
                onHide={()=>setModalCategoria(false)}
            />

            <ModalPerfil
                show={modalPerfil}
                onHide={()=>setModalPerfil(false)}
            />
        </>
    )
}