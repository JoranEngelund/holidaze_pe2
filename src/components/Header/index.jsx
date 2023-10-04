import LoginModal from "../Modals/login";
import Navigation from "../Nav";
import * as s from "./styled";
import useModal from "../../hooks/useModal";
import RegisterModal from "../Modals/register";
/**
 * Header component that renders navigation and modals for login and registration.
 *
 * @returns {JSX.Element} The rendered header component.
 */
const Header = () => {
  const {
    show,
    handleShow,
    handleClose,
    showRegister,
    handleRegister,
    handleRegisterClose,
  } = useModal();
  return (
    <s.Header>
      <Navigation handleShow={handleShow} />
      <LoginModal
        show={show}
        handleClose={handleClose}
        handleRegister={handleRegister}
      />
      <RegisterModal
        handleShow={handleShow}
        showRegister={showRegister}
        handleRegisterClose={handleRegisterClose}
      />
    </s.Header>
  );
};

export default Header;
