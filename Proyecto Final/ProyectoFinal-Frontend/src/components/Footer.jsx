import Container from "react-bootstrap/esm/Container";
import {AiFillInstagram} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';
import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <>
            <div>
                <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 C 0,400 0,133 0,133 C 205.71428571428572,171 822.8571428571429,152 1440,133 C 1440,133 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#f7f7f7" class="transition-all duration-300 ease-in-out delay-150 path-0"></path><path d="M 0,400 C 0,400 0,266 0,266 C 205.71428571428572,342 822.8571428571429,304 1440,266 C 1440,266 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#D9D9D9" class="transition-all duration-300 ease-in-out delay-150 path-1"></path></svg>
            </div>
            <div className="footer py-4" style={{ background: '#D9D9D9' }}>
                <Container className='d-flex justify-content-between'>
                    <div className="">
                        <h3>SIGMA S.A.<br /><span className="fs-6">Tu markeplace para servicios</span></h3>
                    </div>

                    <div className='social-media'>
                        <a className='' href="https://www.instagram.com/"><AiFillInstagram className="fs-1" /></a>
                        <a className='' href="https://www.facebook.com/"><BsFacebook className="fs-1" /></a>
                    </div>
                </Container>
            </div>
        </>
    )
}