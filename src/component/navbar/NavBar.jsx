import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../img/logo_sn.png";
import "./navbar.scss";

export default function NavBar() {
  return (
    <Navbar
      className="nav-bar"
      collapseOnSelect
      expand="lg"
      variant="light"
      fixed="top"
    >
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto fs-5">
            <Nav.Link href="#intro">Home</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
