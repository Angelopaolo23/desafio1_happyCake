
import { Container, Button, Form } from 'react-bootstrap';
const contactForm = () => {
  return (
    <>
   <Form className='d-flex flex-column'>
      <Form.Group className="mb-3 m-5 text-center" controlId="formBasicEmail">
        <Form.Label>Correo:</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3 m-5 text-center" controlId="formBasicPassword">
        <Form.Label>Descripción:</Form.Label>
        <Form.Control className='py-5' type="message" placeholder="Escribe tu mensaje aqui." />
      </Form.Group>
      <Container className='d-flex align-items-center justify-content-center'>
        <Button className='w-25' variant="warning" type="submit">
          Enviar
        </Button>
      </Container>
    </Form>
    </>
  );
}

export default contactForm;