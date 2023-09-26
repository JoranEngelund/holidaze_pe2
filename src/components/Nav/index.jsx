import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../Logo";
import { NavDropdown } from "react-bootstrap";
import checkToken from "../../auth";
import useStorage from "../../hooks/useStorage";
import useGetProfile from "../../hooks/useGetProfile";
import { PROFILE_URL } from "../../constants";
/**
 * Navigation component for displaying the website's navigation menu.
 *
 * @component
 * @param {Object} props - The component's properties.
 * @param {Function} props.handleShow - A function to handle showing the login modal.
 * @returns {JSX.Element} The JSX element representing the navigation menu.
 */
const Navigation = ({ handleShow }) => {
  const isActive = (link) => {
    return location.pathname === link;
  };

  const { token } = checkToken();
  const { load, clear } = useStorage();
  const user = load("user");
  const userName = user ? user.name : "";
  const PROFILES_URL = userName
    ? `${PROFILE_URL}${userName}?_bookings=true&_venues=true&`
    : "";
  const { data } = useGetProfile(PROFILES_URL);
  const { venueManager } = data;

  return (
    <Navbar expand="lg" className="nav">
      <Container fluid className="d-flex justify-content-between">
        <Logo />
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="menuIcon" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 ms-4 me-4  fs-5">
            <Nav.Link
              className="navLink me-5 "
              href="/"
              style={{ color: isActive("/") ? "black" : "" }}
            >
              Home
            </Nav.Link>
            {token ? (
              user && venueManager !== undefined ? (
                venueManager ? (
                  <NavDropdown title={user.name} id="basic-nav-dropdown">
                    <NavDropdown.Item href={`/profile/${userName}`}>
                      Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href={`/profile/${userName}/reservations`}
                    >
                      Reservations
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href={`/profile/${userName}/venue-manager-settings`}
                    >
                      Add Venue
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="/"
                      onClick={() => {
                        clear();
                        window.location.reload();
                      }}
                    >
                      Log out
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <NavDropdown title={user.name} id="basic-nav-dropdown">
                    <NavDropdown.Item href={`/profile/${userName}`}>
                      Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      to="/"
                      onClick={() => {
                        clear(); // Invoke the clear function here
                        window.location.replace("/");
                      }}
                    >
                      Log out
                    </NavDropdown.Item>
                  </NavDropdown>
                )
              ) : null
            ) : (
              <Nav.Link
                onClick={handleShow}
                className="navLink ps-2"
                style={{ color: isActive("") ? "black" : "" }}
              >
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
