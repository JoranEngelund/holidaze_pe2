import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../Logo";

/**
 * A navigation bar component for the application.
 *
 * @component
 * @returns {JSX.Element} The JSX element representing the Navigation component.
 */
const Navigation = () => {
  const isActive = (link) => {
    return location.pathname === link;
  };

  return (
    <Navbar expand="lg" className="nav">
      <Container fluid className="d-flex justify-content-between">
        <Logo />
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="menuIcon" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 ms-4 me-4  fs-5">
            <Nav.Link
              className="navLink me-5 ps-2"
              href="/"
              style={{ color: isActive("/") ? "black" : "" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="/login"
              className="navLink ps-2"
              style={{ color: isActive("") ? "black" : "" }}
            >
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
