import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function ModalConfiguracion(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        ∞ Configuración
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Group>
                <Form.Label>Cambia tu nombre de usuario</Form.Label>
                <Form.Control placeholder='Introduce el nuevo nombre 😁' className='border-0'/>
            </Form.Group>            
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalConfiguracion;