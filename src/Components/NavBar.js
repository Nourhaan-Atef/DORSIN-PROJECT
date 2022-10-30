import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-scroll";
import "../main.css";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <Link
            className="link"
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            DORSIN
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <Link
                className="link"
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Home
              </Link>
            </Nav.Link>
            <Nav.Link href="#Services">
              <Link
                to="Services"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Services
              </Link>
            </Nav.Link>
            <Nav.Link href="#features">
              <Link
                to="features"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Features
              </Link>
            </Nav.Link>
            <Nav.Link href="#price">
              <Link
                to="price"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Pricing
              </Link>{" "}
            </Nav.Link>
            <Nav.Link href="#team">
              <Link
                to="team"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Team
              </Link>
            </Nav.Link>
            <Nav.Link href="#blog">
              <Link
                to="blog"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Blog
              </Link>
            </Nav.Link>
            <Nav.Link href="#contact">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Contact
              </Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <Button>Try it Free</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
