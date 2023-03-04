import { Container } from "react-bootstrap";

export default () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5">
        Bienvenido a <span className="fw-bold">Happy Cake</span>
      </h1>
      <h6 className="mb-5"> El lugar de los pasteles felices </h6>
      <img src="https://images.pexels.com/photos/2684556/pexels-photo-2684556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Happy cake" width="400" height="500"></img>
    </Container>
  );
};
