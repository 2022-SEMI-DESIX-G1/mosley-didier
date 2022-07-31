import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';

export default function Forms(props){
    return(
        <div className='formulario'>
            <Row>
                <Col className='c1'>
                    <div className={props.imgbg}>
                    </div>
                </Col>

                <Col className='d-flex align-items-center justify-content-center' style={{background:'#f7f7f7'}}>
                    <div className='formu-container' rounded>
                        {props.modelo}
                    </div>
                </Col>
            </Row>
            
        </div>    
    )
}