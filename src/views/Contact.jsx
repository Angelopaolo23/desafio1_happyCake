import { Container } from "react-bootstrap";
import ContactForm from "../components/ContactForm";

export default () => {
  return (
    <Container className="pt-5">
      <h1 className="mb-4 text-center mt-5">Cuentanos, ¿en que te podemos ayudar?</h1>
      <ContactForm />
    </Container>
  );
};
