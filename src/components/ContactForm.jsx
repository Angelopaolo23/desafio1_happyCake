import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const contactForm = () => {
  return (
    <>
    <Form className='d-flex flex-column align-items-center justify-content-center'>
      <Form.Group className="mb-3 m-5 text-center" controlId="formBasicEmail">
        <Form.Label>Correo:</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3 m-5 text-center" controlId="formBasicPassword">
        <Form.Label>Descripción:</Form.Label>
        <Form.Control type="message" placeholder="Escribe tu mensaje aqui." />
      </Form.Group>
      <Button className='' variant="danger" type="submit">
        Enviar
      </Button>
    </Form>
    </>
  );
}

export default contactForm;